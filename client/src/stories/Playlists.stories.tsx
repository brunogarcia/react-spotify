import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockPlaylists } from "../mocks/data";
import { Playlists } from '../components';
import { SpotifyPlaylist } from '../types/spotify.model';

const playlists: SpotifyPlaylist[] = mockPlaylists();

export default {
  title: 'Components/Playlists',
  component: Playlists,
  decorators: [withRouter],
} as ComponentMeta<typeof Playlists>;

const Template: ComponentStory<typeof Playlists> = (args) => <Playlists {...args} />;

export const Main = Template.bind({});
Main.args = {
  playlists,
};
