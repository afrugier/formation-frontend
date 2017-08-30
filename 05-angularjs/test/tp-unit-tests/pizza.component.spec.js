describe('Suite de tests pour un component', () => {
    beforeEach(() => {
        angular.mock.module('tripApp')
    })
    
    it(`Le contrôleur du component pizCmp récupère la liste des pizzas du servicePizzaService `,
        angular.mock.inject(($componentController) => {
            const pizzaCtrl = $componentController('pizCmp', {
                PizzaService: {
                    findAll: () => [{ name: 'Pépé', price: 15 }]
                }
            })
            expect(pizzaCtrl.pizzas.length).toBe(1)
            expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépé')).toBeDefined()
        }))
})