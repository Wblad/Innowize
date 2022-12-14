# FooterPattern

**FooterPattern** - компонент, который возвращает обертку из not-footer и
footer.

```html
<div class="wrapper">
  <div class="not-footer">...</div>
  <div class="footer">...</div>
</div>
```

Принимает два параметра:

- NotFooter: JSX
- Footer: JSX

Пример:

```jsx
<FooterPattern NotFooter={<div>...</div>} Footer={<div>...</div>} />
```
