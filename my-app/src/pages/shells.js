import React from "react"
import "../scss/main.scss"

const Shellspage = () => (
  <div className="contentBox">
    <div className="content">
      <h1 className="title is-1">Shell projects</h1>
      <p>
        The final projects of the Unix-branch in Hive Helsinki are the
        shell projects. In our project, I have made the parser, and I 
        will try to explain the inner workings of our parser here.
      </p>
      <p>
        Since we are not allowed to use only very few ready made libraries, 
        making the parser seemed like an endless jungle of if-else statements. 
        Since we wanted to implement a solution that was able to handle all the
        shell grammar, I ended up studying the topic and decided that after
        tokenization I will change the infix notation of shell commands into 
        postfix notation using the shunting yard algorithm, and build an AST-tree 
        tree from there. The AST-tree is then traversed to handle all the operands 
        so that in the end, we were able to divide the command into series of simple 
        commands that are automatically executed in the right order after the precedence 
        handling done in the shunting yard.
      </p>
      <p>
        Let's take a look at the workings of the with one pretty simple command:
      </p>
      <div className="exampleBox"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><p className="typewriter">echo hello world > file ; cat file</p></div>
      <p>First the command is divided into simple tokens</p>
      <div className="exampleBoxL"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><div className="first-tokenization">
        <div className="token-box"><p className="word">echo</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">hello</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">world</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box-big"><p className="word">></p><p className="token">redirection operator</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">operator</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">;</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">cat</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">word</p></div>
      </div></div>
      <p>Next the tokens are handled more in detail, and all operator are given their final token. Also in case of
        redirections, the destination of redirection is added as a subtoken to the main redirection token.
      </p>
      <div className="exampleBoxL"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><div className="first-tokenization">
        <div className="token-box"><p className="word">echo</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">hello</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">world</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">></p><p className="token">great</p><p className="redirection-to">file</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">;</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">cat</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">word</p></div>
      </div></div>
      <p>Since the algorithms used in making the binary tree are made for mathematical notations, there is a problem with
        multiple words one after another without any binding operator. In matemathics, you can assume that if there is no 
        operator, the numbers are going to be multiplied. In our case, the problem was solved by adding a "null" token between
        two words with no operator between them to help bind them together.
      </p>
      <div className="exampleBoxL"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><div className="first-tokenization">
        <div className="token-box"><p className="word">echo</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">hello</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">world</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">></p><p className="token">great</p><p className="redirection-to">file</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">;</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">cat</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">word</p></div>
      </div></div>
      <p>The mathematical notation has a precedence for the operations, that tells you in what order the
        operations are supposed to be calculated. Also shell operations have a precedence, and in next step
        the precedence of each operator is added. Since words are not considered operations, no precedence
        is added to them.
      </p>
      <div className="exampleBoxXL"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><div className="first-tokenization">
        <div className="token-box"><p className="word">echo</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p><p className="precedence">5</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">hello</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p><p className="precedence">5</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">world</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">></p><p className="token">great</p><p className="precedence">4</p><p className="redirection-to">file</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">;</p><p className="token">word</p><p className="precedence">1</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">cat</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p><p className="precedence">5</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">word</p></div>
      </div></div>
      <p>Next step is to change the infix notation (that is, the operations are in the middle of the "values" = words)
        to postfix notation (the operations are after the values = words). I decided to use the shunting yard algorithm 
        for this. You can read more about shunting yard algorithm in the <a href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm">Wikipedia page</a>
      </p>
    </div>
  </div>
);

export default Shellspage;
