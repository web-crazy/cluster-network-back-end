const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));

const deviceDetails = {
  ticketNumber: '37373632',
  irFlowTriggered: false,
  issueFrequency: '2 times in 24 hours',
  bootcampTriggered: true,
  changesIn24Hrs: 'Wired port changed to 13 from 18',
  pointOfFailure: 'No signal from port 13'
};

app.get('/api/device', (request, response) => {
  setTimeout(() => {
    response.json(deviceDetails);
  }, 3000);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
