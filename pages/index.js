import Link from "next/link";

export default function Home () {
  return (
    <main>
      <h1>Basic alchemer example</h1>
      <p>This is meant to show the issue with server-side rendering vs client-side rendering with alchemer.</p>

      <p><Link href='/test'>Client-Render Example</Link>. Renders WITHOUT the form. Refresh the page and it will work just fine.</p>
      <p><a href='/test'>Server-Rendered Example</a>. Renders correctly because we are forcing the browser to be a new document request. This is not ideal for us and our users.</p>
    </main>
  )
}