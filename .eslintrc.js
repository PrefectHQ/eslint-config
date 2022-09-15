module.exports = {
  extends: [
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-essential',
  ],
  rules: {
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    '@typescript-eslint/comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'never', exports: 'never', functions: 'always-multiline' }],
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/func-call-spacing': 'warn',
    '@typescript-eslint/indent': ['warn', 2, { 'SwitchCase': 1 }],
    '@typescript-eslint/keyword-spacing': ['warn', { before: true, after: true }],
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'comma', requireLast: true }, singleline: { delimiter: 'comma', requireLast: false } }],
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-duplicate-imports': 'warn',
    '@typescript-eslint/no-extra-parens': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/semi': ['warn', 'never'],
    '@typescript-eslint/space-before-function-paren': ['warn', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'array-bracket-newline': 'warn',
    'array-bracket-spacing': 'warn',
    'array-callback-return': 'warn',
    'arrow-spacing': 'warn',
    'brace-style': ['warn', '1tbs'],
    'camelcase': 'warn',
    'comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'never', exports: 'never', functions: 'never' }],
    'comma-spacing': 'warn',
    'curly': 'warn',
    'default-case-last': 'warn',
    'default-case': 'warn',
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'func-call-spacing': 'warn',
    'id-length': ['warn', { exceptions: ['x', 'i'] }],
    'implicit-arrow-linebreak': 'warn',
    'import/no-unresolved': 'warn',
    'import/order': ['warn', { 'alphabetize': { 'order': 'asc', 'caseInsensitive': true } }],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['warn', { afterColon: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'line-comment-position': ['warn', { position: 'above' }],
    'max-classes-per-file': 'warn',
    'max-params': 'warn',
    'no-alert': 'error',
    'no-await-in-loop': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-constructor-return': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'warn',
    'no-extra-parens': 'warn',
    'no-lonely-if': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'error',
    'no-self-compare': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-private-class-members': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-return': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { 'allowAllPropertiesOnSameLine': true }],
    'one-var-declaration-per-line': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'require-await': 'warn',
    'rest-spread-spacing': 'warn',
    'semi-spacing': 'warn',
    'semi-style': ['warn', 'last'],
    'semi': ['warn', 'never'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
    'space-in-parens': 'warn',
    'spaced-comment': ["warn", "always", { "markers": ["/"] }],
    'switch-colon-spacing': 'warn',
    'vue/array-bracket-newline': 'warn',
    'vue/array-bracket-spacing': 'warn',
    'vue/arrow-spacing': 'warn',
    'vue/attribute-hyphenation': 'warn',
    'vue/attributes-order': 'warn',
    'vue/block-lang': ['warn', { script: { lang: "ts" }, style: { lang: ["scss", "css"] } }],
    'vue/block-tag-newline': 'warn',
    'vue/brace-style': ['warn', '1tbs'],
    'vue/camelcase': 'warn',
    'vue/comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'never', exports: 'never', functions: 'never' }],
    'vue/comma-spacing': 'warn',
    'vue/component-definition-name-casing': 'warn',
    'vue/component-name-in-template-casing': 'warn',
    'vue/component-options-name-casing': 'warn',
    'vue/component-tags-order': ['warn', { order: ['template', 'script', 'style'] }],
    'vue/custom-event-name-casing': 'warn',
    'vue/dot-location': ['warn', 'property'],
    'vue/dot-notation': 'warn',
    'vue/first-attribute-linebreak': 'warn',
    'vue/func-call-spacing': 'warn',
    'vue/html-button-has-type': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/key-spacing': ['warn', { afterColon: true }],
    'vue/keyword-spacing': ['warn', { before: true, after: true }],
    'vue/match-component-file-name': 'warn',
    'vue/max-attributes-per-line': ['warn', { singleline: { max: 5 }, multiline: { max: 1 } }],
    'vue/multi-word-component-names': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/new-line-between-multi-line-property': 'warn',
    'vue/next-tick-style': 'warn',
    'vue/no-boolean-default': 'warn',
    'vue/no-child-content': 'warn',
    'vue/no-duplicate-attr-inheritance': 'warn',
    'vue/no-empty-component-block': 'warn',
    'vue/no-expose-after-await': 'warn',
    'vue/no-extra-parens': 'warn',
    'vue/no-invalid-model-keys': 'warn',
    'vue/no-lone-template': 'warn',
    'vue/no-multi-spaces': 'warn',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-multiple-slot-args': 'warn',
    'vue/no-potential-component-option-typo': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/no-this-in-before-route-enter': 'warn',
    'vue/no-undef-properties': 'warn',
    'vue/no-unused-properties': 'warn',
    'vue/no-unused-refs': 'warn',
    'vue/no-use-computed-property-like-method': 'warn',
    'vue/no-useless-concat': 'warn',
    'vue/no-useless-mustaches': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/no-v-html': 'warn',
    'vue/no-v-text': 'warn',
    'vue/object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['warn', 'always'],
    'vue/object-property-newline': ['warn', { 'allowAllPropertiesOnSameLine': true }],
    'vue/one-component-per-file': 'warn',
    'vue/order-in-components': 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-template': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-direct-export': 'warn',
    'vue/require-explicit-emits': 'warn',
    'vue/require-expose': 'warn',
    'vue/require-name-property': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/script-indent': ['warn', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/space-in-parens': 'warn',
    'vue/this-in-template': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-event-hyphenation': 'warn',
    'vue/v-on-function-call': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'warn',
    'yoda': 'warn',
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off',
        'array-bracket-spacing': 'off',
        'arrow-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'camelcase': 'off',
        'comma-spacing': 'off',
        'indent': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'no-extra-parens': 'off',
        'no-multi-spaces': 'off',
        'no-useless-concat': 'off',
        'no-unused-vars': 'off',
        'func-call-spacing': 'off'
      }
    },
    {
      files: ['**/*.ts'],
      rules: {
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'indent': 'off',
        'keyword-spacing': 'off',
        'no-unused-vars': 'off',
        'space-before-function-paren': 'off',
        'no-duplicate-imports': 'off',
        'no-extra-parens': 'off',
        'no-unused-expressions': 'off',
        'no-useless-constructor': 'off',
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'func-call-spacing': 'off'
      }
    }
  ]
}
