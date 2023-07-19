# Intercept routes issue

1. Open `localhost:3000` or `localhost:3000/nl``
2. Open "program" (en) / "programma" (nl)

## Trigger issue

Uncomment line 1-6 in the root layout.jsx (enabling generateStaticParams) and delete the .next folder, just to be sure.
Now, it will first try to render the modal (Green box) and instantly redirects to the actual page. (Red box)
