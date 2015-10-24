if (window.location.hostname.endsWith('wanikani.com') &&
    (window.location.pathname.startsWith('/review/session') || window.location.pathname.startsWith('/lesson/session'))) {
    addStyle(
        '#reviews #question #character, #lessons header #main-info #character { font-size: 10vh; line-height: 18vh; padding: 10px 0 0; }' +
        'header #main-info #meaning { padding: 0; }' +
        '#main-info { padding: 10px 0; }' +
        '@media (max-width: 767px) {' +
             '#answer-form { font-size: 1.25em; }' +
             '#summary-button, #header-buttons, #reviews #stats, #lessons #stats { font-size: 14px; }' +
             '#answer-exception { font-size: 1em; }' +
             '#answer-exception.answer-exception-form { top: 2.5em; }' +
        '}'
    )
}