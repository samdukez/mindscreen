// translations.js — Character-perfect English→Spanish dictionary for MindScreen
// Keys MUST match the exact strings in questionnaires.js (no extra punctuation!)
const DICTIONARY_ES = {

    // ─── TIMEFRAMES ───
    "Over the last 2 weeks": "Durante las últimas 2 semanas",
    "Over the last month": "Durante el último mes",
    "Over the past month": "Durante el mes pasado",
    "Over the last 6 months": "Durante los últimos 6 meses",
    "In the past 12 months": "En los últimos 12 meses",
    "In the past month": "En el mes pasado",
    "In the past 7 days": "En los últimos 7 días",
    "Has there ever been a period of time when...": "¿Ha habido algún periodo de tiempo en que...?",

    // ─── COMMON OPTIONS (exact labels from questionnaires.js) ───
    "Not at all": "En absoluto",
    "Several days": "Varios días",
    "More than half the days": "Más de la mitad de los días",
    "Nearly every day": "Casi todos los días",
    "Yes": "Sí",
    "No": "No",
    "Never": "Nunca",
    "Monthly or less": "Mensualmente o menos",
    "2-4 times a month": "2 a 4 veces al mes",
    "2-3 times a week": "2 a 3 veces por semana",
    "4+ times a week": "4 o más veces por semana",
    "1 or 2": "1 o 2",
    "3 or 4": "3 o 4",
    "5 or 6": "5 o 6",
    "7 to 9": "7 a 9",
    "10 or more": "10 o más",
    "Less than monthly": "Menos de una vez al mes",
    "Monthly": "Mensualmente",
    "Weekly": "Semanalmente",
    "Daily or almost daily": "A diario o casi a diario",
    "Rarely": "Raramente",
    "Sometimes": "A veces",
    "Often": "A menudo",
    "Very Often": "Muy a menudo",

    // EPDS options
    "As much as I always could": "Tanto como siempre",
    "Not quite so much now": "No tanto ahora",
    "Definitely not so much now": "Mucho menos ahora",
    "As much as I ever did": "Tanto como siempre",
    "Rather less than I used to": "Menos que antes",
    "Definitely less than I used to": "Mucho menos que antes",
    "Hardly at all": "Casi nada",
    "Yes, most of the time": "Sí, la mayor parte del tiempo",
    "Yes, some of the time": "Sí, a veces",
    "Not very often": "No muy a menudo",
    "No, never": "No, nunca",
    "No, not at all": "No, en absoluto",
    "Hardly ever": "Casi nunca",
    "Yes, sometimes": "Sí, a veces",
    "Yes, very often": "Sí, muy a menudo",
    "Yes, quite a lot": "Sí, bastante",
    "No, not much": "No, no mucho",
    "Yes, most of the time I haven't been able to cope at all": "Sí, la mayor parte del tiempo no he podido hacer las cosas en absoluto",
    "Yes, sometimes I haven't been coping as well as usual": "Sí, a veces no he podido hacer las cosas tan bien como de costumbre",
    "No, most of the time I have coped quite well": "No, la mayor parte del tiempo he podido hacer las cosas bastante bien",
    "No, I have been coping as well as ever": "No, he podido hacer las cosas tan bien como siempre",
    "Yes, quite often": "Sí, con bastante frecuencia",
    "Only occasionally": "Solo ocasionalmente",

    // Bonus question options (PHQ-9)
    "Not difficult at all": "Nada difícil",
    "Somewhat difficult": "Algo difícil",
    "Very difficult": "Muy difícil",
    "Extremely difficult": "Extremadamente difícil",

    // MDQ followup options
    "No problem": "Ningún problema",
    "Minor problem": "Problema menor",
    "Moderate problem": "Problema moderado",
    "Serious problem": "Problema serio",

    // ═══════════════════════════════════════
    // GAD-7 QUESTIONS (exact from questionnaires.js — NO question marks, NO trailing punctuation)
    // ═══════════════════════════════════════
    "Feeling nervous, anxious, or on edge": "Sentirse nervioso/a, ansioso/a o con los nervios de punta",
    "Not being able to stop or control worrying": "No ser capaz de parar o controlar la preocupación",
    "Worrying too much about different things": "Preocuparse demasiado por motivos diferentes",
    "Trouble relaxing": "Tener dificultad para relajarse",
    "Being so restless that it's hard to sit still": "Estar tan inquieto/a que es difícil quedarse quieto/a",
    "Becoming easily annoyed or irritable": "Molestarse o irritarse fácilmente",
    "Feeling afraid as if something awful might happen": "Sentir miedo como si algo terrible pudiera pasar",

    // ═══════════════════════════════════════
    // PHQ-9 / PHQ-2 QUESTIONS
    // ═══════════════════════════════════════
    "Little interest or pleasure in doing things": "Poco interés o placer en hacer cosas",
    "Feeling down, depressed, or hopeless": "Sentirse decaído/a, deprimido/a o sin esperanzas",
    "Trouble falling or staying asleep, or sleeping too much": "Dificultad para quedarse o mantenerse dormido/a, o dormir demasiado",
    "Feeling tired or having little energy": "Sentirse cansado/a o con poca energía",
    "Poor appetite or overeating": "Poco apetito o comer en exceso",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down": "Sentirse mal con usted mismo/a — o que es un fracaso o que ha decepcionado a su familia",
    "Trouble concentrating on things, such as reading the newspaper or watching television": "Dificultad para concentrarse en cosas, tales como leer el periódico o ver la televisión",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual": "Moverse o hablar tan lento que otras personas podrían haberlo notado. O lo contrario — estar tan inquieto/a o agitado/a que se ha estado moviendo mucho más de lo normal",
    "Thoughts that you would be better off dead or of hurting yourself in some way": "Pensamientos de que estaría mejor muerto/a o de hacerse daño de alguna manera",

    // PHQ-9 bonus question
    "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?": "Si marcó algún problema, ¿qué tan difícil le han hecho estos problemas para hacer su trabajo, encargarse de las cosas en casa, o llevarse bien con otras personas?",

    // ═══════════════════════════════════════
    // PC-PTSD-5 QUESTIONS
    // ═══════════════════════════════════════
    "Had nightmares about the event(s) or thought about the event(s) when you did not want to?": "¿Ha tenido pesadillas sobre el evento(s) o ha pensado en el evento(s) cuando no quería hacerlo?",
    "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?": "¿Ha intentado con esfuerzo no pensar en el evento(s) o se ha esforzado para evitar situaciones que le recordaban el evento(s)?",
    "Been constantly on guard, watchful, or easily startled?": "¿Ha estado constantemente en guardia, vigilante o se asusta fácilmente?",
    "Felt numb or detached from people, activities, or your surroundings?": "¿Se ha sentido entumecido/a o desconectado/a de las personas, las actividades o su entorno?",
    "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?": "¿Se ha sentido culpable o incapaz de dejar de culparse a sí mismo/a o a otros por el evento(s) o por problemas que pudiera haber causado?",

    // ═══════════════════════════════════════
    // MDQ QUESTIONS
    // ═══════════════════════════════════════
    "You felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?": "¿Se sintió tan bien o tan hiperactivo/a que otras personas pensaron que no era su ser normal, o estaba tan hiperactivo/a que se metió en problemas?",
    "You were so irritable that you shouted at people or started fights or arguments?": "¿Estaba tan irritable que le gritaba a la gente o empezaba peleas o discusiones?",
    "You felt much more self-confident than usual?": "¿Se sintió con mucha más confianza en sí mismo/a de lo habitual?",
    "You got much less sleep than usual and found you didn't really miss it?": "¿Durmió mucho menos de lo habitual y descubrió que realmente no lo echaba de menos?",
    "You were much more talkative or spoke much faster than usual?": "¿Estuvo mucho más hablador/a o hablaba mucho más rápido de lo habitual?",
    "Thoughts raced through your head and you couldn't slow your mind down?": "¿Los pensamientos pasaban corriendo por su cabeza y no podía calmar su mente?",
    "You were so easily distracted by things around you that you had trouble concentrating or staying on track?": "¿Se distraía tan fácilmente con las cosas a su alrededor que tenía problemas para concentrarse?",
    "You had much more energy than usual?": "¿Tenía mucha más energía de lo habitual?",
    "You were much more active or did many more things than usual?": "¿Estuvo mucho más activo/a o hizo muchas más cosas de lo habitual?",
    "You were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?": "¿Era mucho más sociable o extrovertido/a de lo normal; por ejemplo, llamó a amigos en medio de la noche?",
    "You were much more interested in sex than usual?": "¿Estaba mucho más interesado/a en el sexo de lo habitual?",
    "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?": "¿Hizo cosas que eran inusuales para usted o que otras personas podrían haber pensado que eran excesivas, tontas o riesgosas?",
    "Spending money got you or your family into trouble?": "¿Gastar dinero le causó problemas a usted o a su familia?",

    // MDQ Follow-ups
    "Have several of these ever happened during the same period of time?": "¿Han ocurrido varias de estas durante el mismo período de tiempo?",
    "How much of a problem did any of these cause you — like being unable to work; having family, money, or legal troubles; getting into arguments or fights?": "¿Qué tan problemático fue — como no poder trabajar; tener problemas familiares, de dinero o legales; pelearse o discutir?",

    // ═══════════════════════════════════════
    // AUDIT-C QUESTIONS
    // ═══════════════════════════════════════
    "How often do you have a drink containing alcohol?": "¿Con qué frecuencia consume una bebida que contiene alcohol?",
    "How many drinks containing alcohol do you have on a typical day when you are drinking?": "¿Cuántas bebidas que contienen alcohol toma en un día típico cuando bebe?",
    "How often do you have 6 or more drinks on one occasion?": "¿Con qué frecuencia toma 6 o más bebidas en una sola ocasión?",

    // ═══════════════════════════════════════
    // CAGE QUESTIONS
    // ═══════════════════════════════════════
    "Have you ever felt you needed to Cut down on your drinking?": "¿Alguna vez ha sentido que debería reducir la cantidad que bebe?",
    "Have people Annoyed you by criticizing your drinking?": "¿Le ha molestado la gente criticando su forma de beber?",
    "Have you ever felt Guilty about drinking?": "¿Alguna vez se ha sentido culpable por su forma de beber?",
    "Have you ever felt you needed a drink first thing in the morning (Eye-opener) to steady your nerves or to get rid of a hangover?": "¿Alguna vez ha sentido que necesitaba beber a primera hora de la mañana para calmar los nervios o para deshacerse de una resaca?",

    // ═══════════════════════════════════════
    // DAST-10 QUESTIONS
    // ═══════════════════════════════════════
    "Have you used drugs other than those required for medical reasons?": "¿Ha consumido drogas distintas a las necesarias por razones médicas?",
    "Do you abuse more than one drug at a time?": "¿Abusa de más de una droga a la vez?",
    "Are you always able to stop using drugs when you want to?": "¿Siempre es capaz de dejar de consumir drogas cuando lo desea?",
    "Have you had blackouts or flashbacks as a result of drug use?": "¿Ha tenido lagunas o flashbacks a consecuencia del uso de drogas?",
    "Do you ever feel bad or guilty about your drug use?": "¿Alguna vez se siente mal o culpable por su consumo de drogas?",
    "Does your spouse (or parents) ever complain about your involvement with drugs?": "¿Su cónyuge (o sus padres) se quejan de su implicación con las drogas?",
    "Have you neglected your family because of your use of drugs?": "¿Ha descuidado a su familia por el uso de drogas?",
    "Have you engaged in illegal activities in order to obtain drugs?": "¿Se ha involucrado en actividades ilegales para obtener drogas?",
    "Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?": "¿Alguna vez ha experimentado síntomas de abstinencia (se ha sentido enfermo/a) al dejar de consumir drogas?",
    "Have you had medical problems as a result of your drug use?": "¿Ha tenido problemas médicos a consecuencia de su consumo de drogas?",

    // ═══════════════════════════════════════
    // EPDS QUESTIONS
    // ═══════════════════════════════════════
    "I have been able to laugh and see the funny side of things": "He podido reír y ver el lado divertido de las cosas",
    "I have looked forward with enjoyment to things": "He esperado con ilusión que ocurran cosas buenas",
    "I have blamed myself unnecessarily when things went wrong": "Me he culpado a mí misma sin necesidad cuando las cosas salían mal",
    "I have been anxious or worried for no good reason": "He estado nerviosa o inquieta sin motivo aparente",
    "I have felt scared or panicky for no very good reason": "He sentido miedo o pánico sin motivo aparente",
    "Things have been getting on top of me": "Las cosas me han estado agobiando o superando",
    "I have been so unhappy that I have had difficulty sleeping": "He estado tan triste que he tenido dificultades para dormir",
    "I have felt sad or miserable": "Me he sentido triste o miserable",
    "I have been so unhappy that I have been crying": "He estado tan triste que he llorado",
    "The thought of harming myself has occurred to me": "Se me ha pasado por la cabeza la idea de hacerme daño",

    // ═══════════════════════════════════════
    // C-SSRS QUESTIONS
    // ═══════════════════════════════════════
    "Have you wished you were dead or wished you could go to sleep and not wake up?": "¿Ha deseado estar muerto/a o poder dormirse y no despertar?",
    "Have you actually had any thoughts of killing yourself?": "¿Realmente ha tenido algún pensamiento de suicidarse?",
    "Have you been thinking about how you might do this?": "¿Ha estado pensando en cómo podría hacerlo?",
    "Have you had these thoughts and had some intention of acting on them?": "¿Ha tenido estos pensamientos y tuvo alguna intención de actuar según ellos?",
    "Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?": "¿Ha empezado a elaborar o ha elaborado los detalles de cómo suicidarse? ¿Tiene la intención de llevar a cabo este plan?",
    "Have you done anything, started to do anything, or prepared to do anything to end your life?": "¿Alguna vez ha hecho algo, comenzado a hacer algo o se ha preparado para hacer algo con el fin de acabar con su vida?",

    // ═══════════════════════════════════════
    // ASRS QUESTIONS
    // ═══════════════════════════════════════
    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?": "¿Con qué frecuencia tiene dificultad para terminar los detalles finales de un proyecto una vez que ha terminado las partes más difíciles?",
    "How often do you have difficulty getting things in order when you have to do a task that requires organization?": "¿Con qué frecuencia tiene dificultad para organizar las cosas cuando tiene que hacer algo que requiere de organización?",
    "How often do you have problems remembering appointments or obligations?": "¿Con qué frecuencia tiene problemas para recordar citas u obligaciones?",
    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?": "Cuando tiene que realizar una tarea que requiere concentrarse o pensar mucho, ¿con qué frecuencia la evita o la retrasa?",
    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?": "¿Con qué frecuencia mueve las manos o los pies inquieta o nerviosamente cuando tiene que permanecer sentado/a durante mucho tiempo?",
    "How often do you feel overly active and compelled to do things, like you were driven by a motor?": "¿Con qué frecuencia se siente excesivamente activo/a y con la necesidad de hacer cosas, como si un motor lo/la impulsara?"
};
