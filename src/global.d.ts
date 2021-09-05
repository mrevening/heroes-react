  interface Scenario{
    id: Number;
    name: String;
    size: String;
    difficulty: String;
    description: String;
    opponents: Array<Opponent>;
  }

  interface Fraction{
    id: Number;
    name: String;
    text: String;
    path: string;
  }

  interface Opponent{
    fractionId: Number,
    color: String,
    human: Boolean | undefined
    blocked: Boolean | undefined
    classBlocked: Boolean | undefined
  }
  
  interface ScenarioSettings {
    settings: {
      id: Number,
      name: String,
      size : String,
      difficulty: String,
      description: String,
      opponents: Array<Opponents>
    }
  }