# Gutenberg Converter
CLI to convert HTML into Gutenberg blocks formatted HTML or JSON.

## Usage
### Using the command line

Outputting a Gutenberg blocks formatted HTML string:

```shell
$ npx gutenberg-converter '<p>Some HTML</p>'
```

Result:

```html
<!-- wp:paragraph -->
<p>Some HTML</p>
<!-- /wp:paragraph -->
```

Outputting a JSON string:

```shell
$ npx gutenber-converter '<p>some html</p>' --json
```

Result:

```json
[
  {
    "clientId": "907a8493-3c91-4983-ae52-ccdce3fa14d8",
    "name": "core/paragraph",
    "isValid": true,
    "attributes": { "content": "Some HTML", "dropCap": false },
    "innerBlocks": []
  }
]
```

### Using in a script
```javascript
const { parse, parseToJSON } = require('gutenberg-converter');

const result = parse(`<p>Some HTML</p>`);

// or, if you want to output a JSON string.
const resultJson = parseToJSON('<p>Some HTML</p>');

```
