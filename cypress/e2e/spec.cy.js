describe('Home Page', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',{
      status: 201,
      body: [
        {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        },
        {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
        },
        {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
        },
      ]
    })
    cy.visit('http://localhost:3000')});

    it('Should have 4 inputs and a submit button', () => {
      cy.get('.resy-form').find('input').should('have.length', 4)
      cy.get('.resy-form').find('button').should('exist')
    })

    it('Should show 3 reservations', () => {
      cy.get('.resy-container').find('.res-card').should('have.length', 3)
      cy.get('.resy-container').find('.res-card').first().contains('Christie')
      cy.get('.resy-container').find('.res-card').last().contains('Pam')
    })

    it('Inputs should update state as they are entered', () => {
      cy.get('.resy-form').find('#name').type('Banjamin').should('have.value','Banjamin')
      cy.get('.resy-form').find('#date').type('12/8').should('have.value','12/8')
      cy.get('.resy-form').find('#time').type('1:00 pm').should('have.value','1:00 pm')
      cy.get('.resy-form').find('#guests').type('5').should('have.value','5')
    })

    it('Should be able to make a reservation and appear on screen.', () => {
      cy.get('.resy-container').find('.res-card').should('have.length', 3)
      cy.get('.resy-form').find('#name').type('Banjamin').should('have.value','Banjamin')
      cy.get('.resy-form').find('#date').type('12/8').should('have.value','12/8')
      cy.get('.resy-form').find('#time').type('1:00 pm').should('have.value','1:00 pm')
      cy.get('.resy-form').find('#guests').type('5').should('have.value','5')
      cy.get('.resy-form').find('button').click()
      cy.get('.resy-container').find('.res-card').should('have.length', 4)
      cy.get('.resy-container').find('.res-card').first().contains('Christie')
      cy.get('.resy-container').find('.res-card').last().contains('Banjamin')

    })
      

  
  })