export class Question {
    question: string;
    answers: string[];

    private constructor() { }

    static fromDto(dto) {
        let question = new Question();

        question.question = dto.question;
        question.answers = dto.responses.concat(new Array(Math.max(dto.responses.length, 8) - dto.responses.length));

        return question;
    }

    static empty() {
        return new Question();
    }
}