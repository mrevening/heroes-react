  interface IScenario{
    id: Number;
    name: String;
    size: String;
    difficulty: String;
    description: String;
    opponents: Array<IOpponent>;
  }

  interface IFraction{
    id: Number;
    name: String;
    text: String;
    path: string;
  }

  interface IOpponent{
    fractionId: Number,
    color: String,
    human: Boolean | undefined
    blocked: Boolean | undefined
    classBlocked: Boolean | undefined
  }
  
  interface IScenarioSettings {
    settings: {
      id: Number,
      name: String,
      size : String,
      difficulty: String,
      description: String,
      opponents: Array<Opponents>
    }
  }