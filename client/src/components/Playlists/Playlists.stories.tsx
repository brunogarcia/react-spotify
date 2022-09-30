import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Playlists } from '../index';
import { mockPlaylists } from "../../mocks";
import { SpotifyPlaylist } from '../../types/spotify.model';

const playlists: SpotifyPlaylist[] = mockPlaylists();

export default {
  title: 'Organism/Playlists',
  component: Playlists,
  decorators: [withRouter],
} as ComponentMeta<typeof Playlists>;

const Template: ComponentStory<typeof Playlists> = (args) => <Playlists {...args} />;

export const Main = Template.bind({});
Main.args = {
  playlists,
};
