describe('Suite de tests pour un contrôleur', () => {
    // code qui va s'exécuter avant chaque test
    beforeEach(() => {
        angular.mock.module('tripApp')
    })
    // cas de test
    // angular.mock.inject permet d'injecter des dépendances
    // les services sont directement injectables
    it(`A l'initialisation le contrôleur PizzaCtrl possède une liste de pizzas `,
        angular.mock.inject(($controller) => {

            // injection de dépendance
            // l'instance est récupérée à partir de son nom
            const pizzaCtrl = $controller('PizzaCtrl')

            expect(pizzaCtrl.pizzas).toBeDefined();
            expect(pizzaCtrl.pizzas.length).toBe(2);
            //2 facons de faire pour trouve un élément
            expect(pizzaCtrl.pizzas).toContain(jasmine.objectContaining({ name: "Pépéroni" }));
            expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined()
        }))

    it(`$controller avec modification du service`, angular.mock.inject(($controller) => {
        // modification du service PizzaService pour qu'il retourne des données différentes
        const pizzaCtrl = $controller('PizzaCtrl', {
            PizzaService: {
                findAll: () => [{ name: 'Pépéroni', price: 12 }, {
                    name: 'Oriental',
                    price: 15
                }, { name: 'Saumon', price: 20 }]
            }
        })
        expect(pizzaCtrl.pizzas.length).toBe(3)
        expect(pizzaCtrl.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined()
    }))

    it(`$controller avec modification des propriétés`, angular.mock.inject
        (($controller) => {
            const pizzaCtrl = $controller('PizzaCtrl',
                /* pas de modification des dépendances */
                {},
                /* propriétés du contrôleur à l'initialisation */
                { nomPizzeria: 'La Super Pizzéria' })

            expect(pizzaCtrl.nomPizzeria).toEqual('La Super Pizzéria')
            expect(pizzaCtrl.pizzas.length).toBe(2)
        }))

    it(`le service PizzaService initialise une liste de pizzas`,
        angular.mock.inject(PizzaService => {

            expect(PizzaService.pizzas).toBeDefined();
            expect(PizzaService.pizzas.length).toBe(2);
            expect(PizzaService.pizzas.find(p => p.name === 'Pépéroni')).toBeDefined()
        }))
})