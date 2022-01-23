import React from 'react'
import './main.css'
export default function Main() {
  return (
    <div className='main-content'>
      <h1>Hi! I'm Anand.</h1>
      <span>(🐘nd)</span>
      <p>I'm a web developer from Kerala, India.</p>
      <h2>About Me</h2>
      <p>
        I'm passionate about using technology to make life easier for you, me
        and for the rest of the world! Besides being a technology enthusiast I
        love taking a walk in the park and birdwatching.
      </p>
      <h2>Projects</h2>
      <p>
        Here are some of my personal projects that I built when I was learning
        web development.
      </p>
      <ul>
        <li>
          <details>
            <summary>
              <strong>JSBox</strong> -{' '}
              <span>
                A simple sandbox environment to try out any JavaScript library
                on your browser.
              </span>
            </summary>
            <section>
              <p>
                <strong>Technologies used:</strong>
                <span> React, TypeScript, ESBuild, WebAssembly</span>
                <p>
                  JSBox allow you to write code in your browser and execute it
                  right away! Code is bundled using ESBuild WebAssembly binary
                  and run in a secure sandbox. Output will be rendered onto the
                  browser itself.
                </p>
              </p>
            </section>
          </details>
          <p>
            <span className='project-link'>
              <a href='/'> GitHub </a>
            </span>
            <span className='project-link'>
              <a href='/'> Live Demo</a>
            </span>
          </p>
        </li>
        <li>
          <details>
            <summary>
              <strong>Bookswap</strong> -{' '}
              <span>
                A web application to swap books with people in your area.
              </span>
            </summary>
            <section>
              <p>
                <strong>Technologies used:</strong>
                <span> React, TypeScript, Redux, Node, Express</span>
                <p>
                  A single page application that lets you post book requests and
                  trades. Users can select a region to discover the posts from /
                  post theirs to.
                </p>
              </p>
            </section>
          </details>
          <p>
            <span className='project-link'>
              <a href='/'>GitHub</a>
            </span>
            <span className='project-link'>
              <a href='/'> Live Demo</a>
            </span>
          </p>
        </li>
      </ul>
      <p>
        There are a lot more mini projects that I built along the way but I only
        chose my favourites.
      </p>
      <h2>Career</h2>
      <p>
        Currently I work full time as a front-end engineer for Qburst
        technologies, where I build specialised software for clients all around
        the world!
      </p>
      <h2>Resume</h2>
      <p>
        <a href='/'>Here</a> lies my resume for yor reference, it includes more
        serious projects that I have been part of during my career.
      </p>
      <h2>Say Hi!</h2>
      <p>
        If you reached this point, we might get along really well. Drop me a
        message at <i>pcajanand[at]gmail[dot]com</i>
      </p>
    </div>
  )
}
