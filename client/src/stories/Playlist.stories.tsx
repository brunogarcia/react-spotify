import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockPlaylists } from "../mocks/data";
import { Playlist } from '../components';
import { SpotifyPlaylist } from '../types/spotify.model';

const playlist: SpotifyPlaylist = mockPlaylists()[0];

export default {
  title: 'Components/Playlist',
  component: Playlist,
} as ComponentMeta<typeof Playlist>;

const Template: ComponentStory<typeof Playlist> = (args) => <Playlist {...args} />;

export const Main = Template.bind({});
Main.args = {
  loading: false,
  playlist,
};
