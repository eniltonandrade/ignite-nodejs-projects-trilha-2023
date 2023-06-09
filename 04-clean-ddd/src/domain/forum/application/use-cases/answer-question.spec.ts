import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it('should be able to create an Answer', async () => {
    const { answer } = await sut.execute({
      content: 'Content of answer',
      instructorId: '1',
      questionId: '1',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id)
  })
})
