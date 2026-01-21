# Contributing

הכנסת שינויים לפרויקט

- צרו ענף חדש לכל תכונה או תיקון: `git checkout -b feat/my-change`
- בצעו שינויים, הריצו בדיקות ובנו מקומית לפני פתיחת PR.

בדיקות והרצה מקומית

1. התקנת חבילות:

```powershell
npm install
```

2. הרצת שרת פיתוח:

```powershell
npm run dev
```

3. הרצת בדיקות (Vitest):

```powershell
npm run test
# או להרצה מלאה עם coverage
npm run test:run
```

4. בנייה לייצור:

```powershell
npm run build
```

כללי PR ו־CI

- פתחו Pull Request לענף `master` כאשר השינויים מוכנים.
- בקשו לפחות מבקר אחד (review) לפני מיזוג.
- בקשו שה־CI יעבור (TypeScript + Vitest) לפני המיזוג — ניתן להפעיל זאת ב־Settings → Branches → Branch protection rules.

המלצות ל־Branch Protection (להגדרת מנהלי הריפו)

- דרשו סטטוס checks עבור ה־workflow `CI` (הרצת `tsc` ו־Vitest).
- דרשו לפחות 1 reviewer לפני מיזוג.
- אפשר לאפשר `Require linear history` ו-`Dismiss stale pull request approvals when new commits are pushed`.

ארטיפקטים ודוחות

- ה־CI מעלה כעת את תיקיית `coverage/` ואת `reports/` (דו"חות a11y) כארטיפקטים — הורידו אותם מ־Actions אם תרצו לבדוק דוחות מפורטים.

אם יש שאלות או תרצו שאגדיר כללים נוספים — תגידו מה להוסיף ואעשה את זה.
