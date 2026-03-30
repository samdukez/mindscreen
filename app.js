// app.js — MindScreen core application engine
(function () {
    'use strict';

    // ─── State ───
    let currentQuiz = null;
    let answers = {};
    let followUpAnswers = {};
    let patient = { name: '', dob: '' };
    let isSpanish = false;

    // ─── Translations ───
    const i18n = {
        "Patient Information": "Información del Paciente",
        "Please provide your details before beginning the assessment.": "Por favor, proporcione sus datos antes de comenzar la evaluación.",
        "Full Name": "Nombre Completo",
        "Date of Birth": "Fecha de Nacimiento",
        "Start Questionnaire": "Comenzar Cuestionario",
        "Thank You": "Gracias",
        "Your responses have been recorded. Please hand the device back to your clinician.": "Sus respuestas han sido registradas. Por favor, devuelva el dispositivo a su médico."
    };
    function t(str) { return isSpanish && i18n[str] ? i18n[str] : str; }

    // ─── DOM Cache ───
    const $ = id => document.getElementById(id);
    const homeView = $('homeView');
    const calcView = $('calcView');
    const quizCatalog = $('quizCatalog');

    // ─── Init ───
    function init() {
        renderCatalog();
        bindGlobalEvents();
        updateUILanguage();
        showHome();
    }

    function updateUILanguage() {
        $('ui_intake_title').textContent = t("Patient Information");
        $('ui_intake_desc').textContent = t("Please provide your details before beginning the assessment.");
        $('ui_label_name').textContent = t("Full Name");
        $('ui_label_dob').textContent = t("Date of Birth");
        $('ui_btn_start').textContent = t("Start Questionnaire");
        $('ui_completed_title').textContent = t("Thank You");
        $('ui_completed_desc').textContent = t("Your responses have been recorded. Please hand the device back to your clinician.");
    }

    // ═══════════════════════════
    // HOME — Quiz Catalog
    // ═══════════════════════════
    function renderCatalog() {
        const categories = {};
        Object.values(QUESTIONNAIRES).forEach(q => {
            if (!categories[q.category]) categories[q.category] = [];
            categories[q.category].push(q);
        });
        let html = '';
        for (const [cat, quizzes] of Object.entries(categories)) {
            html += `<div class="category-section"><div class="category-title">${cat}</div><div class="quiz-grid">`;
            quizzes.forEach(q => {
                html += `
          <div class="quiz-card" data-quiz="${q.id}" style="--card-accent:${q.categoryColor}">
            <span class="card-badge">${q.category}</span>
            <h3>${q.name}</h3>
            <p class="card-fullname">${q.fullName}</p>
            <p class="card-desc">${q.description}</p>
            <div class="card-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
          </div>`;
            });
            html += '</div></div>';
        }
        quizCatalog.innerHTML = html;

        quizCatalog.querySelectorAll('.quiz-card').forEach(card => {
            card.addEventListener('click', () => openQuiz(card.dataset.quiz));
        });
    }

    // ═══════════════════════════
    // NAVIGATION
    // ═══════════════════════════
    function showHome() {
        homeView.classList.add('active');
        calcView.classList.remove('active');
        currentQuiz = null;
        document.title = 'MindScreen — Clinical Screening Assessments';
        $('historyPanel').classList.add('hidden');
    }

    function openQuiz(id) {
        currentQuiz = QUESTIONNAIRES[id];
        if (!currentQuiz) return;
        answers = {};
        followUpAnswers = {};
        patient = { name: '', dob: '' };

        // Reset inputs
        $('patientName').value = '';
        $('patientDob').value = '';

        // Reset views for Kiosk mode
        $('intakeSection').classList.add('active');
        $('questionsWrapper').classList.add('hidden');
        $('patientCompletedScreen').classList.add('hidden');
        $('resultsCard').classList.add('hidden');
        $('tabsCard').classList.add('hidden');

        homeView.classList.remove('active');
        calcView.classList.add('active');
        document.title = `${currentQuiz.name} — MindScreen`;

        renderCalculator();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ═══════════════════════════
    // CALCULATOR RENDERER
    // ═══════════════════════════
    function renderCalculator() {
        const q = currentQuiz;

        // Header
        $('calcHeader').innerHTML = `<h2>${q.name}</h2><p class="calc-fullname">${q.fullName}</p>`;

        // About
        renderAbout(q);

        // Questions intro
        $('questionsIntro').innerHTML = q.timeframe
            ? `<p><strong>${isSpanish && q.timeframe_es ? q.timeframe_es : q.timeframe}</strong>, ${isSpanish ? "con qué frecuencia le ha molestado lo siguiente:" : "how often have you been bothered by the following?"}</p>`
            : `<p>${isSpanish ? "Por favor responda cada pregunta a continuación:" : "Please answer each question below:"}</p>`;

        // Questions
        renderQuestions(q);

        // Follow-up (MDQ)
        renderFollowUp(q);

        // Submit Button (inserted at end of questions)
        const submitHtml = `<div class="question-block" style="text-align: center; margin-top: 40px; border-top: 1px solid var(--border); padding-top: 32px;">
            <button id="patientSubmitBtn" class="btn-primary" style="font-size:18px; padding:16px 40px;" disabled>${t("Save & Submit") || (isSpanish ? "Guardar y Enviar" : "Save & Submit")}</button>
        </div>`;
        $('questionsContainer').insertAdjacentHTML('beforeend', submitHtml);
        $('patientSubmitBtn').addEventListener('click', handlePatientSubmit);

        // Score max
        $('scoreMax').textContent = `/ ${q.maxScore}`;

        // Severity scale
        renderSeverityScale(q);

        // Tabs
        renderNextSteps(q);
        renderEvidence(q);
        renderCreator(q);

        // Reset tabs
        document.querySelectorAll('.tab-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === 0);
        });
        document.querySelectorAll('.tab-panel').forEach((p, i) => {
            p.classList.toggle('active', i === 0);
        });

        // Reset results
        updateScore();
        $('saveBtn').disabled = true;
    }

    function renderAbout(q) {
        const a = q.about;
        let html = '';
        if (a.whenToUse) {
            html += accordion('🎯', 'When to Use', `<p>${a.whenToUse}</p>`);
        }
        if (a.pearlsPitfalls) {
            const items = a.pearlsPitfalls.map(p => `<li>${p}</li>`).join('');
            html += accordion('💎', 'Pearls / Pitfalls', `<ul>${items}</ul>`);
        }
        if (a.whyUse) {
            html += accordion('📊', 'Why Use', `<p>${a.whyUse}</p>`);
        }
        $('aboutSection').innerHTML = html;
        bindAccordions();
    }

    function accordion(icon, title, content) {
        return `<div class="accordion">
      <button class="accordion-trigger" aria-expanded="false">
        <span class="acc-icon">${icon}</span> ${title}
        <svg class="chevron" width="16" height="16" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
      </button>
      <div class="accordion-content">${content}</div>
    </div>`;
    }

    function renderQuestions(q) {
        let html = '';
        const questionsList = isSpanish && q.questions_es ? q.questions_es : q.questions;

        questionsList.forEach((text, i) => {
            const optsSource = isSpanish && q.optionsByQuestion_es ? q.optionsByQuestion_es : q.optionsByQuestion;
            const fallbackOpts = isSpanish && q.options_es ? q.options_es : q.options;

            const opts = optsSource ? optsSource[i] : fallbackOpts;
            const optHtml = opts.map((o, oi) =>
                `<button class="option-btn" data-q="${i}" data-val="${o.value}" data-oi="${oi}">${o.label}</button>`
            ).join('');
            html += `<div class="question-block" style="animation-delay:${i * 0.05}s">
        <div class="q-number">${isSpanish ? "Pregunta" : "Question"} ${i + 1}</div>
        <p class="q-text">${text}</p>
        <div class="options-grid">${optHtml}</div>
      </div>`;
        });

        // Bonus question
        if (q.bonusQuestion) {
            const bOpts = q.bonusQuestion.options.map((o, i) =>
                `<button class="option-btn" data-q="bonus" data-val="${i}" data-oi="${i}">${o}</button>`
            ).join('');
            html += `<div class="bonus-question">
        <div class="bonus-badge">Bonus — Functional Impairment</div>
        <p class="q-text">${q.bonusQuestion.text}</p>
        <div class="options-grid">${bOpts}</div>
      </div>`;
        }

        $('questionsContainer').innerHTML = html;
        bindOptionButtons();
    }

    function renderFollowUp(q) {
        if (!q.followUp) { $('followUpContainer').innerHTML = ''; return; }
        let html = '<div class="followup-section">';
        if (q.followUp.concurrence) {
            const f = q.followUp.concurrence;
            const opts = f.options.map((o, i) =>
                `<button class="option-btn" data-q="fu_concurrence" data-val="${i}" data-oi="${i}">${o}</button>`
            ).join('');
            html += `<div class="question-block">
        <div class="q-number">Follow-Up A</div>
        <p class="q-text">${f.text}</p>
        <div class="options-grid">${opts}</div>
      </div>`;
        }
        if (q.followUp.impairment) {
            const f = q.followUp.impairment;
            const opts = f.options.map((o, i) =>
                `<button class="option-btn" data-q="fu_impairment" data-val="${i}" data-oi="${i}">${o}</button>`
            ).join('');
            html += `<div class="question-block">
        <div class="q-number">Follow-Up B</div>
        <p class="q-text">${f.text}</p>
        <div class="options-grid">${opts}</div>
      </div>`;
        }
        html += '</div>';
        $('followUpContainer').innerHTML = html;
        bindOptionButtons();
    }

    function renderSeverityScale(q) {
        const scaleEl = $('severityScale');
        const labels = ['Minimal', 'Mild', 'Moderate', 'Severe', 'Strongly Positive'];
        const classes = ['scale-minimal', 'scale-mild', 'scale-moderate', 'scale-severe', 'scale-severe'];
        scaleEl.innerHTML = q.interpretation.map((level, i) => {
            const cls = classes[Math.min(i, classes.length - 1)];
            return `<div class="scale-item ${cls}"><span class="scale-dot" style="background:${level.color}"></span> ${level.min}–${level.max} ${level.severity}</div>`;
        }).join('');
    }

    function renderNextSteps(q) {
        const ns = q.nextSteps;
        let html = '<h3>Management</h3><div class="info-table">';
        ns.management.forEach(m => {
            html += `<div class="info-row"><div class="info-label">${m.label}</div><div class="info-value">${m.text}</div></div>`;
        });
        html += '</div>';
        html += `<h3>Critical Actions</h3>
      <div class="callout callout-warning"><strong>⚠️ Clinical Judgment Required</strong><p>${ns.criticalActions}</p></div>`;
        $('tab-nextsteps').innerHTML = html;
    }

    function renderEvidence(q) {
        const ev = q.evidence;
        let html = `<h3>Formula</h3><div class="formula-box">${ev.formula}</div>`;
        html += '<h3>Facts &amp; Figures</h3><div class="info-table">';
        ev.facts.forEach(f => {
            html += `<div class="info-row"><div class="info-label">${f.label}</div><div class="info-value">${f.value}</div></div>`;
        });
        html += '</div><h3>References</h3><ol class="references-list">';
        ev.references.forEach(r => { html += `<li>${r}</li>`; });
        html += '</ol>';
        $('tab-evidence').innerHTML = html;
    }

    function renderCreator(q) {
        const c = q.creator;
        $('tab-creator').innerHTML = `
      <div class="creator-profile">
        <div class="creator-avatar">${c.initials}</div>
        <div><h3>${c.name}</h3><p class="creator-title">${c.title}</p></div>
      </div>
      <p>${c.bio}</p>`;
    }

    // ═══════════════════════════
    // SCORING ENGINE
    // ═══════════════════════════
    function computeScore() {
        if (!currentQuiz) return 0;
        const q = currentQuiz;
        let score = 0;

        if (q.scoringType === 'cssrs') {
            // C-SSRS: highest-level positive response
            let maxLevel = 0;
            for (let i = 0; i < q.questions.length; i++) {
                if (answers[i] !== undefined && answers[i] > 0) maxLevel = i + 1;
            }
            return maxLevel;
        }

        if (q.scoringType === 'perc') {
            // PERC: count of positive criteria
            for (let i = 0; i < q.questions.length; i++) {
                if (answers[i] !== undefined && answers[i] > 0) score++;
            }
            return score;
        }

        for (let i = 0; i < q.questions.length; i++) {
            if (answers[i] !== undefined) {
                let val = answers[i];
                // DAST-10 reverse scoring for Q3
                if (q.reverseItems && q.reverseItems.includes(i)) {
                    val = val === 0 ? 1 : 0;
                }
                score += val;
            }
        }
        return score;
    }

    function getInterpretation(score) {
        if (!currentQuiz) return null;
        for (const level of currentQuiz.interpretation) {
            if (score >= level.min && score <= level.max) return level;
        }
        return currentQuiz.interpretation[currentQuiz.interpretation.length - 1];
    }

    function countAnswered() {
        if (!currentQuiz) return 0;
        let count = 0;
        for (let i = 0; i < currentQuiz.questions.length; i++) {
            if (answers[i] !== undefined) count++;
        }
        return count;
    }

    function updateScore() {
        const q = currentQuiz;
        if (!q) return;
        const score = computeScore();
        const answered = countAnswered();
        const total = q.questions.length;
        const allAnswered = answered === total;

        // Progress
        $('progressCount').textContent = `${answered} / ${total}`;
        $('progressFill').style.width = `${(answered / total) * 100}%`;

        // Score number — handle decimals
        $('scoreNumber').textContent = Number.isInteger(score) ? score : score.toFixed(1);

        // Gauge — clamp pct to 0–1 for negative scores
        const circumference = 2 * Math.PI * 52; // ~326.7
        const pct = q.maxScore > 0 ? Math.max(0, Math.min(1, score / q.maxScore)) : 0;
        const offset = circumference * (1 - pct);
        const gaugeFill = $('gaugeFill');
        gaugeFill.style.strokeDashoffset = offset;

        // Interpretation
        if (allAnswered) {
            const interp = getInterpretation(score);
            if (interp) {
                gaugeFill.style.stroke = interp.color;
                $('severityBadge').textContent = interp.severity;
                $('severityBadge').style.background = interp.color + '20';
                $('severityBadge').style.color = interp.color;
                $('severityDesc').textContent = interp.recommendation;
                $('managementNote').textContent = '';
            }
            $('saveBtn').disabled = false;
            $('emailResultsBtn').disabled = false;

            const pSubmit = $('patientSubmitBtn');
            if (pSubmit) pSubmit.disabled = false;
        } else {
            gaugeFill.style.stroke = 'var(--accent)';
            $('severityBadge').textContent = 'In Progress';
            $('severityBadge').style.background = 'rgba(255,255,255,0.06)';
            $('severityBadge').style.color = 'var(--text-dim)';
            $('severityDesc').textContent = `Answer all ${total} questions to receive your assessment.`;
            $('managementNote').textContent = '';
            $('saveBtn').disabled = true;
            $('emailResultsBtn').disabled = true;

            const pSubmit = $('patientSubmitBtn');
            if (pSubmit) pSubmit.disabled = true;
        }
    }

    function handlePatientSubmit() {
        $('questionsWrapper').classList.add('hidden');
        $('patientCompletedScreen').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ═══════════════════════════
    // EVENT BINDING
    // ═══════════════════════════
    function bindOptionButtons() {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const qIdx = this.dataset.q;
                const val = parseFloat(this.dataset.val);

                // Deselect siblings
                this.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');

                if (qIdx === 'bonus') {
                    // Bonus question — non-scored
                } else if (qIdx.startsWith('fu_')) {
                    followUpAnswers[qIdx] = val;
                } else {
                    answers[parseInt(qIdx)] = val;
                }

                updateScore();
            });
        });
    }

    function bindAccordions() {
        document.querySelectorAll('.accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', function () {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !expanded);
                this.nextElementSibling.classList.toggle('open');
            });
        });
    }

    function bindGlobalEvents() {
        // Back button
        $('backBtn').addEventListener('click', showHome);
        $('logoHome').addEventListener('click', showHome);

        // Header Language Toggle (if it exists)
        const langToggle = $('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                isSpanish = !isSpanish;
                updateUILanguage();
                if (currentQuiz && !$('questionsWrapper').classList.contains('hidden')) {
                    renderCalculator();
                }
            });
        }

        // Intake Language Toggle
        const intakeLangToggle = $('intakeLangToggle');
        if (intakeLangToggle) {
            intakeLangToggle.addEventListener('click', () => {
                isSpanish = !isSpanish;
                updateUILanguage();
                intakeLangToggle.innerHTML = isSpanish ? "🇺🇸 Switch to English" : "🇪🇸 Cambiar a Español";
                const langAsk = $('ui_lang_ask');
                if (langAsk) langAsk.textContent = isSpanish ? "Prefer English?" : "Prefer Spanish? / ¿Prefiere español?";
            });
        }

        // Intake Form Submit
        $('intakeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            patient.name = $('patientName').value.trim();
            patient.dob = $('patientDob').value;

            $('intakeSection').classList.remove('active');
            $('intakeSection').classList.add('hidden');
            $('questionsWrapper').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Clinician Unlock
        $('clinicianUnlockBtn').addEventListener('click', () => {
            // Optional: You could add a prompt() here for a PIN code:
            // if (prompt("Enter Clinician PIN:") !== "1234") return alert("Incorrect PIN");

            $('patientCompletedScreen').classList.add('hidden');
            $('resultsCard').classList.remove('hidden');
            $('tabsCard').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Email Results
        $('emailResultsBtn').addEventListener('click', () => {
            if (!currentQuiz) return;
            const score = computeScore();
            const interp = getInterpretation(score);

            const subject = encodeURIComponent(`MindScreen Results: ${patient.name} - ${currentQuiz.name}`);
            const body = encodeURIComponent(
                `Patient Name: ${patient.name}\n` +
                `DOB: ${patient.dob}\n\n` +
                `Assessment: ${currentQuiz.fullName}\n` +
                `Date: ${new Date().toLocaleDateString()}\n\n` +
                `Score: ${score} / ${currentQuiz.maxScore}\n` +
                `Interpretation: ${interp ? interp.severity : 'N/A'}\n` +
                `Recommendation: ${interp ? interp.recommendation : 'N/A'}\n\n` +
                `Detailed responses attached to patient chart.`
            );

            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        });

        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(`tab-${this.dataset.tab}`).classList.add('active');
            });
        });

        // Reset
        $('resetBtn').addEventListener('click', () => {
            answers = {};
            followUpAnswers = {};
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            updateScore();
        });

        // Save
        $('saveBtn').addEventListener('click', saveAssessment);

        // History toggle
        $('historyToggle').addEventListener('click', () => {
            const panel = $('historyPanel');
            panel.classList.toggle('hidden');
            if (!panel.classList.contains('hidden')) renderHistory();
        });

        // Clear history
        $('clearHistory').addEventListener('click', () => {
            localStorage.removeItem('mindscreen_history');
            renderHistory();
        });

        // Print
        $('printBtn').addEventListener('click', () => window.print());
    }

    // ═══════════════════════════
    // HISTORY
    // ═══════════════════════════
    function getHistory() {
        try { return JSON.parse(localStorage.getItem('mindscreen_history') || '[]'); }
        catch { return []; }
    }

    function saveAssessment() {
        if (!currentQuiz) return;
        const score = computeScore();
        const interp = getInterpretation(score);
        const entry = {
            id: Date.now(),
            quizId: currentQuiz.id,
            quizName: currentQuiz.name,
            score,
            maxScore: currentQuiz.maxScore,
            severity: interp ? interp.severity : '',
            color: interp ? interp.color : '#a78bfa',
            date: new Date().toISOString()
        };
        const history = getHistory();
        history.unshift(entry);
        if (history.length > 100) history.pop();
        localStorage.setItem('mindscreen_history', JSON.stringify(history));
        $('saveBtn').textContent = '✓ Saved!';
        $('saveBtn').disabled = true;
        setTimeout(() => { $('saveBtn').textContent = 'Save Assessment'; }, 2000);
    }

    function renderHistory() {
        const history = getHistory();
        const list = $('historyList');
        const chart = $('historyChart');

        if (history.length === 0) {
            list.innerHTML = '<p class="empty-state">No assessments saved yet. Complete and save an assessment to track your progress.</p>';
            chart.innerHTML = '';
            return;
        }

        // List
        list.innerHTML = history.map(h => {
            const date = new Date(h.date);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            return `<div class="history-item">
        <div class="hi-left">
          <span class="hi-name">${h.quizName}</span>
          <span class="hi-date">${dateStr}</span>
        </div>
        <span class="hi-score" style="background:${h.color}20;color:${h.color}">${h.score}/${h.maxScore}</span>
      </div>`;
        }).join('');

        // Chart (last 20 entries, reversed for chronological)
        const chartData = history.slice(0, 20).reverse();
        if (chartData.length > 1) {
            const maxH = 130;
            let bars = '<div class="chart-bar-group">';
            let labels = '<div class="chart-labels">';
            chartData.forEach(h => {
                const pct = h.maxScore > 0 ? (h.score / h.maxScore) : 0;
                const height = Math.max(4, pct * maxH);
                const d = new Date(h.date);
                const lbl = `${d.getMonth() + 1}/${d.getDate()}`;
                bars += `<div class="chart-bar" style="height:${height}px;background:${h.color}" data-tooltip="${h.quizName}: ${h.score}/${h.maxScore}"></div>`;
                labels += `<span class="chart-label">${lbl}</span>`;
            });
            bars += '</div>';
            labels += '</div>';
            chart.innerHTML = bars + labels;
        } else {
            chart.innerHTML = '';
        }
    }

    // ─── Boot ───
    document.addEventListener('DOMContentLoaded', init);
})();
