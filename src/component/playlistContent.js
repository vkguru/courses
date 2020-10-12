import React from 'react';
import Playlist from '../component/playlist';
import IntroPlaylist from './playlistContent/intro-playlist';
import LessonOne from './playlistContent/lessonOne';
import LessonTwo from './playlistContent/lessonTwo';
import LessonThree from './playlistContent/lessonThree';
import Conclusion from './playlistContent/conclusion';

export default function PlaylistContent() {
  return (
    <div>
      <div>
        <Playlist
          title="Introduction"
          content= { <IntroPlaylist /> }
        />
        <Playlist
          title="Step 1: Building and planning"
          content= { <LessonOne /> }
        />
        <Playlist
          title="Step 2: Testing and Learning"
          content= { <LessonTwo /> }
        />

        <Playlist
          title="Step 3: Iterating and Improving"
          content= { <LessonThree /> }
        />

        <Playlist
          title="Conclusion"
          content= { <Conclusion /> }
        />
      </div>
    </div>
  )
}
