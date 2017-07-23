export class Question {
    question: string;
    answers: string[];

    private constructor() { }

    static fromDto(dto) {
        let question = new Question();

        question.question = dto.question;
        question.answers = dto.answers;

        return question;
    }

    static empty() {
        return new Question();
    }
}