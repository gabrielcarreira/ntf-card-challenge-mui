import { Box, Paper, Typography, Stack, Divider, Avatar } from '@mui/material'

export default function PreviewCard() {
  return (
    <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          width: 360,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            width: 310,
            height: 310,
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: '#00f4f3'
          }}
        >
          <Box
            sx={{
              transition: '200ms',
              cursor: 'pointer',
              ':hover': { opacity: 0.4 }
            }}
          >
            <img alt="nft" src="images/image-equilibrium.jpg" width="100%" />
          </Box>
        </Box>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mt: 3,
            transition: '500ms',
            cursor: 'pointer',
            ':hover': { color: 'primary.main' }
          }}
        >
          Equilibrium #3429
        </Typography>
        <Typography variant="body" sx={{ my: 2 }} color="secondary">
          Our Equilibrium collection promotes balance and calm.
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img height="16px" src="images/icon-ethereum.svg" />
            <Typography color="primary" fontWeight={600} sx={{ ml: 1 }}>
              0.041 ETH
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img height="18px" src="images/icon-clock.svg" />
            <Typography color="secondary" sx={{ ml: 1 }} variant="subtitle2">
              3 days left
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ mt: 3, mb: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            size="small"
            src="images/image-avatar.png"
            sx={{ width: 32, height: 32, bgcolor: 'white', p: 0.1 }}
          />
          <Typography color="secondary" sx={{ ml: 1 }} variant="subtitle2">
            Creation of{' '}
            <Box
              sx={{
                display: 'inline',
                color: 'white',
                transition: '200ms',
                cursor: 'pointer',
                ':hover': { color: 'primary.main' }
              }}
            >
              Jules Wyvern
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
