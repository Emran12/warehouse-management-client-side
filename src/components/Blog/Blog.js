import React from "react";
import jwtImg from "./jwt.PNG";

const Blog = () => {
  return (
    <div className="container mt-5">
      <h1 className="fs-2 text-info">Differences between JS vs NODE JS</h1>
      <p>
        <ol>
          <li>
            JavaScript is a simple programming language which runs in any
            browser JavaScript Engine. Whereas Node JS is an interpreter or
            running environment for a JavaScript programming language which
            holds a lot of excesses require libraries which can easily be
            accessed from JavaScript programming for better use.
          </li>
          <li>
            JavaScript is normally used for any client-side activity for one web
            application. Activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used on a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            create or executing shell script, or getting some specific hardware
            related information on one call or installed certificate details in
            the system or lot of define task which are non-blocking on an
            operating system
          </li>
          <li>
            JavaScript is normally following Java Programming language standard.
            There may have some different way of writing code but at the same
            time, we can say it following Java Programming language standard.
            Whereas node JS is written in C++, and provide V8 engine base
            browser javascript running engine which helps us to run written
            javascript program in any browser environment.
          </li>
          <li>
            For accessing any operating system specific non-blocking task
            JavaScript has some specific object but all of them are operating
            system specific. An example is ActiveX Control which is only running
            in Windows. But Node JS is given utility to run some operating
            system specific non-blocking tasks from any JavaScript programming.
            It doesn’t have any operating system specific constant. Node JS is
            very much familiar to create a specific binding with the file
            system, and also allowing developer for reading or sometimes write
            on disk.
          </li>
        </ol>
      </p>
      <h1 className="fs-2 text-info">
        When should we use NodeJS and when should we use MongoDB?
      </h1>
      <p>
        NodeJS is a JavaScript runtime environment. It's actually helps
        JavaScript to run outside of server. It's used in server side
        development. <br></br>
        Any project needs a programming environment and a runtime library that
        offers you basic programming tools/support and can compile and/or
        interpret your code. Nodejs is such as tool for the Javascript
        programming language. There are other similar tools for other languages
        such as Python, Java, PHP, C#, C++, Go, etc... So, if you want to write
        some kind of stand-alone program or server in Javascript, then you can
        use nodejs for it
      </p>
      <p>
        MongoDB is NoSQL database which is document oriented. It represents data
        as of JSON documents. It's used for store data. Summary The summary is
        MongoDB is a database where we can store data and NodeJS helps us to to
        connect our client site to database by it's server site.<br></br>
        If your application needs the ability to persistently store data in a
        way that you can efficiently query or update it later, then you would
        typically use some form of database. There are dozens of popular
        databases. MongoDB is one such database. MariaDB, MySql, CouchDB,
        DynamoDB (on AWS), Postgres are examples of other databases. Different
        databases have different strengths (things they are best at) and
        different ways of using them so it's a whole different question to
        choose the right/best database for what you're doing.
      </p>
      <h1 className="fs-2 text-info">
        Differences between sql and nosql databases.
      </h1>
      <p>
        NoSQL databases typically have very flexible schemas. A flexible schema
        allows you to easily make changes to your database as requirements
        change. You can iterate quickly and continuously integrate new
        application features to provide value to your users faster.On the other
        hadn, SQL databases have fixed or static or predefined schema.
      </p>
      <p>
        NoSQL databases allow you to scale-out horizontally, meaning you can add
        cheaper, commodity servers whenever you need to.Conversely,Most SQL
        databases require you to scale-up vertically (migrate to a larger, more
        expensive server) when you exceed the capacity requirements of your
        current server.
      </p>
      <p>
        NoSQL databases is typically stored in a way that is optimized for
        queries. The rule of thumb when you use MongoDB is Data that is accessed
        together should be stored together. Queries typically do not require
        joins, so the queries are very fast.However, Data in SQL databases is
        typically normalized, so queries for a single object or entity require
        you to join data from multiple tables. As your tables grow in size, the
        joins can become expensive.
      </p>
      <p>
        NoSQL databases follows CAP(consistency, availability, partition
        tolerance).Contrarily SQL database follows ACID property.
      </p>
      <h2 className="text-info">
        What is the purpose of JWT and how does it work
      </h2>
      <h3 className="text-info"> The purposes of JWT</h3>
      <p>
        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
        compact and self-contained way for securely transmitting information
        between parties as a JSON object. This information can be verified and
        trusted because it is digitally signed. JWTs can be signed using a
        secret (with the HMAC algorithm) or a public/private key pair using RSA
        or ECDSA.The purpose of using JWT is not to hide data but to ensure the
        authenticity of the data. JWT is signed and encoded, not encrypted. JWT
        is a token based stateless authentication mechanism. Since it is a
        client-side based stateless session, server doesn’t have to completely
        rely on a datastore(database) to save session information.
      </p>
      <h3 className="text-info">How does JWT work</h3>
      <p>
        JSON Web Tokens consist of three parts separated by dots (.), which are:
        Header, Payload, Signature.
        <img src={jwtImg} alt="" />
        <br></br>
        Header: The header typically consists of two parts: the type of the
        token, which is JWT, and the signing algorithm being used, such as HMAC
        SHA256 or RSA.<br></br>
        Payload: The second part of the token is the payload, which contains the
        claims. Claims are statements about an entity (typically, the user) and
        additional data. There are three types of claims: registered, public,
        and private claims. <br></br>
        Signature: To create the signature part you have to take the encoded
        header, the encoded payload, a secret, the algorithm specified in the
        header, and sign tha
      </p>
    </div>
  );
};

export default Blog;
