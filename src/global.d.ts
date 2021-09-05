  interface Scenario{
    id: number;
    name: string;
    size: string;
    difficulty: string;
    description: string;
    opponents: Array<Opponent>;
  }

  interface Fraction{
    id: number;
    name: string;
    text: string;
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