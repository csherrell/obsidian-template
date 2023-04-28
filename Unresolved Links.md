Files with links to uncreated files.
```dataview
TABLE out AS "Uncreated files" FLATTEN file.outlinks as out WHERE !(out.file) AND !contains(meta(out).path, ".") SORT file.name ASC
```
