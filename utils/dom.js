export const $ = (selector, context = document) => (
    context.querySelectorAll(selector)
)

export const $$ = (selector, context = document) => (
    context.querySelectorAll(selector)
)