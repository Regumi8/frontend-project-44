// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // === Стилистические правила (Stilistic) ===
      '@stylistic/indent': ['error', 2],              // отступы — 2 пробела
      '@stylistic/quotes': ['error', 'single'],       // одинарные кавычки
      '@stylistic/semi': ['error', 'never'],          // точка с запятой не нужна
      '@stylistic/comma-dangle': ['error', 'always-multiline'], // висящие запятые в многострочных объектах
      '@stylistic/space-before-function-paren': ['error', 'never'], // без пробела перед скобками функции
      '@stylistic/no-trailing-spaces': 'error',       // нет пробелов в конце строк
      '@stylistic/eol-last': ['error', 'always'],     // пустая строка в конце файла
      '@stylistic/arrow-parens': ['error', 'always'], // скобки у стрелочных функций
      '@stylistic/brace-style': ['error', '1tbs'],    // стиль скобок
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

      // === Базовые правила ESLint ===
      'no-console': 'off',        // console.log разрешён (для учебного проекта)
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // неиспользуемые переменные — ошибка (кроме _)
    },
  },
]
