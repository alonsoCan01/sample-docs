---
sidebar_position: 2
---

# Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

    <html>
        <head>Hello World!</head>
    </html>

## Fenced Code Blocks

The basic Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. Depending on your Markdown processor or editor, you’ll use three backticks (```) or three tildes (~~~) on the lines before and after the code block. The best part? You don’t have to indent any lines!

    ```
    {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
    }
    ```

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add color highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

    ```json
    {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
    }
    ```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
