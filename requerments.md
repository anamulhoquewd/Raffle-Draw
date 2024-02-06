Simple draw project

#Lottary API

- sell lottary tickets
- update lottary ticekts
- delete lottary tickets
- get all tickets
- get ticket by id
- bulk tickets (user can multiple create ticket in a time)
- reffle draw

TICKET:

- number (uniqe)
- price
- username
- timestamp

ROUTING:

- /t/:ticketId -GET- show single ticket by id.
- /t/:ticketId -PACH- ubdate single ticket by id.
- /t/:ticketId -DELETE- delete single ticket by id.
- /u/:usernaem -GET- show tickets for a given user.
- /u/:username -PACH- ubdate tickets for a given user.
- /u/:username -DELETE- delete tickets for a given user.
- /sell - create ticket.
- /bulk - create bulk tickets.
- /draw - raffle draw.
- / - show all tickets.
