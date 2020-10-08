import React from 'react';
import Playlist from '../component/playlist'

export default function PlaylistContent() {
  return (
    <div>
      <div>
        <Playlist
          title="Introduction"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              History/About
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Why prototype? Why test?
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Types of Prototypes
            </p>
          "
        />
        <Playlist
          title="Step 1: Building and planning"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Setting goals and determining the right questions
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Think as you build
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Planning for success
            </p>
          "
        />
        <Playlist
          title="Step 2: Testing and Learning"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Identifying the right audience
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Testing to learn (testing the right way)
            </p>
          "
        />

        <Playlist
          title="Step 3: Iterating and Improving"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              How to iterate for a successful outcome
            </p>
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Steps to improving: continuing the cycle
            </p>
          "
        />

        <Playlist
          title="Conclusion"
          content="
            <p>
              <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
              Continuing the cycle to meet long term goals
            </p>
          "
        />
      </div>
    </div>
  )
}
