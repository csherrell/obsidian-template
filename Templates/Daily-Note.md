---
tags:
  - DailyNotes
---

created: <% tp.file.creation_date() %>
<< [[Journal/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD - dddd').subtract(1, 'd').format('YYYY-MM-DD - dddd') %>|Yesterday]] | [[Journal/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD - dddd').add(1, 'd').format('YYYY-MM-DD - dddd') %>|Tomorrow]] >>
<% tp.file.rename(tp.date.now('YYYY-MM-DD - dddd')) %>

## Daily Practices

- [ ] Clean House
- [ ] Workout
- [ ] Wrote Code
- [ ] Yoga
- [ ] Daily Readings
- [ ] Meditation
- [ ] Journal
- [ ] Duolingo Spanish Lesson
- [ ] Did Not Watch TV

## 2024 Goals

- [ ] Health: Blood Sugar
- [ ] Health: Drink 1 Gallon of Water
- [ ] Art: Calligraphy
- [ ] Music: Didgeridoo
- [ ] Music: Harmonica
- [ ] Sports: Slingshot Practice

## 75 Hard Challenge Checklist

- [ ] Follow a Diet
- [ ] No Alcohol or Cheat Meals
- [ ] Indoor Workout - 45 mins
- [ ] Outdoor Workout - 45 mins
- [ ] Drink 1 Gallon of Water
- [ ] Take a Progress Picture
- [ ] Read 10 Pages

## Inspirational Quotes

## Bible Quotes

## Daily Readings

### Read the Bible in a Year

#### 1

#### 2

### The Daily Stoic

#### Title

### The Daily Dad

#### Title

## Journey Within Journaling Questions

1. What is my intention for today?
2. The most significant event today was? Why?
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
