import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Playlist } from '../index';
import { mockPlaylists } from "../../mocks";
import { SpotifyPlaylist } from '../../types/spotify.model';

const playlist: SpotifyPlaylist = mockPlaylists()[0];

export default {
  title: 'Organism/Playlist',
  component: Playlist,
} as ComponentMeta<typeof Playlist>;

const Template: ComponentStory<typeof Playlist> = (args) => <Playlist {...args} />;

export const Main = Template.bind({});
Main.args = {
  loading: false,
  playlist,
};
