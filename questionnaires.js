// questionnaires.js — All clinical screening questionnaire definitions
const QUESTIONNAIRES = {

    // ─── GAD-7 ───
    "gad7": {
        id: "gad7",
        name: "GAD-7",
        fullName: "General Anxiety Disorder — 7 Item Scale",
        category: "Anxiety",
        categoryColor: "#a78bfa",
        description: "Measures severity of anxiety, mainly in outpatient settings.",
        timeframe: "Over the last 2 weeks",
        maxScore: 21,
        questions: [
            "Feeling nervous, anxious, or on edge",
            "Not being able to stop or control worrying",
            "Worrying too much about different things",
            "Trouble relaxing",
            "Being so restless that it's hard to sit still",
            "Becoming easily annoyed or irritable",
            "Feeling afraid as if something awful might happen"
        ],
        options: [
            { label: "Not at all", value: 0 },
            { label: "Several days", value: 1 },
            { label: "More than half the days", value: 2 },
            { label: "Nearly every day", value: 3 }
        ],
        bonusQuestion: {
            text: "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
            options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"]
        },
        interpretation: [
            { min: 0, max: 4, severity: "Minimal", color: "#10b981", recommendation: "Monitor; clinical judgment." },
            { min: 5, max: 9, severity: "Mild", color: "#f59e0b", recommendation: "Monitor; re-evaluate in follow-up." },
            { min: 10, max: 14, severity: "Moderate", color: "#f97316", recommendation: "Possible clinically significant condition. Consider further assessment and/or referral." },
            { min: 15, max: 21, severity: "Severe", color: "#ef4444", recommendation: "Active treatment probably warranted. Further assessment and/or referral strongly recommended." }
        ],
        about: {
            whenToUse: "Use the GAD-7 as a rapid screening tool to identify clinically significant anxiety disorders — including Generalized Anxiety Disorder, Panic Disorder, Social Phobia, and PTSD — in outpatient and primary care settings. Ideal for initial evaluation and longitudinal monitoring of treatment response.",
            pearlsPitfalls: [
                "The GAD-7 has 70–90% sensitivity and 80–90% specificity across anxiety disorders.",
                "For Panic Disorder, Social Phobia, and PTSD, a cutoff score of 8 may provide optimal sensitivity/specificity.",
                "An 8th non-scored question about functional impairment is a key indicator of global impairment.",
                "Scores should be interpreted in context; a high score does not confirm a specific diagnosis."
            ],
            whyUse: "Objectively determine initial severity of a patient's anxiety and monitor changes over time. Provides a standardized, reproducible measure that facilitates communication between providers and supports evidence-based treatment decisions."
        },
        nextSteps: {
            management: [
                { label: "Score ≥10", text: "Warrants further assessment — consider diagnostic interview & mental health status exam." },
                { label: "Score ≥15", text: "Active treatment is probably warranted. Consider pharmacotherapy and/or psychotherapy referral." },
                { label: "Monitoring", text: "Re-administer the GAD-7 periodically (e.g., every 2–4 weeks) to track treatment response." }
            ],
            criticalActions: "The GAD-7 is a screening tool and does not replace a clinical diagnosis. Always consider medical causes of anxiety symptoms: obtain EKG if cardiac arrhythmia is suspected, check TSH to rule out thyroid disease, review medication list for anxiogenic agents, screen for substance use disorders, and assess for suicidal ideation in severe cases."
        },
        evidence: {
            formula: "Simple additive score: sum of all 7 items, each scored 0–3. Range: 0–21.",
            facts: [
                { label: "Sensitivity", value: "89% at cutoff ≥10 for GAD" },
                { label: "Specificity", value: "82% at cutoff ≥10 for GAD" },
                { label: "Validation", value: "Initially validated in 2,149 primary care patients (Spitzer RL, 2006)" },
                { label: "Reliability", value: "Excellent internal consistency (Cronbach α = 0.92); good test-retest reliability (ICC = 0.83)" }
            ],
            references: [
                "Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092–1097.",
                "Kroenke K, Spitzer RL, Williams JBW, et al. Anxiety disorders in primary care. Ann Intern Med. 2007;146(5):317–325.",
                "Löwe B, Decker O, Müller S, et al. Validation and standardization of the GAD-7 in the general population. Med Care. 2008;46(3):266–274."
            ]
        },
        creator: {
            name: "Dr. Robert L. Spitzer, MD",
            title: "Professor of Psychiatry, Columbia University",
            initials: "RLS",
            bio: "Dr. Spitzer was one of the most influential psychiatrists of the 20th century and a primary architect of the modern DSM diagnostic criteria. His work on structured diagnostic instruments — including the GAD-7 and PHQ-9 — transformed how clinicians screen for and classify mental health disorders."
        }
    },

    // ─── PHQ-9 ───
    "phq9": {
        id: "phq9",
        name: "PHQ-9",
        fullName: "Patient Health Questionnaire — 9",
        category: "Depression",
        categoryColor: "#60a5fa",
        description: "Objectifies the degree of depression severity. Validated in primary care.",
        timeframe: "Over the last 2 weeks",
        maxScore: 27,
        questions: [
            "Little interest or pleasure in doing things",
            "Feeling down, depressed, or hopeless",
            "Trouble falling or staying asleep, or sleeping too much",
            "Feeling tired or having little energy",
            "Poor appetite or overeating",
            "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
            "Trouble concentrating on things, such as reading the newspaper or watching television",
            "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
            "Thoughts that you would be better off dead or of hurting yourself in some way"
        ],
        options: [
            { label: "Not at all", value: 0 },
            { label: "Several days", value: 1 },
            { label: "More than half the days", value: 2 },
            { label: "Nearly every day", value: 3 }
        ],
        bonusQuestion: {
            text: "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
            options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"]
        },
        interpretation: [
            { min: 0, max: 4, severity: "Minimal", color: "#10b981", recommendation: "Monitor; may not require treatment." },
            { min: 5, max: 9, severity: "Mild", color: "#f59e0b", recommendation: "Use clinical judgment about treatment, based on duration and functional impairment." },
            { min: 10, max: 14, severity: "Moderate", color: "#f97316", recommendation: "Consider counseling, follow-up, and/or pharmacotherapy." },
            { min: 15, max: 19, severity: "Moderately Severe", color: "#ef4444", recommendation: "Active treatment with pharmacotherapy and/or psychotherapy." },
            { min: 20, max: 27, severity: "Severe", color: "#dc2626", recommendation: "Immediate initiation of pharmacotherapy and, if severe impairment or poor response, referral to mental health specialist." }
        ],
        about: {
            whenToUse: "Use the PHQ-9 to screen for and measure severity of depression in adolescents and adults in primary care, outpatient, and inpatient settings.",
            pearlsPitfalls: [
                "Sensitivity of 88% and specificity of 88% for major depression at a cutoff of ≥10.",
                "Question 9 (suicidal ideation) requires immediate clinical follow-up if endorsed.",
                "Can be used to monitor treatment response over time.",
                "Does not differentiate unipolar from bipolar depression."
            ],
            whyUse: "The PHQ-9 is one of the most widely validated depression screening instruments. It provides a standardized measure for initial assessment and longitudinal monitoring."
        },
        nextSteps: {
            management: [
                { label: "Score 5–9", text: "Watchful waiting; repeat PHQ-9 at follow-up." },
                { label: "Score 10–14", text: "Treatment plan, consider counseling, follow-up, and/or pharmacotherapy." },
                { label: "Score 15–19", text: "Active treatment with pharmacotherapy and/or psychotherapy." },
                { label: "Score ≥20", text: "Immediate initiation of pharmacotherapy; refer to mental health specialist for psychotherapy and/or collaborative management." }
            ],
            criticalActions: "If a patient endorses Question 9 (thoughts of self-harm), immediately assess safety and suicidal ideation/plan/intent. The PHQ-9 is a screening tool; clinical diagnosis requires a thorough interview."
        },
        evidence: {
            formula: "Simple additive score: sum of all 9 items, each scored 0–3. Range: 0–27.",
            facts: [
                { label: "Sensitivity", value: "88% at cutoff ≥10 for major depression" },
                { label: "Specificity", value: "88% at cutoff ≥10 for major depression" },
                { label: "Validation", value: "Validated in 6,000 patients across 8 primary care and 7 obstetric clinics" },
                { label: "Reliability", value: "Cronbach α = 0.89; test-retest reliability excellent" }
            ],
            references: [
                "Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606–613.",
                "Löwe B, Unützer J, Callahan CM, et al. Monitoring depression treatment outcomes with the PHQ-9. Med Care. 2004;42(12):1194–1201."
            ]
        },
        creator: { name: "Dr. Kurt Kroenke, MD", title: "Professor of Medicine, Indiana University", initials: "KK", bio: "Dr. Kroenke developed the PHQ family of instruments to provide brief, validated self-report measures for primary care. The PHQ-9 is now the most widely used depression screening tool worldwide." }
    },

    // ─── PHQ-2 ───
    "phq2": {
        id: "phq2",
        name: "PHQ-2",
        fullName: "Patient Health Questionnaire — 2",
        category: "Depression",
        categoryColor: "#60a5fa",
        description: "Ultra-brief depression screening with 2 questions. A positive screen should trigger PHQ-9.",
        timeframe: "Over the last 2 weeks",
        maxScore: 6,
        questions: [
            "Little interest or pleasure in doing things",
            "Feeling down, depressed, or hopeless"
        ],
        options: [
            { label: "Not at all", value: 0 },
            { label: "Several days", value: 1 },
            { label: "More than half the days", value: 2 },
            { label: "Nearly every day", value: 3 }
        ],
        interpretation: [
            { min: 0, max: 2, severity: "Negative Screen", color: "#10b981", recommendation: "Depression unlikely. No further action needed." },
            { min: 3, max: 6, severity: "Positive Screen", color: "#ef4444", recommendation: "Administer the full PHQ-9 to further assess depression severity." }
        ],
        about: {
            whenToUse: "Use as an initial screening step in primary care or community settings where time is limited. A score ≥3 should be followed by the PHQ-9.",
            pearlsPitfalls: [
                "Sensitivity of 83% and specificity of 92% for major depression at cutoff ≥3.",
                "Does NOT provide a severity grade — only screens positive/negative.",
                "Always follow positive screens with PHQ-9 or clinical interview."
            ],
            whyUse: "Provides the quickest validated depression screen available (under 1 minute). Ideal for high-volume settings."
        },
        nextSteps: {
            management: [
                { label: "Score ≥3", text: "Positive screen. Administer PHQ-9 for full depression severity assessment." },
                { label: "Score <3", text: "Negative screen. Continue routine screening per guidelines." }
            ],
            criticalActions: "A negative PHQ-2 does not exclude depression. If clinical suspicion is high, administer the full PHQ-9 regardless."
        },
        evidence: {
            formula: "Sum of 2 items scored 0–3 each. Range: 0–6. Cutoff: ≥3 = positive screen.",
            facts: [
                { label: "Sensitivity", value: "83% for major depression" },
                { label: "Specificity", value: "92% for major depression" },
                { label: "Validation", value: "Validated in 6,000+ patients" }
            ],
            references: [
                "Kroenke K, Spitzer RL, Williams JB. The Patient Health Questionnaire-2: validity of a two-item depression screener. Med Care. 2003;41(11):1284–1292."
            ]
        },
        creator: { name: "Dr. Kurt Kroenke, MD", title: "Professor of Medicine, Indiana University", initials: "KK", bio: "Dr. Kroenke developed the PHQ-2 as an ultra-brief initial screen derived from the PHQ-9." }
    },

    // ─── PCL-5 ───
    "pcl5": {
        id: "pcl5",
        name: "PC-PTSD-5",
        fullName: "Primary Care PTSD Screen for DSM-5",
        category: "PTSD",
        categoryColor: "#f472b6",
        description: "Brief screening for PTSD in primary care settings, based on DSM-5 criteria.",
        timeframe: "In the past month",
        maxScore: 5,
        scoringType: "binary",
        questions: [
            "Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
            "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
            "Been constantly on guard, watchful, or easily startled?",
            "Felt numb or detached from people, activities, or your surroundings?",
            "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 2, severity: "Negative Screen", color: "#10b981", recommendation: "PTSD unlikely based on this screen." },
            { min: 3, max: 5, severity: "Positive Screen", color: "#ef4444", recommendation: "Further assessment with a structured PTSD interview (e.g., CAPS-5 or PCL-5 checklist) is recommended." }
        ],
        about: {
            whenToUse: "Use as an initial screen for PTSD in any patient with a history of trauma exposure. Particularly useful in primary care, VA, and emergency settings.",
            pearlsPitfalls: [
                "Optimized for DSM-5 PTSD criteria.",
                "A positive screen (≥3) does NOT diagnose PTSD — requires further diagnostic assessment.",
                "Sensitivity 95%, specificity 85% at cutoff ≥3.",
                "Must first establish that patient has experienced a traumatic event."
            ],
            whyUse: "Provides a rapid, validated screen for PTSD that can be administered in under 2 minutes."
        },
        nextSteps: {
            management: [
                { label: "Score ≥3", text: "Positive screen. Refer for full PTSD diagnostic evaluation (CAPS-5 or PCL-5 checklist)." },
                { label: "Score <3", text: "Negative screen. Monitor if clinical suspicion remains." }
            ],
            criticalActions: "Always assess for suicidal ideation in trauma-exposed patients, regardless of screen result."
        },
        evidence: {
            formula: "Count of 'Yes' answers to 5 binary (Yes/No) items. Range: 0–5. Cutoff: ≥3 = positive screen.",
            facts: [
                { label: "Sensitivity", value: "95% at cutoff ≥3" },
                { label: "Specificity", value: "85% at cutoff ≥3" },
                { label: "Validation", value: "Validated in Veteran and civilian primary care populations" }
            ],
            references: [
                "Prins A, Bovin MJ, Smolenski DJ, et al. The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5). J Gen Intern Med. 2016;31(10):1206–1211."
            ]
        },
        creator: { name: "Dr. Annabel Prins, PhD", title: "VA Palo Alto Health Care System", initials: "AP", bio: "Dr. Prins developed the PC-PTSD screens to enable rapid identification of PTSD in primary care settings." }
    },

    // ─── MDQ ───
    "mdq": {
        id: "mdq",
        name: "MDQ",
        fullName: "Mood Disorder Questionnaire",
        category: "Bipolar",
        categoryColor: "#c084fc",
        description: "Self-report screening for bipolar spectrum disorders.",
        timeframe: "Has there ever been a period of time when...",
        maxScore: 13,
        scoringType: "mdq",
        questions: [
            "You felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?",
            "You were so irritable that you shouted at people or started fights or arguments?",
            "You felt much more self-confident than usual?",
            "You got much less sleep than usual and found you didn't really miss it?",
            "You were much more talkative or spoke much faster than usual?",
            "Thoughts raced through your head and you couldn't slow your mind down?",
            "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
            "You had much more energy than usual?",
            "You were much more active or did many more things than usual?",
            "You were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?",
            "You were much more interested in sex than usual?",
            "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
            "Spending money got you or your family into trouble?"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        followUp: {
            concurrence: { text: "Have several of these ever happened during the same period of time?", options: ["No", "Yes"] },
            impairment: { text: "How much of a problem did any of these cause you — like being unable to work; having family, money, or legal troubles; getting into arguments or fights?", options: ["No problem", "Minor problem", "Moderate problem", "Serious problem"] }
        },
        interpretation: [
            { min: 0, max: 6, severity: "Negative Screen", color: "#10b981", recommendation: "Bipolar disorder unlikely based on this screen." },
            { min: 7, max: 13, severity: "Positive Screen", color: "#ef4444", recommendation: "Screen positive for bipolar disorder IF ≥7 'Yes' answers AND concurrence = Yes AND impairment ≥ Moderate. Refer for full psychiatric evaluation." }
        ],
        about: {
            whenToUse: "Use to screen patients for bipolar spectrum disorders, particularly in primary care or when bipolar disorder is suspected in patients presenting with depression.",
            pearlsPitfalls: [
                "A positive MDQ requires ALL THREE criteria: ≥7 Yes answers, co-occurrence, and moderate+ impairment.",
                "Sensitivity 73%, specificity 90% in psychiatric settings.",
                "Lower sensitivity in general population screening.",
                "Does not distinguish bipolar I from bipolar II."
            ],
            whyUse: "Bipolar disorder is frequently misdiagnosed as unipolar depression. The MDQ helps identify patients who may benefit from mood stabilizers rather than antidepressants alone."
        },
        nextSteps: {
            management: [
                { label: "Positive screen", text: "Refer for comprehensive psychiatric evaluation including mood charting and collateral history." },
                { label: "Negative screen", text: "Does not rule out bipolar disorder. If clinical suspicion persists, refer for evaluation." }
            ],
            criticalActions: "Never start antidepressant monotherapy without considering bipolar disorder. Antidepressants can trigger mania in bipolar patients."
        },
        evidence: {
            formula: "Part 1: Count of 'Yes' to 13 items (need ≥7). Part 2: Co-occurrence (must be Yes). Part 3: Impairment (must be Moderate or Serious). All three parts must be positive for a positive screen.",
            facts: [
                { label: "Sensitivity", value: "73% in psychiatric settings" },
                { label: "Specificity", value: "90% in psychiatric settings" },
                { label: "Validation", value: "Validated in 198 psychiatric outpatients" }
            ],
            references: [
                "Hirschfeld RM, Williams JB, Spitzer RL, et al. Development and validation of a screening instrument for bipolar spectrum disorder: the Mood Disorder Questionnaire. Am J Psychiatry. 2000;157(11):1873–1875."
            ]
        },
        creator: { name: "Dr. Robert M.A. Hirschfeld, MD", title: "University of Texas Medical Branch", initials: "RH", bio: "Dr. Hirschfeld developed the MDQ to address the widespread underdiagnosis of bipolar disorder in primary care and psychiatric settings." }
    },

    // ─── AUDIT-C ───
    "auditc": {
        id: "auditc",
        name: "AUDIT-C",
        fullName: "Alcohol Use Disorders Identification Test — Consumption",
        category: "Substance Use",
        categoryColor: "#fbbf24",
        description: "Screens for unhealthy alcohol use and alcohol use disorders.",
        timeframe: "",
        maxScore: 12,
        questions: [
            "How often do you have a drink containing alcohol?",
            "How many drinks containing alcohol do you have on a typical day when you are drinking?",
            "How often do you have 6 or more drinks on one occasion?"
        ],
        optionsByQuestion: {
            0: [
                { label: "Never", value: 0 },
                { label: "Monthly or less", value: 1 },
                { label: "2-4 times a month", value: 2 },
                { label: "2-3 times a week", value: 3 },
                { label: "4+ times a week", value: 4 }
            ],
            1: [
                { label: "1 or 2", value: 0 },
                { label: "3 or 4", value: 1 },
                { label: "5 or 6", value: 2 },
                { label: "7 to 9", value: 3 },
                { label: "10 or more", value: 4 }
            ],
            2: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 }
            ]
        },
        interpretation: [
            { min: 0, max: 2, severity: "Low Risk (Women) / Negative", color: "#10b981", recommendation: "Low risk drinking. Men: negative screen at 0-3." },
            { min: 3, max: 3, severity: "Borderline", color: "#f59e0b", recommendation: "Positive for women (≥3). For men, positive screen is ≥4." },
            { min: 4, max: 7, severity: "Positive Screen", color: "#f97316", recommendation: "Unhealthy alcohol use likely. Consider brief intervention and/or full AUDIT." },
            { min: 8, max: 12, severity: "High Risk", color: "#ef4444", recommendation: "Likely alcohol use disorder. Administer full AUDIT and consider referral." }
        ],
        about: {
            whenToUse: "Use for routine screening of alcohol use in primary care, emergency, and inpatient settings. Recommended by USPSTF for all adults.",
            pearlsPitfalls: [
                "Cutoff differs by sex: ≥3 for women, ≥4 for men.",
                "Sensitivity 86%, specificity 72% for unhealthy alcohol use.",
                "A score of 0 reliably identifies non-drinkers.",
                "Does not assess consequences of drinking — use full AUDIT for that."
            ],
            whyUse: "Brief (3 questions), validated, and recommended for routine screening by major guidelines including USPSTF."
        },
        nextSteps: {
            management: [
                { label: "Positive screen", text: "Conduct brief intervention (motivational interviewing). Consider full AUDIT." },
                { label: "High score (≥8)", text: "Strongly consider referral for alcohol use disorder evaluation and treatment." }
            ],
            criticalActions: "Screening alone is insufficient. Pair with brief counseling intervention for maximum effect."
        },
        evidence: {
            formula: "Sum of 3 items with variable scoring (0–4 each). Range: 0–12. Positive: ≥3 (women) or ≥4 (men).",
            facts: [
                { label: "Sensitivity", value: "86% for unhealthy alcohol use" },
                { label: "Specificity", value: "72% for unhealthy alcohol use" },
                { label: "Validation", value: "Validated in VA and primary care populations" }
            ],
            references: [
                "Bush K, Kivlahan DR, McDonell MB, et al. The AUDIT alcohol consumption questions (AUDIT-C): an effective brief screening test for problem drinking. Arch Intern Med. 1998;158(16):1789–1795."
            ]
        },
        creator: { name: "Dr. Katharine Bush, MD", title: "VA Puget Sound Health Care System", initials: "KB", bio: "Dr. Bush validated the AUDIT-C as a brief alternative to the full 10-item AUDIT for use in busy clinical settings." }
    },

    // ─── CAGE ───
    "cage": {
        id: "cage",
        name: "CAGE",
        fullName: "CAGE Questions for Alcohol Use",
        category: "Substance Use",
        categoryColor: "#fbbf24",
        description: "Screens for excessive drinking and alcoholism with 4 simple questions.",
        timeframe: "",
        maxScore: 4,
        scoringType: "binary",
        questions: [
            "Have you ever felt you needed to Cut down on your drinking?",
            "Have people Annoyed you by criticizing your drinking?",
            "Have you ever felt Guilty about drinking?",
            "Have you ever felt you needed a drink first thing in the morning (Eye-opener) to steady your nerves or to get rid of a hangover?"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 1, severity: "Low Risk", color: "#10b981", recommendation: "Alcohol use disorder unlikely. 1 positive answer should raise suspicion." },
            { min: 2, max: 3, severity: "Positive Screen", color: "#f97316", recommendation: "Clinically significant. 82% sensitivity for alcohol dependence." },
            { min: 4, max: 4, severity: "Strongly Positive", color: "#ef4444", recommendation: "Highly indicative of alcohol dependence. Further evaluation strongly recommended." }
        ],
        about: {
            whenToUse: "Use as a quick screen for alcohol problems, particularly in clinical encounters where time is limited.",
            pearlsPitfalls: [
                "CAGE is an acronym: Cut down, Annoyed, Guilty, Eye-opener.",
                "≥2 positive responses has 93% sensitivity and 76% specificity for alcohol problems.",
                "Less sensitive for detecting hazardous drinking or binge drinking compared to AUDIT.",
                "May be less sensitive in women, elderly, and college students."
            ],
            whyUse: "Extremely brief (4 questions, <1 minute) and easy to remember, making it ideal for initial screening."
        },
        nextSteps: {
            management: [
                { label: "Score ≥2", text: "Further assessment needed. Consider full AUDIT, laboratory tests (GGT, MCV, CDT)." },
                { label: "Score = 1", text: "Raise clinical suspicion; consider further questioning about drinking patterns." }
            ],
            criticalActions: "CAGE does not quantify current consumption. Always inquire about quantity/frequency if screen is positive."
        },
        evidence: {
            formula: "Count of 'Yes' answers to 4 binary items. Range: 0–4. Cutoff: ≥2 = positive screen.",
            facts: [
                { label: "Sensitivity", value: "93% at cutoff ≥2" },
                { label: "Specificity", value: "76% at cutoff ≥2" },
                { label: "Validation", value: "Widely validated across populations since 1984" }
            ],
            references: [
                "Ewing JA. Detecting alcoholism. The CAGE questionnaire. JAMA. 1984;252(14):1905–1907.",
                "Dhalla S, Kopec JA. The CAGE questionnaire for alcohol misuse: a review of reliability and validity studies. Clin Invest Med. 2007;30(1):33–41."
            ]
        },
        creator: { name: "Dr. John A. Ewing, MD", title: "University of North Carolina", initials: "JE", bio: "Dr. Ewing developed the CAGE questionnaire in 1984 as one of the first brief alcohol screening instruments." }
    },

    // ─── DAST-10 ───
    "dast10": {
        id: "dast10",
        name: "DAST-10",
        fullName: "Drug Abuse Screening Test — 10",
        category: "Substance Use",
        categoryColor: "#fbbf24",
        description: "Brief screening for drug use problems (excluding alcohol and tobacco).",
        timeframe: "In the past 12 months",
        maxScore: 10,
        scoringType: "binary",
        reverseItems: [2],
        questions: [
            "Have you used drugs other than those required for medical reasons?",
            "Do you abuse more than one drug at a time?",
            "Are you always able to stop using drugs when you want to?",
            "Have you had blackouts or flashbacks as a result of drug use?",
            "Do you ever feel bad or guilty about your drug use?",
            "Does your spouse (or parents) ever complain about your involvement with drugs?",
            "Have you neglected your family because of your use of drugs?",
            "Have you engaged in illegal activities in order to obtain drugs?",
            "Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?",
            "Have you had medical problems as a result of your drug use?"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 0, severity: "No Problems", color: "#10b981", recommendation: "No drug-related problems reported." },
            { min: 1, max: 2, severity: "Low Level", color: "#f59e0b", recommendation: "Monitor; brief intervention may be helpful." },
            { min: 3, max: 5, severity: "Moderate", color: "#f97316", recommendation: "Further investigation and possible intensive assessment needed." },
            { min: 6, max: 8, severity: "Substantial", color: "#ef4444", recommendation: "Intensive assessment and treatment strongly recommended." },
            { min: 9, max: 10, severity: "Severe", color: "#dc2626", recommendation: "Intensive assessment and treatment are essential." }
        ],
        about: {
            whenToUse: "Use for screening drug use problems in clinical, workplace, or research settings. Covers illicit drugs and non-medical use of prescription drugs.",
            pearlsPitfalls: [
                "Question 3 is reverse-scored ('Are you always able to stop...' → 'No' = 1 point).",
                "Excludes alcohol and tobacco — those need separate screening.",
                "Sensitivity 94–95%, specificity 68–88%.",
                "Does not identify specific drugs used."
            ],
            whyUse: "Brief, validated screening instrument for drug use problems that can be self-administered in under 5 minutes."
        },
        nextSteps: {
            management: [
                { label: "Score 1–2", text: "Brief intervention; monitor at follow-up visits." },
                { label: "Score 3–5", text: "Further assessment; consider referral to substance abuse counselor." },
                { label: "Score ≥6", text: "Refer for intensive assessment and likely treatment." }
            ],
            criticalActions: "Always ask about specific substances used. The DAST-10 does not identify which drugs are being used."
        },
        evidence: {
            formula: "Count of positive responses (Q3 reverse-scored: 'No' = 1 point). Range: 0–10.",
            facts: [
                { label: "Sensitivity", value: "94–95% for drug use problems" },
                { label: "Specificity", value: "68–88%" },
                { label: "Validation", value: "Derived from the 28-item DAST; validated across clinical populations" }
            ],
            references: [
                "Skinner HA. The Drug Abuse Screening Test. Addict Behav. 1982;7(4):363–371.",
                "Yudko E, Lozhkina O, Fouts A. A comprehensive review of the psychometric properties of the DAST. J Subst Abuse Treat. 2007;32(2):189–198."
            ]
        },
        creator: { name: "Dr. Harvey A. Skinner, PhD", title: "York University, Toronto", initials: "HS", bio: "Dr. Skinner developed the DAST instruments to provide standardized drug abuse screening analogous to alcohol screening tools." }
    },

    // ─── EPDS ───
    "epds": {
        id: "epds",
        name: "EPDS",
        fullName: "Edinburgh Postnatal Depression Scale",
        category: "Depression",
        categoryColor: "#60a5fa",
        description: "Screens for postnatal (postpartum) depression. Also validated for antenatal use.",
        timeframe: "In the past 7 days",
        maxScore: 30,
        optionsByQuestion: {
            0: [
                { label: "As much as I always could", value: 0 },
                { label: "Not quite so much now", value: 1 },
                { label: "Definitely not so much now", value: 2 },
                { label: "Not at all", value: 3 }
            ],
            1: [
                { label: "As much as I ever did", value: 0 },
                { label: "Rather less than I used to", value: 1 },
                { label: "Definitely less than I used to", value: 2 },
                { label: "Hardly at all", value: 3 }
            ],
            2: [
                { label: "Yes, most of the time", value: 3 },
                { label: "Yes, some of the time", value: 2 },
                { label: "Not very often", value: 1 },
                { label: "No, never", value: 0 }
            ],
            3: [
                { label: "No, not at all", value: 0 },
                { label: "Hardly ever", value: 1 },
                { label: "Yes, sometimes", value: 2 },
                { label: "Yes, very often", value: 3 }
            ],
            4: [
                { label: "Yes, quite a lot", value: 3 },
                { label: "Yes, sometimes", value: 2 },
                { label: "No, not much", value: 1 },
                { label: "No, not at all", value: 0 }
            ],
            5: [
                { label: "Yes, most of the time I haven't been able to cope at all", value: 3 },
                { label: "Yes, sometimes I haven't been coping as well as usual", value: 2 },
                { label: "No, most of the time I have coped quite well", value: 1 },
                { label: "No, I have been coping as well as ever", value: 0 }
            ],
            6: [
                { label: "Yes, most of the time", value: 3 },
                { label: "Yes, sometimes", value: 2 },
                { label: "Not very often", value: 1 },
                { label: "No, not at all", value: 0 }
            ],
            7: [
                { label: "Yes, most of the time", value: 3 },
                { label: "Yes, quite often", value: 2 },
                { label: "Not very often", value: 1 },
                { label: "No, not at all", value: 0 }
            ],
            8: [
                { label: "Yes, most of the time", value: 3 },
                { label: "Yes, quite often", value: 2 },
                { label: "Only occasionally", value: 1 },
                { label: "No, never", value: 0 }
            ],
            9: [
                { label: "Yes, quite often", value: 3 },
                { label: "Sometimes", value: 2 },
                { label: "Hardly ever", value: 1 },
                { label: "Never", value: 0 }
            ]
        },
        questions: [
            "I have been able to laugh and see the funny side of things",
            "I have looked forward with enjoyment to things",
            "I have blamed myself unnecessarily when things went wrong",
            "I have been anxious or worried for no good reason",
            "I have felt scared or panicky for no very good reason",
            "Things have been getting on top of me",
            "I have been so unhappy that I have had difficulty sleeping",
            "I have felt sad or miserable",
            "I have been so unhappy that I have been crying",
            "The thought of harming myself has occurred to me"
        ],
        interpretation: [
            { min: 0, max: 8, severity: "Low Risk", color: "#10b981", recommendation: "Depression not likely. Continue routine screening." },
            { min: 9, max: 11, severity: "Possible Depression", color: "#f59e0b", recommendation: "Monitor closely; consider repeating in 2–4 weeks." },
            { min: 12, max: 13, severity: "Fairly High Possibility", color: "#f97316", recommendation: "Further diagnostic assessment recommended." },
            { min: 14, max: 30, severity: "Probable Depression", color: "#ef4444", recommendation: "Diagnostic assessment and intervention required." }
        ],
        about: {
            whenToUse: "Use at the 6-week postnatal check or any postpartum visit. Also validated for use during pregnancy (antenatal screening).",
            pearlsPitfalls: [
                "Question 10 specifically asks about self-harm — any positive response requires immediate assessment.",
                "Sensitivity 86%, specificity 78% for major depression at cutoff ≥10.",
                "Not diagnostic — used as a screening tool only.",
                "Also validated in men (fathers) during the postnatal period."
            ],
            whyUse: "Gold-standard screening tool for postnatal depression. Recommended by ACOG and NICE guidelines."
        },
        nextSteps: {
            management: [
                { label: "Score ≥10", text: "Conduct clinical interview for depression. Consider treatment options." },
                { label: "Score ≥13", text: "High likelihood of depression. Initiate treatment and close follow-up." },
                { label: "Q10 positive", text: "Any endorsement of self-harm requires immediate safety assessment." }
            ],
            criticalActions: "Question 10 about self-harm requires immediate follow-up regardless of total score. Always assess safety."
        },
        evidence: {
            formula: "Sum of 10 items, each scored 0–3, with questions 1, 2, & 4 reverse-scored. Range: 0–30.",
            facts: [
                { label: "Sensitivity", value: "86% at cutoff ≥10" },
                { label: "Specificity", value: "78% at cutoff ≥10" },
                { label: "Validation", value: "Validated in over 20 languages worldwide" }
            ],
            references: [
                "Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry. 1987;150:782–786."
            ]
        },
        creator: { name: "Dr. John L. Cox, FRCPsych", title: "University of Keele", initials: "JC", bio: "Dr. Cox developed the EPDS to address the unique presentation of depression in the postnatal period, which may differ from classical depression." }
    },

    // ─── C-SSRS ───
    "cssrs": {
        id: "cssrs",
        name: "C-SSRS",
        fullName: "Columbia Suicide Severity Rating Scale (Screener)",
        category: "Safety",
        categoryColor: "#f87171",
        description: "Structured screening for suicidal ideation and behavior severity.",
        timeframe: "In the past month",
        maxScore: 6,
        scoringType: "cssrs",
        questions: [
            "Have you wished you were dead or wished you could go to sleep and not wake up?",
            "Have you actually had any thoughts of killing yourself?",
            "Have you been thinking about how you might do this?",
            "Have you had these thoughts and had some intention of acting on them?",
            "Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?",
            "Have you done anything, started to do anything, or prepared to do anything to end your life?"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 0, severity: "No Risk Identified", color: "#10b981", recommendation: "No suicidal ideation identified. Continue monitoring per protocol." },
            { min: 1, max: 2, severity: "Low Risk — Ideation", color: "#f59e0b", recommendation: "Passive ideation present. Provide safety resources; consider follow-up and referral." },
            { min: 3, max: 4, severity: "Moderate Risk — Plan", color: "#f97316", recommendation: "Active ideation with method/intent. Requires immediate safety assessment and mental health referral." },
            { min: 5, max: 6, severity: "High Risk — Action", color: "#ef4444", recommendation: "Active planning or behavior. IMMEDIATE intervention required. Do not leave patient alone." }
        ],
        about: {
            whenToUse: "Use whenever suicidal ideation is suspected or disclosed. Required by Joint Commission for all patients in behavioral health settings. Useful in ED, primary care, and any clinical setting.",
            pearlsPitfalls: [
                "Questions are hierarchical — stop if all answers are 'No' (patient screens negative).",
                "A 'Yes' to Question 6 (behavior) requires immediate crisis intervention.",
                "This is the screener version; the full C-SSRS includes additional assessment of lethality and follow-up.",
                "92% sensitivity and 91% specificity for predicting suicide attempts."
            ],
            whyUse: "The only structured suicide assessment tool endorsed by the FDA, CDC, WHO, and Joint Commission. Provides a standardized framework for assessing suicide risk across all clinical settings."
        },
        nextSteps: {
            management: [
                { label: "Q1-2 Yes", text: "Passive ideation. Provide crisis resources (988 Suicide & Crisis Lifeline). Schedule follow-up within 1 week." },
                { label: "Q3-4 Yes", text: "Active ideation with potential plan. Do not discharge without safety assessment. Refer to mental health immediately." },
                { label: "Q5-6 Yes", text: "URGENT: Active plan or behavior. Initiate crisis protocol. 1:1 observation. Emergency psychiatric evaluation." }
            ],
            criticalActions: "Any positive response requires documentation and follow-up. Question 5-6 positive responses represent psychiatric emergencies. Always provide crisis resources: 988 Suicide & Crisis Lifeline."
        },
        evidence: {
            formula: "Hierarchical severity assessment. Questions 1–2: Ideation. Questions 3–5: Ideation with plan/intent. Question 6: Suicidal behavior. Maximum severity level reported is the score.",
            facts: [
                { label: "Sensitivity", value: "92% for predicting suicide attempts" },
                { label: "Specificity", value: "91%" },
                { label: "Adoption", value: "Used in 100+ countries; endorsed by FDA, CDC, WHO, Joint Commission" }
            ],
            references: [
                "Posner K, Brown GK, Stanley B, et al. The Columbia-Suicide Severity Rating Scale: initial validity and internal consistency findings. Am J Psychiatry. 2011;168(12):1266–1277."
            ]
        },
        creator: { name: "Dr. Kelly Posner Gerstenhaber, PhD", title: "Columbia University", initials: "KP", bio: "Dr. Posner developed the C-SSRS in response to the FDA's call for a standardized suicide assessment tool following the 2004 antidepressant safety review." }
    },

    // ═══════════════════════════════════════════════
    // PRIMARY CARE / INTERNAL MEDICINE
    // ═══════════════════════════════════════════════

    // ─── CHA₂DS₂-VASc ───
    "chadsvasc": {
        id: "chadsvasc",
        name: "CHA₂DS₂-VASc",
        fullName: "CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk",
        category: "Cardiovascular",
        categoryColor: "#f43f5e",
        description: "Estimates stroke risk in patients with atrial fibrillation to guide anticoagulation.",
        timeframe: "",
        maxScore: 9,
        questions: [
            "Congestive Heart Failure (or LV dysfunction)",
            "Hypertension",
            "Age ≥75 years",
            "Diabetes Mellitus",
            "Stroke / TIA / Thromboembolism history",
            "Vascular disease (prior MI, PAD, or aortic plaque)",
            "Age 65–74 years",
            "Sex category (female)"
        ],
        optionsByQuestion: {
            0: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            1: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            2: [{ label: "No", value: 0 }, { label: "Yes", value: 2 }],
            3: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            4: [{ label: "No", value: 0 }, { label: "Yes", value: 2 }],
            5: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            6: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            7: [{ label: "No (Male)", value: 0 }, { label: "Yes (Female)", value: 1 }]
        },
        interpretation: [
            { min: 0, max: 0, severity: "Low Risk", color: "#10b981", recommendation: "0.2% annual stroke risk. Consider no antithrombotic therapy or aspirin." },
            { min: 1, max: 1, severity: "Low-Moderate", color: "#f59e0b", recommendation: "0.6% annual stroke risk. Consider oral anticoagulant (preferred) or aspirin." },
            { min: 2, max: 3, severity: "Moderate", color: "#f97316", recommendation: "2.2–3.2% annual stroke risk. Oral anticoagulation recommended." },
            { min: 4, max: 9, severity: "High Risk", color: "#ef4444", recommendation: "4.8–15.2% annual stroke risk. Oral anticoagulation strongly recommended." }
        ],
        about: {
            whenToUse: "Use in patients with non-valvular atrial fibrillation to determine stroke risk and guide anticoagulation decisions.",
            pearlsPitfalls: [
                "Age ≥75 and prior Stroke/TIA each contribute 2 points (all others = 1 point).",
                "Female sex alone (score = 1) does not warrant anticoagulation — it's a risk modifier.",
                "Replaced the older CHADS₂ score. Endorsed by ESC, AHA, and ACC guidelines.",
                "Use alongside HAS-BLED to weigh stroke vs. bleeding risk."
            ],
            whyUse: "Most widely used tool for anticoagulation decision-making in atrial fibrillation. Endorsed by all major cardiology guidelines."
        },
        nextSteps: {
            management: [
                { label: "Score 0 (males) or 1 (females)", text: "Low risk. May omit anticoagulation. Reassess at regular intervals." },
                { label: "Score 1 (males)", text: "Consider oral anticoagulant. Weigh against bleeding risk." },
                { label: "Score ≥2", text: "Anticoagulation recommended. Prefer DOAC over warfarin in most patients." }
            ],
            criticalActions: "Always assess bleeding risk (HAS-BLED) alongside stroke risk. A high HAS-BLED score is not an absolute contraindication to anticoagulation — it indicates closer monitoring is needed."
        },
        evidence: {
            formula: "Sum of weighted risk factors. C=1, H=1, A₂=2, D=1, S₂=2, V=1, A=1, Sc=1. Range: 0–9.",
            facts: [
                { label: "Validation", value: "Validated in >73,000 patients with AF" },
                { label: "Guidelines", value: "Endorsed by ESC 2020, AHA/ACC/HRS 2019" },
                { label: "Advantage", value: "Better discrimination of low-risk patients than CHADS₂" }
            ],
            references: [
                "Lip GY, Nieuwlaat R, Pisters R, et al. Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation. Chest. 2010;137(2):263–272.",
                "January CT, Wann LS, Calkins H, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151."
            ]
        },
        creator: { name: "Prof. Gregory Y.H. Lip, MD", title: "University of Liverpool", initials: "GL", bio: "Prof. Lip developed the CHA₂DS₂-VASc score to improve upon the earlier CHADS₂ score by better stratifying low-risk patients with atrial fibrillation." }
    },

    // ─── HEART Score ───
    "heart": {
        id: "heart",
        name: "HEART Score",
        fullName: "HEART Score for Major Cardiac Events",
        category: "Cardiovascular",
        categoryColor: "#f43f5e",
        description: "Risk stratifies chest pain patients for major adverse cardiac events (MACE).",
        timeframe: "",
        maxScore: 10,
        questions: [
            "History — How suspicious is the clinical history?",
            "ECG — What are the ECG findings?",
            "Age — Patient's age",
            "Risk Factors — How many risk factors? (HTN, DM, hyperlipidemia, smoking, obesity, family hx CAD)",
            "Troponin — Initial troponin result"
        ],
        optionsByQuestion: {
            0: [
                { label: "Slightly suspicious", value: 0 },
                { label: "Moderately suspicious", value: 1 },
                { label: "Highly suspicious", value: 2 }
            ],
            1: [
                { label: "Normal", value: 0 },
                { label: "Non-specific repolarization changes", value: 1 },
                { label: "Significant ST deviation", value: 2 }
            ],
            2: [
                { label: "< 45 years", value: 0 },
                { label: "45–64 years", value: 1 },
                { label: "≥ 65 years", value: 2 }
            ],
            3: [
                { label: "No known risk factors", value: 0 },
                { label: "1–2 risk factors", value: 1 },
                { label: "≥ 3 risk factors or history of atherosclerotic disease", value: 2 }
            ],
            4: [
                { label: "≤ normal limit", value: 0 },
                { label: "1–3× normal limit", value: 1 },
                { label: "> 3× normal limit", value: 2 }
            ]
        },
        interpretation: [
            { min: 0, max: 3, severity: "Low Risk", color: "#10b981", recommendation: "1.6% risk of MACE. Consider early discharge with outpatient follow-up." },
            { min: 4, max: 6, severity: "Moderate Risk", color: "#f97316", recommendation: "12–17% risk of MACE. Admit for observation, serial troponins, and possible stress testing." },
            { min: 7, max: 10, severity: "High Risk", color: "#ef4444", recommendation: "50–65% risk of MACE. Early aggressive intervention (cardiology consult, possible catheterization)." }
        ],
        about: {
            whenToUse: "Use for risk stratification of adult patients presenting to the emergency department with chest pain or symptoms suspicious for acute coronary syndrome.",
            pearlsPitfalls: [
                "HEART = History, ECG, Age, Risk factors, Troponin.",
                "Low-risk patients (0–3) may be safely discharged — MACE rate 0.9–1.7%.",
                "Not validated in STEMI patients — those proceed directly to cath lab.",
                "Most useful in the undifferentiated chest pain patient."
            ],
            whyUse: "Rapidly identifies low-risk chest pain patients who can be safely discharged, reducing unnecessary admissions and invasive testing."
        },
        nextSteps: {
            management: [
                { label: "Score 0–3", text: "Low risk. Consider discharge with outpatient follow-up in 72 hours. Stress test as outpatient if indicated." },
                { label: "Score 4–6", text: "Moderate risk. Admit for observation, serial troponins at 3-6 hours, consider stress testing or CT coronary angiography." },
                { label: "Score 7–10", text: "High risk. Cardiology consult. Consider early invasive strategy (catheterization)." }
            ],
            criticalActions: "The HEART score should not be applied to patients with clear STEMI on ECG. Those patients require immediate reperfusion therapy."
        },
        evidence: {
            formula: "Sum of 5 components, each scored 0–2. Range: 0–10.",
            facts: [
                { label: "Sensitivity", value: "96–99% for MACE at cutoff ≤3" },
                { label: "MACE rate (low risk)", value: "0.9–1.7% at 6 weeks" },
                { label: "Validation", value: "Validated in 10+ studies with >12,000 patients" }
            ],
            references: [
                "Six AJ, Backus BE, Kelder JC. Chest pain in the emergency room: value of the HEART score. Neth Heart J. 2008;16(6):191–196.",
                "Backus BE, Six AJ, Kelder JC, et al. A prospective validation of the HEART score for chest pain patients at the emergency department. Int J Cardiol. 2013;168(3):2153–2158."
            ]
        },
        creator: { name: "Dr. A. Jacob Six, MD", title: "Zuwe Hofpoort Hospital, Netherlands", initials: "JS", bio: "Dr. Six developed the HEART score to provide a simple, practical tool for emergency physicians to stratify chest pain patients." }
    },

    // ─── Wells PE ───
    "wellspe": {
        id: "wellspe",
        name: "Wells' PE",
        fullName: "Wells' Criteria for Pulmonary Embolism",
        category: "Pulmonary",
        categoryColor: "#38bdf8",
        description: "Estimates pre-test probability of pulmonary embolism to guide diagnostic workup.",
        timeframe: "",
        maxScore: 12,
        questions: [
            "Clinical signs/symptoms of DVT (leg swelling, pain with palpation)",
            "PE is #1 diagnosis, or equally likely",
            "Heart rate > 100 bpm",
            "Immobilization (≥3 days) or surgery in the previous 4 weeks",
            "Previous PE or DVT diagnosis",
            "Hemoptysis",
            "Malignancy (treatment within 6 months or palliative)"
        ],
        optionsByQuestion: {
            0: [{ label: "No", value: 0 }, { label: "Yes (+3)", value: 3 }],
            1: [{ label: "No", value: 0 }, { label: "Yes (+3)", value: 3 }],
            2: [{ label: "No", value: 0 }, { label: "Yes (+1.5)", value: 1.5 }],
            3: [{ label: "No", value: 0 }, { label: "Yes (+1.5)", value: 1.5 }],
            4: [{ label: "No", value: 0 }, { label: "Yes (+1.5)", value: 1.5 }],
            5: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            6: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }]
        },
        interpretation: [
            { min: 0, max: 1, severity: "Low Probability", color: "#10b981", recommendation: "PE unlikely (~1.3%). Check D-dimer — if negative, PE effectively excluded." },
            { min: 2, max: 6, severity: "Moderate Probability", color: "#f97316", recommendation: "PE possible (~16.2%). Check D-dimer. If positive, obtain CTPA." },
            { min: 7, max: 12, severity: "High Probability", color: "#ef4444", recommendation: "PE likely (~40.6%). Proceed directly to CTPA. Do not rely on D-dimer alone." }
        ],
        about: {
            whenToUse: "Use when pulmonary embolism is in the differential for patients presenting with dyspnea, chest pain, tachycardia, or hemoptysis.",
            pearlsPitfalls: [
                "The simplified version uses a cutoff of ≤4 (PE unlikely) vs. >4 (PE likely).",
                "D-dimer is only useful to rule OUT PE in low/moderate probability patients.",
                "Clinical gestalt ('PE is #1 diagnosis') is worth 3 points and significantly impacts scoring.",
                "Does NOT apply to patients already on anticoagulation."
            ],
            whyUse: "Most widely used and validated clinical prediction rule for PE. Guides the rational use of D-dimer testing and CT pulmonary angiography."
        },
        nextSteps: {
            management: [
                { label: "Low probability + negative D-dimer", text: "PE effectively ruled out. Consider alternative diagnoses." },
                { label: "Moderate probability", text: "Obtain D-dimer. If elevated, proceed to CTPA." },
                { label: "High probability", text: "Obtain CTPA regardless of D-dimer. Consider empiric anticoagulation while awaiting imaging." }
            ],
            criticalActions: "In hemodynamically unstable patients with high clinical suspicion, initiate empiric anticoagulation and consider bedside echocardiography. Do not delay treatment for diagnostic testing."
        },
        evidence: {
            formula: "Sum of weighted criteria. DVT signs=3, PE #1 diagnosis=3, HR>100=1.5, Immobilization/surgery=1.5, Prior PE/DVT=1.5, Hemoptysis=1, Malignancy=1. Range: 0–12.5.",
            facts: [
                { label: "Sensitivity", value: "95% in combination with D-dimer" },
                { label: "Validation", value: "Originally validated in 1,260 patients (Wells 2000)" },
                { label: "Adoption", value: "Recommended by ACEP, BTS, and ESC guidelines" }
            ],
            references: [
                "Wells PS, Anderson DR, Rodger M, et al. Derivation of a simple clinical model to categorize patients' probability of pulmonary embolism. Thromb Haemost. 2000;83(3):416–420.",
                "Wells PS, Anderson DR, Rodger M, et al. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001;135(2):98–107."
            ]
        },
        creator: { name: "Dr. Philip S. Wells, MD", title: "University of Ottawa", initials: "PW", bio: "Dr. Wells developed clinical prediction rules for both PE and DVT that transformed the diagnostic approach to venous thromboembolism." }
    },

    // ─── Wells DVT ───
    "wellsdvt": {
        id: "wellsdvt",
        name: "Wells' DVT",
        fullName: "Wells' Criteria for Deep Vein Thrombosis",
        category: "Cardiovascular",
        categoryColor: "#f43f5e",
        description: "Estimates pre-test probability of DVT to guide diagnostic workup.",
        timeframe: "",
        maxScore: 8,
        questions: [
            "Active cancer (treatment within 6 months or palliative)",
            "Paralysis, paresis, or recent plaster immobilization of the lower extremity",
            "Recently bedridden ≥3 days or major surgery within 12 weeks",
            "Localized tenderness along the distribution of the deep venous system",
            "Entire leg swollen",
            "Calf swelling ≥3 cm compared to asymptomatic leg (measured 10 cm below tibial tuberosity)",
            "Pitting edema confined to the symptomatic leg",
            "Collateral superficial veins (non-varicose)",
            "Alternative diagnosis at least as likely as DVT"
        ],
        optionsByQuestion: {
            0: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            1: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            2: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            3: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            4: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            5: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            6: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            7: [{ label: "No", value: 0 }, { label: "Yes (+1)", value: 1 }],
            8: [{ label: "No", value: 0 }, { label: "Yes (−2)", value: -2 }]
        },
        interpretation: [
            { min: -2, max: 0, severity: "Low Probability", color: "#10b981", recommendation: "DVT unlikely (~5%). D-dimer may safely exclude DVT." },
            { min: 1, max: 2, severity: "Moderate Probability", color: "#f97316", recommendation: "DVT possible (~17%). Check D-dimer; if positive, obtain ultrasound." },
            { min: 3, max: 8, severity: "High Probability", color: "#ef4444", recommendation: "DVT likely (~53%). Obtain compression ultrasound. Consider empiric anticoagulation." }
        ],
        about: {
            whenToUse: "Use in patients with signs or symptoms suggestive of DVT (unilateral leg swelling, pain, warmth) to determine appropriate workup.",
            pearlsPitfalls: [
                "Alternative diagnosis equally likely SUBTRACTS 2 points — a critical item.",
                "Only validated in first-episode, symptomatic outpatients.",
                "Not validated in pregnancy, prior DVT on anticoagulation, or amputees.",
                "Simplified version: ≤1 = unlikely, ≥2 = likely."
            ],
            whyUse: "Guides rational use of D-dimer testing and ultrasound, avoiding unnecessary imaging in low-risk patients."
        },
        nextSteps: {
            management: [
                { label: "Low probability + negative D-dimer", text: "DVT effectively ruled out." },
                { label: "Moderate probability", text: "Obtain D-dimer. If positive, proceed to compression ultrasound." },
                { label: "High probability", text: "Obtain compression ultrasound. Consider empiric anticoagulation if imaging delayed." }
            ],
            criticalActions: "In patients with high clinical suspicion, do not delay anticoagulation while awaiting imaging results."
        },
        evidence: {
            formula: "Sum of criteria (each +1) minus 2 points for alternative diagnosis. Range: −2 to 8.",
            facts: [
                { label: "Sensitivity", value: "97% in combination with D-dimer" },
                { label: "NPV", value: "99.5% when low probability + negative D-dimer" },
                { label: "Validation", value: "Validated in 1,096 outpatients (Wells 2003)" }
            ],
            references: [
                "Wells PS, Anderson DR, Bormanis J, et al. Value of assessment of pretest probability of deep-vein thrombosis in clinical management. Lancet. 1997;350(9094):1795–1798.",
                "Wells PS, Anderson DR, Rodger M, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003;349(13):1227–1235."
            ]
        },
        creator: { name: "Dr. Philip S. Wells, MD", title: "University of Ottawa", initials: "PW", bio: "Dr. Wells developed the Wells' criteria for both DVT and PE, making venous thromboembolism diagnosis more systematic and evidence-based." }
    },

    // ─── CURB-65 ───
    "curb65": {
        id: "curb65",
        name: "CURB-65",
        fullName: "CURB-65 Severity Score for Community-Acquired Pneumonia",
        category: "Pulmonary",
        categoryColor: "#38bdf8",
        description: "Predicts mortality in community-acquired pneumonia to guide inpatient vs. outpatient management.",
        timeframe: "",
        maxScore: 5,
        scoringType: "binary",
        questions: [
            "Confusion (new mental confusion, AMT ≤8)",
            "Urea / BUN > 19 mg/dL (>7 mmol/L)",
            "Respiratory rate ≥30 breaths/min",
            "Blood pressure: SBP <90 mmHg or DBP ≤60 mmHg",
            "Age ≥65 years"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 1, severity: "Low Risk", color: "#10b981", recommendation: "0.6–2.7% 30-day mortality. Consider outpatient treatment." },
            { min: 2, max: 2, severity: "Moderate Risk", color: "#f97316", recommendation: "6.8% 30-day mortality. Consider short inpatient stay or closely supervised outpatient." },
            { min: 3, max: 5, severity: "High Risk", color: "#ef4444", recommendation: "14–27.8% 30-day mortality. Hospitalize; consider ICU admission if score 4–5." }
        ],
        about: {
            whenToUse: "Use in adults diagnosed with community-acquired pneumonia (CAP) to determine severity and appropriate level of care.",
            pearlsPitfalls: [
                "CURB-65: Confusion, Urea, Respiratory rate, Blood pressure, age ≥65.",
                "CRB-65 (without urea) can be used in outpatient settings where labs aren't available.",
                "Does NOT account for comorbidities, social factors, or oxygen saturation.",
                "Should be used alongside clinical judgment — a young patient with hypoxia may still need admission."
            ],
            whyUse: "Simple, widely validated tool that helps determine the appropriate setting of care for pneumonia. Endorsed by BTS and NICE."
        },
        nextSteps: {
            management: [
                { label: "Score 0–1", text: "Low severity. Outpatient treatment with oral antibiotics. Follow-up in 48 hours." },
                { label: "Score 2", text: "Moderate severity. Consider short hospital stay. Reassess within 24 hours." },
                { label: "Score ≥3", text: "Severe pneumonia. Hospitalize. Score 4–5: assess for ICU admission." }
            ],
            criticalActions: "Always assess oxygenation (SpO₂) independently. Hypoxia (SpO₂ <92%) may warrant admission regardless of CURB-65 score."
        },
        evidence: {
            formula: "1 point each for: Confusion, Urea >19, RR ≥30, BP <90/60, and Age ≥65. Range: 0–5.",
            facts: [
                { label: "30-day mortality (score 0)", value: "0.6%" },
                { label: "30-day mortality (score 3)", value: "14.0%" },
                { label: "Validation", value: "Derived from 1,068 and validated in 718 CAP patients" }
            ],
            references: [
                "Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital. Thorax. 2003;58(5):377–382."
            ]
        },
        creator: { name: "Dr. Wei Shen Lim, MBBS", title: "Nottingham University Hospitals, UK", initials: "WL", bio: "Dr. Lim developed the CURB-65 as a practical bedside scoring system to assess community-acquired pneumonia severity." }
    },

    // ─── STOP-BANG ───
    "stopbang": {
        id: "stopbang",
        name: "STOP-BANG",
        fullName: "STOP-BANG Score for Obstructive Sleep Apnea",
        category: "Sleep / Pulmonary",
        categoryColor: "#818cf8",
        description: "Screening questionnaire for obstructive sleep apnea (OSA) risk.",
        timeframe: "",
        maxScore: 8,
        scoringType: "binary",
        questions: [
            "Snoring — Do you snore loudly (louder than talking or can be heard through closed doors)?",
            "Tired — Do you often feel tired, fatigued, or sleepy during the daytime?",
            "Observed — Has anyone observed you stop breathing or choking/gasping during your sleep?",
            "Pressure — Do you have or are you being treated for high blood pressure?",
            "BMI > 35 kg/m²",
            "Age > 50 years",
            "Neck circumference > 40 cm (16 inches)",
            "Gender — Male"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 2, severity: "Low Risk", color: "#10b981", recommendation: "Low risk for moderate-to-severe OSA." },
            { min: 3, max: 4, severity: "Intermediate Risk", color: "#f59e0b", recommendation: "Intermediate risk. Consider polysomnography if clinically indicated." },
            { min: 5, max: 8, severity: "High Risk", color: "#ef4444", recommendation: "High risk for moderate-to-severe OSA. Refer for polysomnography." }
        ],
        about: {
            whenToUse: "Use as pre-operative screening, in primary care, or in sleep clinic intake. Particularly useful before elective surgery to identify OSA risk.",
            pearlsPitfalls: [
                "STOP-BANG: Snoring, Tired, Observed, Pressure, BMI, Age, Neck, Gender.",
                "Score ≥5 has high sensitivity (>90%) for moderate-to-severe OSA.",
                "Does NOT diagnose OSA — polysomnography is required for diagnosis.",
                "Important for perioperative risk assessment (OSA increases anesthesia risk)."
            ],
            whyUse: "Widely used, simple, and highly sensitive screening tool for OSA. Recommended by AASM and multiple anesthesia societies."
        },
        nextSteps: {
            management: [
                { label: "Score 0–2", text: "Low risk. Routine care. Rescreen if symptoms develop." },
                { label: "Score 3–4", text: "Intermediate risk. Consider referral for sleep study, especially if symptomatic." },
                { label: "Score ≥5", text: "High risk. Refer for polysomnography. If pre-operative, alert anesthesia team." }
            ],
            criticalActions: "In the perioperative setting, patients with high STOP-BANG scores should be flagged for potential difficult airway management and postoperative monitoring."
        },
        evidence: {
            formula: "Count of 'Yes' answers to 8 binary items. Range: 0–8.",
            facts: [
                { label: "Sensitivity", value: "93% for moderate-to-severe OSA (score ≥3)" },
                { label: "Specificity", value: "43% (high sensitivity, low specificity by design)" },
                { label: "Validation", value: "Validated in >6,000 surgical patients" }
            ],
            references: [
                "Chung F, Yegneswaran B, Liao P, et al. STOP questionnaire: a tool to screen patients for obstructive sleep apnea. Anesthesiology. 2008;108(5):812–821.",
                "Chung F, Abdullah HR, Liao P. STOP-Bang Questionnaire: a practical approach to screen for obstructive sleep apnea. Chest. 2016;149(3):631–638."
            ]
        },
        creator: { name: "Dr. Frances Chung, MBBS", title: "University of Toronto", initials: "FC", bio: "Dr. Chung developed the STOP-BANG questionnaire as a validated screening tool for obstructive sleep apnea in surgical and primary care populations." }
    },

    // ─── Modified Centor (McIsaac) ───
    "centor": {
        id: "centor",
        name: "Centor Score",
        fullName: "Modified Centor Score (McIsaac) for Strep Pharyngitis",
        category: "Infectious Disease",
        categoryColor: "#4ade80",
        description: "Estimates probability of streptococcal pharyngitis to guide testing and treatment.",
        timeframe: "",
        maxScore: 5,
        questions: [
            "Temperature > 38°C (100.4°F)",
            "Absence of cough",
            "Tender anterior cervical lymphadenopathy",
            "Tonsillar swelling or exudate",
            "Age modifier"
        ],
        optionsByQuestion: {
            0: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            1: [{ label: "Cough present", value: 0 }, { label: "No cough", value: 1 }],
            2: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            3: [{ label: "No", value: 0 }, { label: "Yes", value: 1 }],
            4: [
                { label: "Age ≥45 (−1)", value: -1 },
                { label: "Age 15–44 (0)", value: 0 },
                { label: "Age 3–14 (+1)", value: 1 }
            ]
        },
        interpretation: [
            { min: -1, max: 0, severity: "Very Low Risk", color: "#10b981", recommendation: "1–2.5% probability of Strep. No further testing or antibiotics needed." },
            { min: 1, max: 1, severity: "Low Risk", color: "#f59e0b", recommendation: "5–10% probability. Consider rapid antigen test if clinical concern." },
            { min: 2, max: 3, severity: "Moderate Risk", color: "#f97316", recommendation: "11–35% probability. Perform rapid strep test. Treat if positive." },
            { min: 4, max: 5, severity: "High Risk", color: "#ef4444", recommendation: "51–53% probability. Consider empiric antibiotics or rapid strep test." }
        ],
        about: {
            whenToUse: "Use in patients presenting with sore throat to determine whether rapid strep testing or empiric antibiotic treatment is warranted.",
            pearlsPitfalls: [
                "Modified from original Centor by McIsaac to include age modifier.",
                "No single sign or symptom reliably diagnoses strep pharyngitis.",
                "Even at score 4–5, probability is only ~50% — rapid testing is still preferred.",
                "Guideline-concordant care: score ≤1 = no test/treatment needed."
            ],
            whyUse: "Reduces unnecessary antibiotic prescriptions while ensuring appropriate testing for Group A Streptococcus."
        },
        nextSteps: {
            management: [
                { label: "Score ≤1", text: "No testing or antibiotics indicated. Symptomatic care." },
                { label: "Score 2–3", text: "Perform rapid antigen detection test (RADT). Treat if positive." },
                { label: "Score 4–5", text: "Perform RADT or consider empiric antibiotics (penicillin or amoxicillin × 10 days)." }
            ],
            criticalActions: "Watch for peritonsillar abscess (trismus, uvular deviation, 'hot potato' voice), which requires different management. Centor does not identify complications."
        },
        evidence: {
            formula: "Original Centor: 1 point each for fever, no cough, tender nodes, tonsillar exudate. McIsaac modification adds age: +1 (3–14), 0 (15–44), −1 (≥45). Range: −1 to 5.",
            facts: [
                { label: "Score 4 probability", value: "51–53% for GAS pharyngitis" },
                { label: "Score 0 probability", value: "2.5%" },
                { label: "Validation", value: "Validated in 600+ patients (McIsaac 1998)" }
            ],
            references: [
                "Centor RM, Witherspoon JM, Dalton HP, et al. The diagnosis of strep throat in adults in the emergency room. Med Decis Making. 1981;1(3):239–246.",
                "McIsaac WJ, White D, Tannenbaum D, Low DE. A clinical score to reduce unnecessary antibiotic use in patients with sore throat. CMAJ. 1998;158(1):75–83."
            ]
        },
        creator: { name: "Dr. Robert M. Centor, MD", title: "University of Alabama at Birmingham", initials: "RC", bio: "Dr. Centor developed the original clinical prediction rule for strep pharyngitis in 1981. Dr. Warren McIsaac later modified it to include an age adjustment." }
    },

    // ─── PERC Rule ───
    "perc": {
        id: "perc",
        name: "PERC Rule",
        fullName: "Pulmonary Embolism Rule-Out Criteria",
        category: "Pulmonary",
        categoryColor: "#38bdf8",
        description: "Rules out PE without D-dimer in low clinical suspicion patients. All 8 criteria must be negative.",
        timeframe: "",
        maxScore: 8,
        scoringType: "perc",
        questions: [
            "Age ≥50 years",
            "Heart rate ≥100 bpm",
            "SpO₂ <95% on room air",
            "Unilateral leg swelling",
            "Hemoptysis",
            "Recent surgery or trauma (within 4 weeks)",
            "Prior PE or DVT",
            "Hormone use (oral contraceptives, HRT, or estrogenic hormones)"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 0, severity: "PE Ruled Out", color: "#10b981", recommendation: "All 8 criteria negative. PE effectively ruled out. No D-dimer needed." },
            { min: 1, max: 8, severity: "Cannot Rule Out", color: "#ef4444", recommendation: "One or more criteria positive. PERC cannot exclude PE. Proceed with D-dimer ± CTPA." }
        ],
        about: {
            whenToUse: "Use ONLY in patients with LOW pre-test probability of PE (gestalt <15% or Wells ≤4). If all 8 criteria are absent, PE can be excluded without further testing.",
            pearlsPitfalls: [
                "PERC is a RULE-OUT tool — all 8 criteria must be negative.",
                "Only apply PERC after determining the patient is low-risk by gestalt or Wells.",
                "Cannot be used in moderate or high pre-test probability patients.",
                "Reduces unnecessary D-dimer testing and its false-positive cascade."
            ],
            whyUse: "Safely avoids D-dimer testing and its false-positive cascade in truly low-risk patients. Reduces radiation exposure from unnecessary CT scans."
        },
        nextSteps: {
            management: [
                { label: "All 8 negative", text: "PE effectively excluded. No further PE workup needed." },
                { label: "Any positive", text: "Cannot rule out PE with PERC. Check D-dimer. If D-dimer elevated, obtain CTPA." }
            ],
            criticalActions: "The PERC rule should only be applied to patients in whom your clinical gestalt is already that PE is unlikely (<15%). Using PERC in moderate/high-risk patients is inappropriate."
        },
        evidence: {
            formula: "All 8 criteria must be ABSENT (score = 0) to rule out PE. Any positive criterion (score ≥1) = PERC fails.",
            facts: [
                { label: "Sensitivity", value: "97.4% for PE" },
                { label: "False negative rate", value: "1.0% (well below the testing threshold)" },
                { label: "Validation", value: "Validated in 8,138 patients across 13 EDs (Kline 2004, 2008)" }
            ],
            references: [
                "Kline JA, Mitchell AM, Kabrhel C, et al. Clinical criteria to prevent unnecessary diagnostic testing in emergency department patients with suspected pulmonary embolism. J Thromb Haemost. 2004;2(8):1247–1255.",
                "Kline JA, Courtney DM, Kabrhel C, et al. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost. 2008;6(5):772–780."
            ]
        },
        creator: { name: "Dr. Jeffrey A. Kline, MD", title: "Indiana University", initials: "JK", bio: "Dr. Kline developed the PERC rule to safely reduce unnecessary testing for pulmonary embolism in low-risk emergency department patients." }
    },

    // ─── HAS-BLED ───
    "hasbled": {
        id: "hasbled",
        name: "HAS-BLED",
        fullName: "HAS-BLED Score for Major Bleeding Risk",
        category: "Cardiovascular",
        categoryColor: "#f43f5e",
        description: "Estimates risk of major bleeding in patients on anticoagulation for atrial fibrillation.",
        timeframe: "",
        maxScore: 9,
        scoringType: "binary",
        questions: [
            "Hypertension (uncontrolled SBP >160 mmHg)",
            "Abnormal renal function (dialysis, transplant, Cr >2.26 mg/dL)",
            "Abnormal liver function (cirrhosis, bilirubin >2×ULN, AST/ALT/ALP >3×ULN)",
            "Stroke history",
            "Bleeding history or predisposition (prior major bleed, anemia, thrombocytopenia)",
            "Labile INR (unstable/high INRs, TTR <60%)",
            "Elderly (age >65)",
            "Drugs predisposing to bleeding (antiplatelets, NSAIDs)",
            "Alcohol use (≥8 drinks/week)"
        ],
        options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 }
        ],
        interpretation: [
            { min: 0, max: 0, severity: "Low Risk", color: "#10b981", recommendation: "1.13% annual risk of major bleeding." },
            { min: 1, max: 2, severity: "Moderate Risk", color: "#f59e0b", recommendation: "1.02–1.88% annual risk. Anticoagulation generally appropriate with standard monitoring." },
            { min: 3, max: 9, severity: "High Risk", color: "#ef4444", recommendation: "3.74–12.5% annual risk. Caution with anticoagulation. Address modifiable risk factors. Closer monitoring needed." }
        ],
        about: {
            whenToUse: "Use alongside CHA₂DS₂-VASc in patients with atrial fibrillation to assess bleeding risk vs. stroke risk when considering anticoagulation.",
            pearlsPitfalls: [
                "HAS-BLED: Hypertension, Abnormal renal/liver, Stroke, Bleeding, Labile INR, Elderly, Drugs/alcohol.",
                "A high HAS-BLED score is NOT a contraindication to anticoagulation.",
                "Several risk factors are modifiable (hypertension, labile INR, drugs, alcohol).",
                "Score ≥3 indicates high risk — means closer monitoring, not necessarily withholding anticoagulation."
            ],
            whyUse: "Helps clinicians identify modifiable bleeding risk factors and determine the appropriate level of monitoring for patients on anticoagulation."
        },
        nextSteps: {
            management: [
                { label: "Score <3", text: "Acceptable bleeding risk. Proceed with anticoagulation per CHA₂DS₂-VASc." },
                { label: "Score ≥3", text: "High bleeding risk. Address modifiable factors (control BP, minimize NSAID use, address alcohol). More frequent INR monitoring if on warfarin." }
            ],
            criticalActions: "HAS-BLED should inform monitoring intensity, not whether to anticoagulate. Most patients with AF and CHA₂DS₂-VASc ≥2 benefit from anticoagulation even with high HAS-BLED."
        },
        evidence: {
            formula: "1 point each for 9 criteria (renal and liver abnormalities each scored separately under 'A'). Range: 0–9.",
            facts: [
                { label: "C-statistic", value: "0.72 for predicting major bleeding" },
                { label: "Score ≥3 bleeding rate", value: "3.74% per year" },
                { label: "Validation", value: "Derived from 3,978 patients in Euro Heart Survey" }
            ],
            references: [
                "Pisters R, Lane DA, Nieuwlaat R, et al. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation. Chest. 2010;138(5):1093–1100."
            ]
        },
        creator: { name: "Dr. Ron Pisters, MD", title: "Maastricht University Medical Centre, Netherlands", initials: "RP", bio: "Dr. Pisters developed HAS-BLED to provide a practical bleeding risk assessment tool that complements stroke risk scores in AF management." }
    },

    // ─── Mini-Cog ───
    "minicog": {
        id: "minicog",
        name: "Mini-Cog",
        fullName: "Mini-Cog Screen for Dementia",
        category: "Cognitive",
        categoryColor: "#a3e635",
        description: "Brief cognitive screening combining word recall and clock drawing to detect dementia.",
        timeframe: "",
        maxScore: 5,
        questions: [
            "Word recall — How many of the 3 words did the patient recall? (Give patient 3 unrelated words to remember, then have them draw a clock, then ask for the 3 words)",
            "Clock Drawing Test — Did the patient draw a normal clock? (All numbers 1–12 in correct position, hands pointing to the specified time)"
        ],
        optionsByQuestion: {
            0: [
                { label: "0 words recalled", value: 0 },
                { label: "1 word recalled", value: 1 },
                { label: "2 words recalled", value: 2 },
                { label: "3 words recalled", value: 3 }
            ],
            1: [
                { label: "Abnormal clock", value: 0 },
                { label: "Normal clock", value: 2 }
            ]
        },
        interpretation: [
            { min: 0, max: 2, severity: "Positive Screen", color: "#ef4444", recommendation: "Cognitive impairment likely. Further evaluation with comprehensive cognitive assessment (e.g., MoCA, MMSE) recommended." },
            { min: 3, max: 5, severity: "Negative Screen", color: "#10b981", recommendation: "No significant cognitive impairment detected on this screen. Monitor per age-appropriate guidelines." }
        ],
        about: {
            whenToUse: "Use as a brief cognitive screen in primary care, pre-operative assessment, or any setting where cognitive impairment is suspected. Takes approximately 3 minutes to administer.",
            pearlsPitfalls: [
                "The clock drawing is administered BETWEEN encoding and recall of the 3 words (serves as a distractor).",
                "Does NOT diagnose dementia — it screens for cognitive impairment warranting further evaluation.",
                "Less affected by education level and language than MMSE.",
                "Score of 0–2 has 76% sensitivity and 89% specificity for dementia."
            ],
            whyUse: "Fastest validated cognitive screen available (~3 minutes). Easier to administer than MMSE or MoCA. No copyright restrictions."
        },
        nextSteps: {
            management: [
                { label: "Score 0–2 (positive)", text: "Refer for comprehensive cognitive evaluation. Consider MoCA or neuropsych testing. Assess ADLs and safety." },
                { label: "Score 3–5 (negative)", text: "Reassuring screen. Continue age-appropriate monitoring. Rescreen annually in high-risk populations." }
            ],
            criticalActions: "A positive Mini-Cog warrants safety assessment (driving, medication management, living situation). Rule out reversible causes: B12, TSH, RPR, depression."
        },
        evidence: {
            formula: "Word recall (0–3 points) + Clock Drawing (0 = abnormal, 2 = normal). Range: 0–5. Cutoff: ≤2 = positive screen.",
            facts: [
                { label: "Sensitivity", value: "76% for dementia" },
                { label: "Specificity", value: "89% for dementia" },
                { label: "Administration time", value: "~3 minutes" },
                { label: "Validation", value: "Validated in diverse community-dwelling populations" }
            ],
            references: [
                "Borson S, Scanlan J, Brush M, et al. The Mini-Cog: a cognitive 'vital signs' measure for dementia screening in multi-lingual elderly. Int J Geriatr Psychiatry. 2000;15(11):1021–1027.",
                "Borson S, Scanlan JM, Chen P, Ganguli M. The Mini-Cog as a screen for dementia: validation in a population-based sample. J Am Geriatr Soc. 2003;51(10):1451–1454."
            ]
        },
        creator: { name: "Dr. Soo Borson, MD", title: "University of Washington", initials: "SB", bio: "Dr. Borson developed the Mini-Cog to provide a brief, language-independent cognitive screening tool that could be used across diverse populations in busy clinical settings." }
    },

    // ─── ASRS v1.1 Screener ───
    "asrs": {
        id: "asrs",
        name: "ASRS",
        fullName: "Adult ADHD Self-Report Scale v1.1 — Screener",
        category: "ADHD",
        categoryColor: "#fb923c",
        description: "WHO-developed screener for adult Attention Deficit Hyperactivity Disorder (ADHD).",
        timeframe: "Over the last 6 months",
        maxScore: 6,
        questions: [
            "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
            "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
            "How often do you have problems remembering appointments or obligations?",
            "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
            "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
            "How often do you feel overly active and compelled to do things, like you were driven by a motor?"
        ],
        optionsByQuestion: {
            0: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 1 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ],
            1: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 1 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ],
            2: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 1 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ],
            3: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 0 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ],
            4: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 0 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ],
            5: [
                { label: "Never", value: 0 },
                { label: "Rarely", value: 0 },
                { label: "Sometimes", value: 0 },
                { label: "Often", value: 1 },
                { label: "Very Often", value: 1 }
            ]
        },
        interpretation: [
            { min: 0, max: 3, severity: "Negative Screen", color: "#10b981", recommendation: "ADHD unlikely based on this screen. Symptoms do not meet screening threshold." },
            { min: 4, max: 6, severity: "Positive Screen", color: "#ef4444", recommendation: "Symptoms are highly consistent with ADHD in adults. Further detailed clinical evaluation is warranted." }
        ],
        about: {
            whenToUse: "Use in adults (≥18 years) who present with complaints of inattention, disorganization, restlessness, or difficulty completing tasks. Also useful for screening when ADHD is suspected as a comorbidity in anxiety/depression.",
            pearlsPitfalls: [
                "This is the 6-item Part A screener, not the full 18-item ASRS.",
                "Uses the WHO 'shaded box' scoring: Q1–3 threshold is 'Sometimes'; Q4–6 threshold is 'Often'.",
                "≥4 items in the shaded zone = positive screen.",
                "High sensitivity for adult ADHD but does NOT diagnose — requires comprehensive clinical evaluation.",
                "ADHD frequently co-occurs with anxiety, depression, and substance use disorders."
            ],
            whyUse: "The ASRS is the WHO's recommended screening instrument for adult ADHD. It takes under 5 minutes and is the most widely used adult ADHD screener worldwide."
        },
        nextSteps: {
            management: [
                { label: "Score <4", text: "Negative screen. ADHD unlikely, but if clinical suspicion persists, consider full evaluation." },
                { label: "Score ≥4", text: "Positive screen. Refer for comprehensive ADHD evaluation including: developmental/childhood history, collateral information, assessment of functional impairment, and rule out other conditions (anxiety, depression, sleep disorders, thyroid)." }
            ],
            criticalActions: "A positive ASRS screen is not diagnostic. DSM-5 ADHD diagnosis requires: (1) symptom onset before age 12, (2) symptoms in ≥2 settings, (3) clear functional impairment, and (4) symptoms not better explained by another condition."
        },
        evidence: {
            formula: "WHO 'shaded box' method — Q1–3: positive if 'Sometimes' or higher; Q4–6: positive if 'Often' or higher. Count items in shaded zone. Range: 0–6. Cutoff: ≥4 = positive screen.",
            facts: [
                { label: "Sensitivity", value: "68.7% for ADHD" },
                { label: "Specificity", value: "99.5%" },
                { label: "Total classification accuracy", value: "97.9%" },
                { label: "Validation", value: "Validated against clinical ADHD diagnosis in 154 patients (Kessler 2005)" }
            ],
            references: [
                "Kessler RC, Adler L, Ames M, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med. 2005;35(2):245–256.",
                "Kessler RC, Adler LA, Gruber MJ, et al. Validity of the WHO Adult ADHD Self-Report Scale (ASRS) Screener in a representative community sample. Psychol Med. 2007;37(7):981–993."
            ]
        },
        creator: { name: "Dr. Ronald C. Kessler, PhD", title: "Harvard Medical School", initials: "RK", bio: "Dr. Kessler developed the ASRS in collaboration with the World Health Organization to provide a brief, validated screening tool for adult ADHD. He is one of the most highly cited researchers in psychiatry and psychiatric epidemiology." }
    }
};
