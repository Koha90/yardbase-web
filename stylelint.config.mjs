/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: 'Используй camelCase для локальных CSS Module классов',
      },
    ],

    // В файле дизайн-токенов разрешаем визуальные группы переменных.
    'scss/dollar-variable-empty-line-before': null,

    // CSS использует каноническое написание optimizeLegibility.
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['optimizeLegibility'],
      },
    ],
  },
};
