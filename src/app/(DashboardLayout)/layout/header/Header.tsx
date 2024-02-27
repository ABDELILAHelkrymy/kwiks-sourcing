import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Container, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import Image from 'next/image';
import HomeIcon from 'public/images/icons-svg/home.svg';
import MissionIcon from 'public/images/icons-svg/mission.svg';
import TalentsIcon from 'public/images/icons-svg/talents-market.svg';
import ResourcesIcon from 'public/images/icons-svg/resources.svg';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import Notification from 'public/images/icons-svg/notification.svg';
import Messages from 'public/images/icons-svg/messages.svg';
import Settings from 'public/images/icons-svg/settings.svg';

// components
import Profile from './Profile';
import { IconMenu2 } from '@tabler/icons-react';
import { colors } from '@/utils/theme/colors';

const pages = [
  {
    href: '/',
    title: 'Home',
    icon: <HomeIcon />
  },
  {
    href: 'my-missions',
    title: 'My missions',
    icon: <MissionIcon />
  },
  {
    href: 'talents-marketplace',
    title: 'Talents marketplace',
    icon: <TalentsIcon />
  },
  {
    href: 'resources',
    title: 'Resources',
    icon: <ResourcesIcon />
  }
]

const Header = () => {

  const menuId = 'primary-search-account-menu';

  return (
    <AppBar position="sticky" color="secondary" className='container'>
      <Container maxWidth='xl'>
        <Box display="flex" flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Toolbar
            style={{
              paddingLeft: '0px',
              paddingRight: '0px',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="menu"
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  xs: "inline",
                },
              }}
            >
              <IconMenu2 width="20" height="20" />
            </IconButton>

            <Box>
              <Logo color={colors.brand[500]} />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button key={page.title} startIcon={page.icon} variant='outlined' color='primary'>{page.title}</Button>
              ))}
            </Box>
            <Stack spacing={1} direction="row" alignItems="center">
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={2} color="error">
                    <Notification />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={1} color="error">
                  <Messages />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Settings />
                </IconButton>
              </Box>
              <Profile />
            </Stack>

          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
