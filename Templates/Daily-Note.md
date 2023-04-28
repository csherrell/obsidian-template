---
tags:
  - DailyNotes
---
created: <% tp.file.creation_date() %>
<< [[Journal/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD - dddd').subtract(1, 'd').format('YYYY-MM-DD - dddd') %>|Yesterday]] | [[Journal/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD - dddd').add(1, 'd').format('YYYY-MM-DD - dddd') %>|Tomorrow]] >>
<% tp.file.rename(tp.date.now('YYYY-MM-DD - dddd')) %>

## Daily Practices
- [ ] Workout
- [ ] Wrote Code
- [ ] Yoga
- [ ] Reading
- [ ] Meditation
- [ ] Journal
- [ ] Duolingo Spanish Lesson
- [ ] Did Not Watch TV

## Quote

## Bible Quotes

## Journey Within Journaling Questions
1. What is my intention for today?
2. The most significant event today was?  Why?
3. Where I found myself in resistance today way?
4. In this resistance what I learned about myself was?
5. What I surrendered today?

---
# 📝 Notes
<% tp.file.cursor() %>

---
### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```
