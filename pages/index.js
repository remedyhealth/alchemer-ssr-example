import Link from "next/link";

export default function Home () {
  return (
    <main>
      <h1>Basic alchemer example</h1>
      <p>This is meant to show the issue with server-side rendering vs client-side rendering with alchemer.</p>

      <p>Going to <Link href='/test'>this</Link> page from where you are currently at will cause the page to render WITHOUT the form embedded. Refresh the page and it will work just fine.</p>
    </main>
  )
}