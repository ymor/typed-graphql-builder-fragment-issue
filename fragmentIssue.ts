import { $$, Card, fragment, mutation, all } from "./generated-api";
import { ResultOf, VariablesOf } from '@graphql-typed-document-node/core'

const cardFragment = fragment(Card, c => [
    c.id,
    c.Attack,
    c.Defense,
    c.cardImage(x =>[x.key])
  ])


const nonFragmentMutation = mutation(m => [
    m.addCard({
        card: $$('createCard')
    }, _ => cardFragment)
])

type NonFragmentMutationVars = VariablesOf<typeof nonFragmentMutation>
type NonFragmentMutationResult = ResultOf<typeof nonFragmentMutation>


const cardFragmentMutation = mutation(m => [
    m.addCard({
        card: $$('createCard')
    }, _ => cardFragment)
])

type CardFragmentMutationVars = VariablesOf<typeof cardFragmentMutation>
type CardFragmentMutationResult = ResultOf<typeof cardFragmentMutation>


const cardFragmentAll = fragment(Card, all)

const cardFragmentAllMutation = mutation(m => [
    m.addCard({
        card: $$('createCard')
    }, _ => cardFragmentAll)
])

/*
    this is incorrectly typed as 
    
    type CardFragmentAllMutationVars = {
        [x: string]: any;
    }
*/
type CardFragmentAllMutationVars = VariablesOf<typeof cardFragmentAllMutation>
type CardFragmentAllMutationResult = ResultOf<typeof cardFragmentAllMutation>
