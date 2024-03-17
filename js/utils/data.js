const regWorkTime = {
    start: '08:00',
    end: '17:00'
};

const specWorkTime = [
    {
        start: '00:00',
        end: '08:00'
    },
    {
        start: '08:00',
        end: '17:00'
    },
    {
        start: '17:00',
        end: '00:00'
    }
];

export const jobs = [
    {
        jobName: 'Software Engineer',
        jobDescription: 'Programmieren und Wartung von Software',
        workTime: regWorkTime
    },
    {
        jobName: 'Polizist',
        jobDescription: 'Ist bestrebt, dass die Gesetze eingehalten werden.',
        workTime: specWorkTime
    },
    {
        jobName: 'Arzt',
        jobDescription: 'Kümmert sich um die Gesundheit seiner Patienten.',
        workTime: specWorkTime
    },
    {
        jobName: 'Elektriker',
        jobDescription: 'Zuständig für die Elektrizität.',
        workTime: regWorkTime
    },
    {
        jobName: 'Anwalt',
        jobDescription: 'Vertritt seine Klienten vor dem Gesetz.',
        workTime: regWorkTime
    },
    {
        jobName: 'Reinigungskraft',
        jobDescription: 'Verantwortlich für verschiedene Reinigungsarbeiten.',
        workTime: regWorkTime
    },
    {
        jobName: 'Banker',
        jobDescription: 'Ist für die Finanzen seiner Kunden zuständig.',
        workTime: regWorkTime
    },
    {
        jobName: 'Kellner',
        jobDescription: 'Serviert in Restaurants den Gästen das Essen und die Getränke.',
        workTime: specWorkTime
    }

];