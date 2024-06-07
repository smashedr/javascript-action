[![Tags](https://github.com/smashedr/javascript-action/actions/workflows/tags.yaml/badge.svg)](https://github.com/smashedr/javascript-action/actions/workflows/tags.yaml)
# JavaScript Action Example

JavaScript Action Example.

> [!NOTE]   
> Please submit a [Feature Request](https://github.com/smashedr/javascript-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/smashedr/javascript-action/issues) if you find any bugs.

## Inputs

| input   | required | default       | description              |
|---------|----------|---------------|--------------------------|
| file    | Yes      | manifest.json | JSON File Path           |
| version | No       | -             | Manually Specify Version |

```yaml
  - name: "JavaScript Action"
    uses: smashedr/javascript-action@master
    with:
      token: ${{ secrets.GITHUB_TOKEN }}
      file: manifest.json
      version: 1.0.0
```
