import Link from "next/link";

export default function Home () {
  return (
    <main>
      <p><Link href='/'>Back to home</Link></p>
      <h1>Embed</h1>
      <p>Below this line you should see the embed.</p>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" >document.write('<script src="http' + ( ("https:" == document.location.protocol) ? "s" : "") + '://survey.alchemer.com/s3/6081502/Quiz-Are-You-at-Risk-for-COVID-19?__no_style=true&__output=embedjs&__ref=' + escape(document.location.href) + '" type="text/javascript" ></scr' + 'ipt>');</script><noscript>Alchemer - <a href="https://www.alchemer.com/">survey software</a> for data driven teams. <a href="https://survey.alchemer.com/s3/6081502/Quiz-Are-You-at-Risk-for-COVID-19?__no_style=true&?jsfallback=true">Please take my survey now</a></noscript><style>.sg-survey{display:none; }</style>` }} />
      <hr />
      <p>If you do not see an embed above the page didn't work. Feel free to refresh to see it work.</p>

    </main>
  )
}