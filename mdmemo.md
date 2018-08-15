*sectionとarticleとdiv*
---------------------------------------
ログ記事やコメントのように、独立して意味をなすものには`<article>`。  
そうでない場合で、見出しとコンテンツをまとめられるなら`<section>`。  
上記に該当しないけど、囲う必要がある場合は`<div>`。

```html
<div>位置をどうにかしたい
<section>whatis-This.js
    見出し
    <article>独立したコンテンツA</article>
    <article>独立したコンテンツB</article>
</section>
<section>
    見出し
    <article>独立したコンテンツC</article>
    <article>独立したコンテンツD</article>
</section>
</div>
```

*main*
---------------------------------------
__メインってなんやねん__  

・主要なコンテンツ  
A,B,Cって要素があってAがメイン  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Graduation Ceremony Summer 2022</title>
  </head>
  <body>
    <header>The Lawson Academy:
      <!-- 省略 -->
    </header>

    <main>
      <h1>おいらA</h1>
      <!-- 省略 -->
    </main>
    <section>
        おいらB
        <article>登山</article>
    </section>

    <section>
        おいらC
        <article>キャンプ</article>
    </section>

    <footer> Copyright 2012 B.lawson</footer>
  </body>
</html>
```
使い方あってる？


*aside*
---------------------------------------
サイドバーとかコールアウトボックス  
関連リンク  
余談  
```html
<p>
    文字数文字数文字数文字数
    <aside>ひらがなでもええんやで</aside>
</p>
```



*こんな感じ？*
---------------------------------------
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- meta -->
  </head>
  <body>

    <header>
      <h1>タイトル</h1>
      <nav>
        <ul>
          <li><a>リンク1</a></li>
          <li><a>リンク2</a></li>
          <li><a>リンク3</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <h2>見出し1</h2>
        <p>吾輩は猫である。名前はまだ無い。</p>
        <section>
          <h3>見出し2</h3>
          <p>どこで生れたかとんと見当がつかぬ。</p>
        </section>
      </article>
      <aside>
        <h2>関連リンク</h2>
        <ul>
          <li><a>リンク1</a></li>
          <li><a>リンク2</a></li>
          <li><a>リンク3</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <p><small>©Copyright</small></p>
    </footer>

  </body>
</html>
```
