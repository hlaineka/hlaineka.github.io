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
      <p>First the command is divided into simple tokens, only naming them words, redirection operations and operations.</p>
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
      <p>Next step is to change the infix notation (that is, the operations are in the middle of the "values" = words)
        to postfix notation (the operations are after the values = words). I decided to use the shunting yard algorithm 
        for this. You can read more about shunting yard algorithm in the <a href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm">Wikipedia page</a>.
      </p>
      <div className="exampleBoxL"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div><div className="first-tokenization">
        <div className="token-box"><p className="word">echo</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">hello</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">world</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">></p><p className="token">great</p><p className="redirection-to">file</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">cat</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">file</p><p className="token">word</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="null">.</p><p className="token">null</p></div>
        <div className="token-box"><p className="next">--></p></div>
        <div className="token-box"><p className="word">;</p><p className="token">word</p></div>
      </div></div>
      <p>Now it is time to build the AST-tree (abstract syntax tree). The building is done with the help of a
        first-in-last-out node stack. The list of tokens is read from left to right. First, all the three words, 
        echo, hello and world are made into nodes and added to the stack. The first operation, null, takes two 
        children from the stack, in this case, hello and world. The null node is then placed into the stack. 
      </p>
      <div className="exampleBoxNode"><div className="fake-selector"><div className="fake-close">x</div><div className="app-name">./42sh</div></div>
      <div className="ast-tree">
        <div className="ast-row"><div classname="node"><p className="word">;</p></div></div>
        <div className="ast-row"><div classname="node"><p className="word">></p></div><div classname="node"><p className="word">null</p></div></div>
        <div className="ast-row"><div classname="node"><p className="word">null</p></div><div classname="node"><p className="word">cat</p></div><div classname="node"><p className="word">file</p></div></div>
        <div className="ast-row"><div classname="node"><p className="word">echo</p></div><div classname="node"><p className="word">null</p></div><div classname="node"><p className="word">null</p></div></div>
        <div className="ast-row"><div classname="node"><p className="word">hello</p></div><div classname="node"><p className="word">world</p></div></div>
      </div></div>
    </div>
  </div>
);

export default Shellspage;
