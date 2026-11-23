(() => {
  // vendor/gakumas-data/csv/customizations.csv
  var customizations_default = [{ id: 21, alias: "motivation1", name: "\u3084\u308B\u6C17+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.motivation+=3 } }" }, { id: 56, alias: "motivation2", name: "\u3084\u308B\u6C17+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.motivation+=1 } } } level:2 { at:prestage { target:this { g.motivation+=4 } } }" }, { id: 72, alias: "motivation3", name: "\u3084\u308B\u6C17+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.motivation+=1 } } } level:2 { at:prestage { target:this { g.motivation+=2 } } } level:3 { at:prestage { target:this { g.motivation+=5 } } }" }, { id: 22, alias: "motivationAdd1", name: "\u3084\u308B\u6C17\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "motivation+=2", limit: "", effects: "" }, { id: 103, alias: "fullPowerCharge1", name: "\u5168\u529B\u5024+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.fullPowerCharge+=2 } }" }, { id: 57, alias: "fullPowerCharge2", name: "\u5168\u529B\u5024+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.fullPowerCharge+=1 } } } level:2 { at:prestage { target:this { g.fullPowerCharge+=3 } } }" }, { id: 73, alias: "fullPowerCharge3", name: "\u5168\u529B\u5024+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.fullPowerCharge+=1 } } } level:2 { at:prestage { target:this { g.fullPowerCharge+=2 } } } level:3 { at:prestage { target:this { g.fullPowerCharge+=4 } } }" }, { id: 23, alias: "fullPowerChargeAdd1", name: "\u5168\u529B\u5024\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "fullPowerCharge+=2", limit: "", effects: "" }, { id: 80, alias: "goodImpressionTurns1_2", name: "\u597D\u5370\u8C61+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.goodImpressionTurns+=2 } }" }, { id: 19, alias: "goodImpressionTurns1_3", name: "\u597D\u5370\u8C61+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.goodImpressionTurns+=3 } }" }, { id: 55, alias: "goodImpressionTurns2", name: "\u597D\u5370\u8C61+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.goodImpressionTurns+=1 } } } level:2 { at:prestage { target:this { g.goodImpressionTurns+=4 } } }" }, { id: 71, alias: "goodImpressionTurns3", name: "\u597D\u5370\u8C61+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.goodImpressionTurns+=1 } } } level:2 { at:prestage { target:this { g.goodImpressionTurns+=2 } } } level:3 { at:prestage { target:this { g.goodImpressionTurns+=5 } } }" }, { id: 20, alias: "goodImpressionTurnsAdd1", name: "\u597D\u5370\u8C61\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "goodImpressionTurns+=2", limit: "", effects: "" }, { id: 13, alias: "goodConditionTurns1", name: "\u597D\u8ABF+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.goodConditionTurns+=2 } }" }, { id: 52, alias: "goodConditionTurns2", name: "\u597D\u8ABF+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.goodConditionTurns+=1 } } } level:2 { at:prestage { target:this { g.goodConditionTurns+=3 } } }" }, { id: 68, alias: "goodConditionTurns3", name: "\u597D\u8ABF+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.goodConditionTurns+=1 } } } level:2 { at:prestage { target:this { g.goodConditionTurns+=2 } } } level:3 { at:prestage { target:this { g.goodConditionTurns+=4 } } }" }, { id: 14, alias: "goodConditionTurnsAdd1", name: "\u597D\u8ABF\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "goodConditionTurns+=2", limit: "", effects: "" }, { id: 83, alias: "halfCostTurnsAdd1", name: "\u6D88\u8CBB\u4F53\u529B\u6E1B\u5C11\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "halfCostTurns+=2", limit: "", effects: "" }, { id: 24, alias: "halfCostTurns1", name: "\u6D88\u8CBB\u8EFD\u6E1B+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.halfCostTurns+=2 } }" }, { id: 58, alias: "halfCostTurns2", name: "\u6D88\u8CBB\u8EFD\u6E1B+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.halfCostTurns+=1 } } } level:2 { at:prestage { target:this { g.halfCostTurns+=3 } } }" }, { id: 74, alias: "halfCostTurns3", name: "\u6D88\u8CBB\u8EFD\u6E1B+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.halfCostTurns+=1 } } } level:2 { at:prestage { target:this { g.halfCostTurns+=2 } } } level:3 { at:prestage { target:this { g.halfCostTurns+=4 } } }" }, { id: 15, alias: "perfectConditionTurns1", name: "\u7D76\u597D\u8ABF+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.perfectConditionTurns+=2 } }" }, { id: 53, alias: "perfectConditionTurns2", name: "\u7D76\u597D\u8ABF+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.perfectConditionTurns+=1 } } } level:2 { at:prestage { target:this { g.perfectConditionTurns+=3 } } }" }, { id: 69, alias: "perfectConditionTurns3", name: "\u7D76\u597D\u8ABF+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.perfectConditionTurns+=1 } } } level:2 { at:prestage { target:this { g.perfectConditionTurns+=2 } } } level:3 { at:prestage { target:this { g.perfectConditionTurns+=4 } } }" }, { id: 16, alias: "perfectConditionTurnsAdd1", name: "\u7D76\u597D\u8ABF\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "perfectConditionTurns+=2", limit: "", effects: "" }, { id: 17, alias: "concentration1", name: "\u96C6\u4E2D+", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.concentration+=2 } }" }, { id: 54, alias: "concentration2", name: "\u96C6\u4E2D+", type: "buff", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.concentration+=1 } } } level:2 { at:prestage { target:this { g.concentration+=3 } } }" }, { id: 70, alias: "concentration3", name: "\u96C6\u4E2D+", type: "buff", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.concentration+=1 } } } level:2 { at:prestage { target:this { g.concentration+=2 } } } level:3 { at:prestage { target:this { g.concentration+=4 } } }" }, { id: 18, alias: "concentrationAdd1", name: "\u96C6\u4E2D\u8FFD\u52A0", type: "buff", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "concentration+=2", limit: "", effects: "" }, { id: 29, alias: "cost1", name: "\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 20, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.cost+=2 } }" }, { id: 34, alias: "motivationCost1", name: "\u3084\u308B\u6C17\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 30, alias: "staminaCost1", name: "\u4F53\u529B\u6D88\u8CBB\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 20, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 35, alias: "fullPowerChargeCost1", name: "\u5168\u529B\u5024\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 33, alias: "goodImpressionTurnsCost1", name: "\u597D\u5370\u8C61\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 31, alias: "goodConditionTurnsCost1", name: "\u597D\u8ABF\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 104, alias: "perfectConditionCost1", name: "\u7D76\u597D\u8ABF\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 32, alias: "concentrationCost1", name: "\u96C6\u4E2D\u30B3\u30B9\u30C8\u5024-", type: "cost", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.typedCost+=1 } }" }, { id: 38, alias: "cardUsesRemaining1", name: "\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u4F7F\u7528\u6570+", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "cardUsesRemaining+=1", limit: "", effects: "" }, { id: 39, alias: "upgradeHand1", name: "\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u5F37\u5316\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "upgradeHand", limit: "", effects: "" }, { id: 37, alias: "removeLimit1", name: "\u30EC\u30C3\u30B9\u30F3\u4E2D1\u56DE\u306E\u5236\u9650\u524A\u9664", type: "effect", price: 40, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: 0, effects: "" }, { id: 43, alias: "holdSelectedFromDeckAdd1", name: "\u4FDD\u7559\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "holdSelected[deck]", limit: "", effects: "" }, { id: 92, alias: "kyorikanEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base at:startOfTurn { if:stamina>=maxStamina*0.5 { concentration+=2 } }", limit: "", effects: "" }, { id: 102, alias: "onigiriEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base at:cardUsed[active] { effectCounter+=1 }; + at:cardUsed[active] { if:effectCounter%3==2 { genki+=12*cardsUsed+2 }; limit:2 }", limit: "", effects: "" }, { id: 91, alias: "seisouEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base do { goodConditionTurnsMultiplier=2; score+=18 }; @bonus do { concentrationMultiplier=3; score+=20 }", limit: "", effects: "" }, { id: 108, alias: "hirusagariEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base at:motivationIncreased { if:isDirectEffect { motivation+=3 }; limit:5 }", limit: "", effects: "" }, { id: 110, alias: "ramuneEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base do { goodConditionTurnsMultiplier=3; score+=12 }; do { score+=goodConditionTurns*3 }", limit: "", effects: "" }, { id: 111, alias: "senkouhanabiEffect1", name: "\u52B9\u679C\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@base at:afterCardUsed { if:cardHasEffect(genki) { goodImpressionTurns+=2 } }", limit: "", effects: "" }, { id: 96, alias: "goodImpressionTurnsEffectBuffAdd1_50_5", name: "\u52B9\u679C\u8FFD\u52A0", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "setGoodImpressionTurnsEffectBuff(0.5,5)", limit: "", effects: "" }, { id: 95, alias: "lsmEffectAdd1", name: "\u52B9\u679C\u8FFD\u52A0", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "at:endOfTurn { score+=5; fixedStamina-=1; limit:4 }", limit: "", effects: "" }, { id: 94, alias: "turnAdd1", name: "\u52B9\u679C\u8FFD\u52A0", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "turnsRemaining+=1", limit: "", effects: "" }, { id: 109, alias: "nyuudougumoAdd1", name: "\u52B9\u679C\u8FFD\u52A0", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "moveRandomToTopOfDeck[SSR & (deck | discarded)](3);", limit: "", effects: "" }, { id: 40, alias: "strength1", name: "\u5F37\u6C17+", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.stanceLevel+=1 } }" }, { id: 93, alias: "strengthAdd1", name: "\u5F37\u6C17\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "setStance(strength)", limit: "", effects: "" }, { id: 107, alias: "ichibanTakaiHoshiGrowth1", name: "\u6210\u9577\u5909\u66F4", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "@grow at:afterCardUsed { if:cardHasEffect(strength) { target:this { g.score+=15; g.scoreTimes+=1 } }; limit:2 }" }, { id: 82, alias: "growAllScoreAdd1", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "target:all { g.score+=3 }", limit: "", effects: "" }, { id: 62, alias: "growAllScoreAdd2", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:all { g.score+=1 } } level:2 { target:all { g.score+=4 } }", limit: "", effects: "" }, { id: 78, alias: "growAllScoreAdd3", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:all { g.score+=1 } } level:2 { target:all { g.score+=2 } } level:3 { target:all { g.score+=5 } }", limit: "", effects: "" }, { id: 45, alias: "growHandScoreAdd1", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "target:hand { g.score+=5 }", limit: "", effects: "" }, { id: 60, alias: "growHandScoreAdd2", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:hand { g.score+=3 } } level:2 { target:hand { g.score+=8 } }", limit: "", effects: "" }, { id: 76, alias: "growHandScoreAdd3", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:hand { g.score+=3 } } level:2 { target:hand { g.score+=6 } } level:3 { target:hand { g.score+=11 } }", limit: "", effects: "" }, { id: 44, alias: "growHeldScoreAdd1", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "target:held { g.score+=5 }", limit: "", effects: "" }, { id: 61, alias: "growHeldScoreAdd2", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:held { g.score+=3 } } level:2 { target:held { g.score+=8 } }", limit: "", effects: "" }, { id: 77, alias: "growHeldScoreAdd3", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { target:held { g.score+=3 } } level:2 { target:held { g.score+=6 } } level:3 { target:held { g.score+=11 } }", limit: "", effects: "" }, { id: 81, alias: "onFullPowerGrowThisAdd1", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:stanceChanged { if:stance==fullPower { target:this { g.score+=3 } } }" }, { id: 63, alias: "onStrengthGrowThisAdd2", name: "\u6210\u9577\u8FFD\u52A0", type: "effect", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=2 } } } } level:2 { at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=5 } } } }" }, { id: 106, alias: "bishittoEffect1", name: "\u6301\u7D9A\u52B9\u679C+", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@trigger at:goodImpressionTurnsIncreased { if:isDirectEffect { score+=goodImpressionTurns*1.3 }; ttl:4 }", limit: "", effects: "" }, { id: 86, alias: "daydreamingEffect3", name: "\u6301\u7D9A\u52B9\u679C+", type: "effect", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "level:1 { @trigger at:startOfTurn { score+=genki*0.7; limit:4 } } level:2 { @trigger at:startOfTurn { score+=genki*0.8; limit:4 } } level:3 { @trigger at:startOfTurn { score+=genki*0.95; limit:4 } }", limit: "", effects: "" }, { id: 46, alias: "kagakimi1", name: "\u6301\u7D9A\u52B9\u679C+", type: "effect", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@trigger at:cardUsed { score+=goodImpressionTurns*0.5; goodImpressionTurns+=1 }", limit: "", effects: "" }, { id: 105, alias: "bishittoCondition1", name: "\u6761\u4EF6\u5909\u66F4", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "@usable if:goodImpressionTurns>=6", cost: "", actions: "", limit: "", effects: "" }, { id: 85, alias: "daydreamingCondition1", name: "\u6761\u4EF6\u5909\u66F4", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "@usable if:genki>=15", cost: "", actions: "", limit: "", effects: "" }, { id: 97, alias: "hachikuCondition1", name: "\u6761\u4EF6\u5909\u66F4", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "@usable if:goodConditionTurns>=4", cost: "", actions: "", limit: "", effects: "" }, { id: 87, alias: "toughnessCondition1", name: "\u6761\u4EF6\u5909\u66F4", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "@usable if:preservationTimes>=1", cost: "", actions: "", limit: "", effects: "" }, { id: 88, alias: "yumelipEffect1", name: "\u6761\u4EF6\u5909\u66F4", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@trigger if:goodImpressionTurns>=10", limit: "", effects: "" }, { id: 101, alias: "ukenagashiEffect1_2", name: "\u6761\u4EF6\u5909\u66F4(\u597D\u8ABF)", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@goodLine if:goodConditionTurns>=8", limit: "", effects: "" }, { id: 100, alias: "ukenagashiEffect1_1", name: "\u6761\u4EF6\u5909\u66F4(\u96C6\u4E2D)", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "@concLine if:concentration>=10", limit: "", effects: "" }, { id: 41, alias: "preservation1", name: "\u6E29\u5B58+", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.stanceLevel+=1 } }" }, { id: 89, alias: "preservationAdd1", name: "\u6E29\u5B58\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "setStance(preservation)", limit: "", effects: "" }, { id: 42, alias: "preservationNextTurnAdd1", name: "\u6E29\u5B58\u8FFD\u52A0", type: "effect", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "at:turn { setStance(preservation); limit:1 }", limit: "", effects: "" }, { id: 36, alias: "forceInitialHand1", name: "\u958B\u59CB\u6642\u624B\u672D\u306B\u5165\u308B", type: "effect", price: 70, max: 1, forceInitialHand: true, conditions: "", cost: "", actions: "", limit: "", effects: "" }, { id: 25, alias: "genki1_4", name: "\u5143\u6C17+", type: "genki", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.genki+=4 } }" }, { id: 26, alias: "genki1_9", name: "\u5143\u6C17+", type: "genki", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.genki+=9 } }" }, { id: 59, alias: "genki2", name: "\u5143\u6C17+", type: "genki", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.genki+=4 } } } level:2 { at:prestage { target:this { g.genki+=13 } } }" }, { id: 75, alias: "genki3", name: "\u5143\u6C17+", type: "genki", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.genki+=4 } } } level:2 { at:prestage { target:this { g.genki+=8 } } } level:3 { at:prestage { target:this { g.genki+=17 } } }" }, { id: 90, alias: "genkiAdd1_3_mm_1.5", name: "\u5143\u6C17\u8FFD\u52A0", type: "genki", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "motivationMultiplier=1.5; genki+=3", limit: "", effects: "" }, { id: 27, alias: "genkiAdd1_4", name: "\u5143\u6C17\u8FFD\u52A0", type: "genki", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "genki+=4", limit: "", effects: "" }, { id: 28, alias: "genkiAdd1_9", name: "\u5143\u6C17\u8FFD\u52A0", type: "genki", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "genki+=9", limit: "", effects: "" }, { id: 2, alias: "score1_12", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.score+=12 } }" }, { id: 1, alias: "score1_6", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.score+=6 } }" }, { id: 47, alias: "score2_3", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.score+=3 } } } level:2 { at:prestage { target:this { g.score+=11 } } }" }, { id: 48, alias: "score2_6", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.score+=6 } } } level:2 { at:prestage { target:this { g.score+=22 } } }" }, { id: 64, alias: "score3_3", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.score+=3 } } } level:2 { at:prestage { target:this { g.score+=6 } } } level:3 { at:prestage { target:this { g.score+=15 } } }" }, { id: 65, alias: "score3_6", name: "\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.score+=6 } } } level:2 { at:prestage { target:this { g.score+=12 } } } level:3 { at:prestage { target:this { g.score+=30 } } }" }, { id: 4, alias: "scoreTimes1", name: "\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0A\u6607\u56DE\u6570+", type: "score", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreTimes+=1 } }" }, { id: 99, alias: "oneMoreStepEffect1", name: "\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "at:turn { score+=5; limit:2 }", limit: "", effects: "" }, { id: 79, alias: "scoreAdd1_12", name: "\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "score+=12", limit: "", effects: "" }, { id: 3, alias: "scoreAdd1_6", name: "\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "score+=6", limit: "", effects: "" }, { id: 8, alias: "scoreByMotivation1", name: "\u3084\u308B\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByMotivation+=1.4 } }" }, { id: 84, alias: "scoreByMotivation2", name: "\u3084\u308B\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByMotivation+=0.7 } } } level:2 { at:prestage { target:this { g.scoreByMotivation+=2.1 } } }" }, { id: 9, alias: "scoreByMotivationAdd1", name: "\u3084\u308B\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "score+=motivation*1.1", limit: "", effects: "" }, { id: 11, alias: "scoreByGenki1_100", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByGenki+=1 } }" }, { id: 10, alias: "scoreByGenki1_40", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByGenki+=0.4 } }" }, { id: 98, alias: "scoreByGenki1_60", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByGenki+=0.6 } }" }, { id: 50, alias: "scoreByGenki2_20", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByGenki+=0.2 } } } level:2 { at:prestage { target:this { g.scoreByGenki+=0.6 } } }" }, { id: 51, alias: "scoreByGenki2_30", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByGenki+=0.3 } } } level:2 { at:prestage { target:this { g.scoreByGenki+=0.9 } } }" }, { id: 67, alias: "scoreByGenki3", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByGenki+=0.2 } } } level:2 { at:prestage { target:this { g.scoreByGenki+=0.4 } } } level:3 { at:prestage { target:this { g.scoreByGenki+=0.8 } } }" }, { id: 12, alias: "scoreByGenkiAdd1", name: "\u5143\u6C17\u5206\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "score+=genki*0.3", limit: "", effects: "" }, { id: 6, alias: "scoreByGoodImpressionTurns1_160", name: "\u597D\u5370\u8C61\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 100, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByGoodImpressionTurns+=1.6 } }" }, { id: 5, alias: "scoreByGoodImpressionTurns1_80", name: "\u597D\u5370\u8C61\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "at:prestage { target:this { g.scoreByGoodImpressionTurns+=0.8 } }" }, { id: 49, alias: "scoreByGoodImpressionTurns2", name: "\u597D\u5370\u8C61\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,70", max: 2, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByGoodImpressionTurns+=0.35 } } } level:2 { at:prestage { target:this { g.scoreByGoodImpressionTurns+=1.15 } } }" }, { id: 66, alias: "scoreByGoodImpressionTurns3", name: "\u597D\u5370\u8C61\u5206\u30D1\u30E9\u30E1\u30FC\u30BF+", type: "score", price: "40,40,70", max: 3, forceInitialHand: "", conditions: "", cost: "", actions: "", limit: "", effects: "level:1 { at:prestage { target:this { g.scoreByGoodImpressionTurns+=0.35 } } } level:2 { at:prestage { target:this { g.scoreByGoodImpressionTurns+=0.7 } } } level:3 { at:prestage { target:this { g.scoreByGoodImpressionTurns+=1.5 } } }" }, { id: 7, alias: "scoreByGoodImpressionTurnsAdd1", name: "\u597D\u5370\u8C61\u5206\u30D1\u30E9\u30E1\u30FC\u30BF\u8FFD\u52A0", type: "score", price: 70, max: 1, forceInitialHand: "", conditions: "", cost: "", actions: "score+=goodImpressionTurns*0.6", limit: "", effects: "" }];

  // vendor/gakumas-data/utils/parser/tokens.js
  var TokenType = {
    // Keywords
    AT: "AT",
    IF: "IF",
    DO: "DO",
    TARGET: "TARGET",
    LIMIT: "LIMIT",
    TTL: "TTL",
    DELAY: "DELAY",
    GROUP: "GROUP",
    LINE: "LINE",
    LEVEL: "LEVEL",
    // Delimiters
    LBRACE: "LBRACE",
    RBRACE: "RBRACE",
    LPAREN: "LPAREN",
    RPAREN: "RPAREN",
    LBRACKET: "LBRACKET",
    RBRACKET: "RBRACKET",
    SEMICOLON: "SEMICOLON",
    COLON: "COLON",
    COMMA: "COMMA",
    // Operators
    EQ: "EQ",
    // ==
    NE: "NE",
    // !=
    LT: "LT",
    // <
    GT: "GT",
    // >
    LE: "LE",
    // <=
    GE: "GE",
    // >=
    ASSIGN: "ASSIGN",
    // =
    PLUS_ASSIGN: "PLUS_ASSIGN",
    // +=
    MINUS_ASSIGN: "MINUS_ASSIGN",
    // -=
    MUL_ASSIGN: "MUL_ASSIGN",
    // *=
    DIV_ASSIGN: "DIV_ASSIGN",
    // /=
    MOD_ASSIGN: "MOD_ASSIGN",
    // %=
    PLUS: "PLUS",
    // +
    MINUS: "MINUS",
    // -
    MUL: "MUL",
    // *
    DIV: "DIV",
    // /
    MOD: "MOD",
    // %
    AND: "AND",
    // &
    OR: "OR",
    // |
    NOT: "NOT",
    // !
    AT_SIGN: "AT_SIGN",
    // @ (anchor marker)
    // Literals
    NUMBER: "NUMBER",
    IDENTIFIER: "IDENTIFIER",
    // Special
    EOF: "EOF"
  };
  var KEYWORDS = {
    at: TokenType.AT,
    if: TokenType.IF,
    do: TokenType.DO,
    target: TokenType.TARGET,
    limit: TokenType.LIMIT,
    ttl: TokenType.TTL,
    delay: TokenType.DELAY,
    group: TokenType.GROUP,
    line: TokenType.LINE,
    level: TokenType.LEVEL
  };

  // vendor/gakumas-data/utils/parser/tokenizer.js
  var OPERAND_END_TOKENS = /* @__PURE__ */ new Set([
    TokenType.NUMBER,
    TokenType.IDENTIFIER,
    TokenType.RPAREN,
    TokenType.RBRACKET
  ]);
  var Tokenizer = class {
    constructor(input) {
      this.input = input;
      this.pos = 0;
      this.line = 1;
      this.col = 1;
    }
    peek(offset = 0) {
      return this.input[this.pos + offset];
    }
    advance() {
      const char = this.input[this.pos++];
      if (char === "\n") {
        this.line++;
        this.col = 1;
      } else {
        this.col++;
      }
      return char;
    }
    skipWhitespace() {
      while (this.pos < this.input.length && /\s/.test(this.peek())) {
        this.advance();
      }
    }
    makeToken(type, value = null) {
      return { type, value, line: this.line, col: this.col };
    }
    readNumber() {
      const startCol = this.col;
      let num = "";
      let hasDecimal = false;
      if (this.peek() === "-") {
        num += this.advance();
      }
      while (this.pos < this.input.length) {
        const char = this.peek();
        if (/\d/.test(char)) {
          num += this.advance();
        } else if (char === "." && !hasDecimal) {
          hasDecimal = true;
          num += this.advance();
        } else {
          break;
        }
      }
      return {
        type: TokenType.NUMBER,
        value: parseFloat(num),
        line: this.line,
        col: startCol
      };
    }
    readIdentifier() {
      const startCol = this.col;
      let id = "";
      while (this.pos < this.input.length) {
        const char = this.peek();
        if (/[a-zA-Z0-9_.]/.test(char)) {
          id += this.advance();
        } else {
          break;
        }
      }
      const keyword = KEYWORDS[id.toLowerCase()];
      if (keyword) {
        return { type: keyword, value: id, line: this.line, col: startCol };
      }
      return {
        type: TokenType.IDENTIFIER,
        value: id,
        line: this.line,
        col: startCol
      };
    }
    nextToken() {
      this.skipWhitespace();
      if (this.pos >= this.input.length) {
        return this.makeToken(TokenType.EOF);
      }
      const char = this.peek();
      const startCol = this.col;
      const singleCharTokens = {
        "{": TokenType.LBRACE,
        "}": TokenType.RBRACE,
        "(": TokenType.LPAREN,
        ")": TokenType.RPAREN,
        "[": TokenType.LBRACKET,
        "]": TokenType.RBRACKET,
        ";": TokenType.SEMICOLON,
        ":": TokenType.COLON,
        ",": TokenType.COMMA,
        "&": TokenType.AND,
        "|": TokenType.OR,
        "@": TokenType.AT_SIGN
      };
      if (singleCharTokens[char]) {
        this.advance();
        return { type: singleCharTokens[char], line: this.line, col: startCol };
      }
      const twoCharOps = {
        "==": TokenType.EQ,
        "!=": TokenType.NE,
        "<=": TokenType.LE,
        ">=": TokenType.GE,
        "+=": TokenType.PLUS_ASSIGN,
        "-=": TokenType.MINUS_ASSIGN,
        "*=": TokenType.MUL_ASSIGN,
        "/=": TokenType.DIV_ASSIGN,
        "%=": TokenType.MOD_ASSIGN
      };
      const twoChar = char + (this.peek(1) || "");
      if (twoCharOps[twoChar]) {
        this.advance();
        this.advance();
        return { type: twoCharOps[twoChar], line: this.line, col: startCol };
      }
      const singleCharOps = {
        "!": TokenType.NOT,
        "=": TokenType.ASSIGN,
        "<": TokenType.LT,
        ">": TokenType.GT,
        "+": TokenType.PLUS,
        "*": TokenType.MUL,
        "/": TokenType.DIV,
        "%": TokenType.MOD
      };
      if (char === "-") {
        if (/\d/.test(this.peek(1)) && !OPERAND_END_TOKENS.has(this.prevType)) {
          return this.readNumber();
        }
        this.advance();
        return { type: TokenType.MINUS, line: this.line, col: startCol };
      }
      if (singleCharOps[char]) {
        this.advance();
        return { type: singleCharOps[char], line: this.line, col: startCol };
      }
      if (/\d/.test(char)) {
        return this.readNumber();
      }
      if (/[a-zA-Z_]/.test(char)) {
        return this.readIdentifier();
      }
      throw new Error(
        `Unexpected character '${char}' at line ${this.line}, col ${this.col}`
      );
    }
    tokenize() {
      const tokens = [];
      let token;
      do {
        token = this.nextToken();
        tokens.push(token);
        this.prevType = token.type;
      } while (token.type !== TokenType.EOF);
      return tokens;
    }
  };

  // vendor/gakumas-data/utils/parser/parser.js
  var MODIFIER_TOKENS = [
    TokenType.LIMIT,
    TokenType.TTL,
    TokenType.DELAY,
    TokenType.GROUP,
    TokenType.LINE,
    TokenType.LEVEL
  ];
  var COMPARISON_TOKENS = [
    TokenType.EQ,
    TokenType.NE,
    TokenType.LT,
    TokenType.GT,
    TokenType.LE,
    TokenType.GE
  ];
  var ARITHMETIC_TOKENS = [
    TokenType.PLUS,
    TokenType.MINUS,
    TokenType.MUL,
    TokenType.DIV,
    TokenType.MOD
  ];
  var ASSIGNMENT_TOKENS = [
    TokenType.ASSIGN,
    TokenType.PLUS_ASSIGN,
    TokenType.MINUS_ASSIGN,
    TokenType.MUL_ASSIGN,
    TokenType.DIV_ASSIGN,
    TokenType.MOD_ASSIGN
  ];
  var COMPARISON_OP_MAP = {
    [TokenType.EQ]: "==",
    [TokenType.NE]: "!=",
    [TokenType.LT]: "<",
    [TokenType.GT]: ">",
    [TokenType.LE]: "<=",
    [TokenType.GE]: ">="
  };
  var ASSIGNMENT_OP_MAP = {
    [TokenType.ASSIGN]: "=",
    [TokenType.PLUS_ASSIGN]: "+=",
    [TokenType.MINUS_ASSIGN]: "-=",
    [TokenType.MUL_ASSIGN]: "*=",
    [TokenType.DIV_ASSIGN]: "/=",
    [TokenType.MOD_ASSIGN]: "%="
  };
  var MODIFIER_TYPE_MAP = {
    [TokenType.LIMIT]: "limit",
    [TokenType.TTL]: "ttl",
    [TokenType.DELAY]: "delay",
    [TokenType.GROUP]: "group",
    [TokenType.LINE]: "line",
    [TokenType.LEVEL]: "level"
  };
  var MUL_OP_MAP = {
    [TokenType.MUL]: "*",
    [TokenType.DIV]: "/",
    [TokenType.MOD]: "%"
  };
  var Parser = class {
    constructor(tokens) {
      this.tokens = tokens;
      this.pos = 0;
    }
    // Token navigation helpers
    peek(offset = 0) {
      const index = this.pos + offset;
      if (index >= this.tokens.length) {
        return this.tokens[this.tokens.length - 1];
      }
      return this.tokens[index];
    }
    advance() {
      return this.tokens[this.pos++];
    }
    check(type) {
      return this.peek().type === type;
    }
    match(...types) {
      for (const type of types) {
        if (this.check(type)) {
          return this.advance();
        }
      }
      return null;
    }
    expect(type, message) {
      const token = this.peek();
      if (token.type !== type) {
        throw new Error(
          `${message} at line ${token.line}, col ${token.col}. Got ${token.type}`
        );
      }
      return this.advance();
    }
    isAtEnd() {
      return this.peek().type === TokenType.EOF;
    }
    // Top-level parsing
    parseEffectSequence() {
      const effects = [];
      while (!this.isAtEnd()) {
        const effect = this.parseEffect();
        if (effect) effects.push(effect);
        while (this.match(TokenType.SEMICOLON)) {
        }
      }
      return { type: "sequence", effects };
    }
    /**
     * Parse a patch sequence used for customization columns.
     *
     * Syntax:
     *   + <effect>              append a new effect to the card's attribute list
     *   @name <partial>         patch the effect labeled @name on the card
     *   level:N, limit:N, ...   attach as a top-level modifier to the previous patch
     *   level:N { ...patches }  apply level N to every patch in the block
     *
     * Emits: { type: "patchSequence", patches: [...] }
     * Each patch is { op, anchor?, effect?, level? }.
     */
    parsePatchSequence() {
      const patches = this.parsePatchStatements(() => this.isAtEnd());
      return { type: "patchSequence", patches };
    }
    parsePatchStatements(isEndOfBlock) {
      const patches = [];
      let pendingModifiers = {};
      const flushPending = () => {
        if (Object.keys(pendingModifiers).length === 0) return;
        if (patches.length > 0) {
          Object.assign(patches[patches.length - 1], pendingModifiers);
        }
        pendingModifiers = {};
      };
      while (!isEndOfBlock()) {
        const token = this.peek();
        if (MODIFIER_TOKENS.includes(token.type)) {
          const mod = this.parseModifier();
          if (mod.type === "level" && this.check(TokenType.LBRACE)) {
            flushPending();
            this.advance();
            const inner = this.parsePatchStatements(
              () => this.isAtEnd() || this.check(TokenType.RBRACE)
            );
            this.expect(
              TokenType.RBRACE,
              "Expected '}' to close level block"
            );
            for (const patch of inner) {
              patch.level = mod.value;
              patches.push(patch);
            }
          } else {
            pendingModifiers[mod.type] = mod.value;
          }
        } else if (token.type === TokenType.PLUS) {
          flushPending();
          this.advance();
          const effect = this.parseEffect();
          if (!effect) {
            throw new Error(
              `Expected effect after '+' at line ${this.peek().line}, col ${this.peek().col}`
            );
          }
          patches.push({ op: "append", effect });
        } else if (token.type === TokenType.AT_SIGN) {
          flushPending();
          this.advance();
          const idToken = this.expect(
            TokenType.IDENTIFIER,
            "Expected anchor name after '@'"
          );
          const effect = this.parsePartialEffect();
          if (!effect) {
            throw new Error(
              `Expected patch body after '@${idToken.value}' at line ${this.peek().line}, col ${this.peek().col}`
            );
          }
          patches.push({ op: "patch", anchor: idToken.value, effect });
        } else if (token.type === TokenType.SEMICOLON) {
          this.advance();
        } else {
          flushPending();
          const effect = this.parseEffect();
          if (!effect) {
            throw new Error(
              `Expected '+', '@', or effect in patch sequence at line ${token.line}, col ${token.col}. Got ${token.type}`
            );
          }
          if (effect.type === "action") {
            const actions = [effect];
            const flushActions = () => {
              if (actions.length === 1) {
                patches.push({ op: "append", effect: actions[0] });
              } else if (actions.length > 1) {
                patches.push({
                  op: "append",
                  effect: { type: "actionBlock", body: actions.slice() }
                });
              }
              actions.length = 0;
            };
            while (!this.isAtEnd()) {
              while (this.match(TokenType.SEMICOLON)) {
              }
              const t = this.peek();
              if (t.type === TokenType.PLUS || t.type === TokenType.AT_SIGN || t.type === TokenType.RBRACE || MODIFIER_TOKENS.includes(t.type)) {
                break;
              }
              const next = this.parseEffect();
              if (!next) break;
              if (next.type !== "action") {
                flushActions();
                patches.push({ op: "append", effect: next });
                break;
              }
              actions.push(next);
            }
            flushActions();
          } else {
            patches.push({ op: "append", effect });
          }
        }
      }
      flushPending();
      return patches;
    }
    parsePartialEffect() {
      const token = this.peek();
      if (token.type === TokenType.AT) {
        return this.parsePhaseBlock(
          true
          /* partial */
        );
      }
      return this.parseEffect();
    }
    parseEffect() {
      let anchor = null;
      if (this.check(TokenType.AT_SIGN)) {
        this.advance();
        const idToken = this.expect(
          TokenType.IDENTIFIER,
          "Expected anchor name after '@'"
        );
        anchor = idToken.value;
      }
      const token = this.peek();
      let effect;
      switch (token.type) {
        case TokenType.AT:
          effect = this.parsePhaseBlock();
          break;
        case TokenType.IF:
          effect = this.parseConditionBlock();
          break;
        case TokenType.TARGET:
          effect = this.parseTargetBlock();
          break;
        case TokenType.DO:
          effect = this.parseAction();
          break;
        case TokenType.IDENTIFIER:
          effect = this.parseBareAction();
          break;
        case TokenType.EOF:
        case TokenType.RBRACE:
          if (anchor) {
            throw new Error(
              `Dangling anchor '@${anchor}' at line ${token.line}, col ${token.col}`
            );
          }
          return null;
        default:
          if (MODIFIER_TOKENS.includes(token.type)) {
            if (anchor) {
              throw new Error(
                `Cannot anchor a modifier at line ${token.line}, col ${token.col}`
              );
            }
            return this.parseModifier();
          }
          throw new Error(
            `Unexpected token ${token.type} at line ${token.line}, col ${token.col}`
          );
      }
      if (effect && anchor) effect.anchor = anchor;
      return effect;
    }
    // Block parsing
    parsePhaseBlock(partial = false) {
      this.expect(TokenType.AT, "Expected 'at'");
      this.expect(TokenType.COLON, "Expected ':' after 'at'");
      const phaseToken = this.expect(TokenType.IDENTIFIER, "Expected phase name");
      let filter = null;
      if (this.match(TokenType.LBRACKET)) {
        filter = this.parseCondition();
        this.expect(TokenType.RBRACKET, "Expected ']' after phase filter");
      }
      let body = [];
      if (this.match(TokenType.LBRACE)) {
        body = this.parseEffectBody();
        this.expect(TokenType.RBRACE, "Expected '}' to close phase block");
      } else if (!partial) {
        throw new Error(
          `Expected '{' after phase at line ${this.peek().line}, col ${this.peek().col}`
        );
      }
      return { type: "phase", phase: phaseToken.value, filter, body };
    }
    parseConditionBlock() {
      this.expect(TokenType.IF, "Expected 'if'");
      this.expect(TokenType.COLON, "Expected ':' after 'if'");
      const condition = this.parseCondition();
      let body = [];
      if (this.match(TokenType.LBRACE)) {
        body = this.parseEffectBody();
        this.expect(TokenType.RBRACE, "Expected '}' to close condition block");
      }
      return { type: "condition", expr: condition, body };
    }
    parseTargetBlock() {
      this.expect(TokenType.TARGET, "Expected 'target'");
      this.expect(TokenType.COLON, "Expected ':' after 'target'");
      const target = this.parseCondition();
      let body = [];
      if (this.match(TokenType.LBRACE)) {
        body = this.parseEffectBody();
        this.expect(TokenType.RBRACE, "Expected '}' to close target block");
      }
      return { type: "target", target, body };
    }
    parseAction() {
      this.expect(TokenType.DO, "Expected 'do'");
      const hasColon = !!this.match(TokenType.COLON);
      if (this.match(TokenType.LBRACE)) {
        const body = this.parseActionBody();
        this.expect(TokenType.RBRACE, "Expected '}' to close do block");
        return { type: "actionBlock", body };
      }
      if (!hasColon) {
        throw new Error(
          `Expected ':' or '{' after 'do' at line ${this.peek().line}, col ${this.peek().col}`
        );
      }
      const expr = this.parseAssignmentExpr();
      return { type: "action", expr };
    }
    parseBareAction() {
      const expr = this.parseAssignmentExpr();
      return { type: "action", expr };
    }
    parseModifier() {
      const token = this.advance();
      this.expect(TokenType.COLON, `Expected ':' after '${token.value}'`);
      const value = this.expect(TokenType.NUMBER, "Expected number after ':'");
      return { type: MODIFIER_TYPE_MAP[token.type], value: value.value };
    }
    parseActionBody() {
      const body = [];
      while (!this.check(TokenType.RBRACE) && !this.check(TokenType.EOF)) {
        const token = this.peek();
        let effect;
        if (token.type === TokenType.DO) {
          effect = this.parseAction();
          if (effect?.type === "actionBlock") {
            throw new Error(
              `Nested do blocks are not supported at line ${token.line}, col ${token.col}`
            );
          }
        } else if (token.type === TokenType.IDENTIFIER) {
          effect = this.parseBareAction();
        } else if (MODIFIER_TOKENS.includes(token.type)) {
          effect = this.parseModifier();
        } else {
          throw new Error(
            `Expected action or modifier in do block at line ${token.line}, col ${token.col}. Got ${token.type}`
          );
        }
        if (effect) {
          body.push(effect);
        }
        while (this.match(TokenType.SEMICOLON)) {
        }
      }
      return body;
    }
    parseEffectBody() {
      const body = [];
      while (!this.check(TokenType.RBRACE) && !this.check(TokenType.EOF)) {
        const effect = this.parseEffect();
        if (effect) {
          body.push(effect);
        }
        while (this.match(TokenType.SEMICOLON)) {
        }
      }
      return body;
    }
    // Condition expression parsing
    parseCondition() {
      return this.parseOrExpr();
    }
    parseOrExpr() {
      let left = this.parseAndExpr();
      while (this.match(TokenType.OR)) {
        const right = this.parseAndExpr();
        left = { type: "binary", op: "|", left, right };
      }
      return left;
    }
    parseAndExpr() {
      let left = this.parseUnaryCondition();
      while (this.match(TokenType.AND)) {
        const right = this.parseUnaryCondition();
        left = { type: "binary", op: "&", left, right };
      }
      return left;
    }
    parseUnaryCondition() {
      if (this.match(TokenType.NOT)) {
        const operand = this.parseUnaryCondition();
        return { type: "unary", op: "!", operand };
      }
      return this.parseComparisonExpr();
    }
    parseComparisonExpr() {
      if (this.check(TokenType.LPAREN)) {
        const start = this.pos;
        this.advance();
        const expr = this.parseCondition();
        this.expect(TokenType.RPAREN, "Expected ')' after condition");
        if (!COMPARISON_TOKENS.includes(this.peek().type) && !ARITHMETIC_TOKENS.includes(this.peek().type)) {
          return expr;
        }
        this.pos = start;
      }
      const left = this.parseAddExpr();
      const opToken = this.match(...COMPARISON_TOKENS);
      if (opToken) {
        const right = this.parseAddExpr();
        return {
          type: "comparison",
          op: COMPARISON_OP_MAP[opToken.type],
          left,
          right
        };
      }
      return left;
    }
    // Assignment expression parsing
    parseAssignmentExpr() {
      if (!this.check(TokenType.IDENTIFIER)) {
        throw new Error(
          `Expected identifier at line ${this.peek().line}, col ${this.peek().col}`
        );
      }
      const idToken = this.advance();
      let target = null;
      if (this.match(TokenType.LBRACKET)) {
        target = this.parseCondition();
        this.expect(TokenType.RBRACKET, "Expected ']' after target expression");
      }
      let lhsName = null;
      if (this.match(TokenType.LPAREN)) {
        if (idToken.value === "effectCounter") {
          if (!this.check(TokenType.IDENTIFIER)) {
            throw new Error(
              `Expected counter name at line ${this.peek().line}, col ${this.peek().col}`
            );
          }
          const nameToken = this.advance();
          this.expect(TokenType.RPAREN, "Expected ')' after counter name");
          lhsName = nameToken.value;
        } else {
          const args = this.parseArgumentList();
          return { type: "call", name: idToken.value, target, args };
        }
      }
      if (target) {
        return { type: "call", name: idToken.value, target, args: [] };
      }
      const opToken = this.match(...ASSIGNMENT_TOKENS);
      if (opToken) {
        const rhs = this.parseExpression();
        return {
          type: "assignment",
          lhs: idToken.value,
          ...lhsName && { lhsName },
          op: ASSIGNMENT_OP_MAP[opToken.type],
          rhs
        };
      }
      return { type: "identifier", name: idToken.value };
    }
    parseArgumentList() {
      const args = [];
      if (!this.check(TokenType.RPAREN)) {
        do {
          args.push(this.parseExpression());
        } while (this.match(TokenType.COMMA));
      }
      this.expect(TokenType.RPAREN, "Expected ')' after arguments");
      return args;
    }
    // Arithmetic expression parsing
    parseExpression() {
      return this.parseAddExpr();
    }
    parseAddExpr() {
      let left = this.parseMulExpr();
      while (true) {
        const opToken = this.match(TokenType.PLUS, TokenType.MINUS);
        if (!opToken) break;
        const right = this.parseMulExpr();
        const op = opToken.type === TokenType.PLUS ? "+" : "-";
        left = { type: "binary", op, left, right };
      }
      return left;
    }
    parseMulExpr() {
      let left = this.parseUnaryMath();
      while (true) {
        const opToken = this.match(TokenType.MUL, TokenType.DIV, TokenType.MOD);
        if (!opToken) break;
        const right = this.parseUnaryMath();
        left = { type: "binary", op: MUL_OP_MAP[opToken.type], left, right };
      }
      return left;
    }
    parseUnaryMath() {
      if (this.match(TokenType.MINUS)) {
        const operand = this.parseUnaryMath();
        return { type: "unary", op: "-", operand };
      }
      return this.parsePrimaryExpr();
    }
    parsePrimaryExpr() {
      if (this.match(TokenType.LPAREN)) {
        const expr = this.parseExpression();
        this.expect(TokenType.RPAREN, "Expected ')' after expression");
        return expr;
      }
      if (this.check(TokenType.NUMBER)) {
        const token = this.advance();
        return { type: "number", value: token.value };
      }
      if (this.check(TokenType.IDENTIFIER)) {
        const idToken = this.advance();
        let target = null;
        if (this.match(TokenType.LBRACKET)) {
          target = this.parseCondition();
          this.expect(TokenType.RBRACKET, "Expected ']' after target expression");
        }
        if (this.match(TokenType.LPAREN)) {
          const args = this.parseArgumentList();
          return { type: "call", name: idToken.value, target, args };
        }
        if (target) {
          return { type: "call", name: idToken.value, target, args: [] };
        }
        return { type: "identifier", name: idToken.value };
      }
      throw new Error(
        `Unexpected token in expression at line ${this.peek().line}, col ${this.peek().col}`
      );
    }
  };

  // vendor/gakumas-data/utils/parser/index.js
  function parseEffects(input) {
    if (!input || !input.trim()) {
      return { type: "sequence", effects: [] };
    }
    const tokenizer = new Tokenizer(input);
    const tokens = tokenizer.tokenize();
    const parser = new Parser(tokens);
    return parser.parseEffectSequence();
  }
  function parsePatches(input) {
    if (!input || !input.trim()) {
      return { type: "patchSequence", patches: [] };
    }
    const tokenizer = new Tokenizer(input);
    const tokens = tokenizer.tokenize();
    const parser = new Parser(tokens);
    return parser.parsePatchSequence();
  }

  // vendor/gakumas-data/utils/transformer/transform.js
  var MODIFIER_TYPES = ["limit", "ttl", "delay", "group", "line", "level"];
  function isModifier(node) {
    return MODIFIER_TYPES.includes(node.type);
  }
  function transformEffects(ast) {
    if (ast.type !== "sequence") {
      throw new Error("Expected sequence at top level");
    }
    const results = [];
    let pendingActions = [];
    let pendingModifiers = {};
    let pendingAnchor = null;
    const flushPending = () => {
      if (pendingActions.length > 0) {
        const effect = { actions: pendingActions };
        Object.assign(effect, pendingModifiers);
        if (pendingAnchor) effect.anchor = pendingAnchor;
        results.push(effect);
        pendingActions = [];
        pendingModifiers = {};
        pendingAnchor = null;
      } else if (Object.keys(pendingModifiers).length > 0 && results.length > 0) {
        Object.assign(results[results.length - 1], pendingModifiers);
        pendingModifiers = {};
      }
    };
    for (const node of ast.effects) {
      if (isModifier(node)) {
        pendingModifiers[node.type] = node.value;
      } else if (node.type === "action") {
        if (node.anchor) {
          flushPending();
          pendingAnchor = node.anchor;
          pendingActions.push(node.expr);
          continue;
        }
        if (Object.keys(pendingModifiers).length > 0 && pendingActions.length === 0 && results.length > 0) {
          Object.assign(results[results.length - 1], pendingModifiers);
          pendingModifiers = {};
        }
        pendingActions.push(node.expr);
      } else if (node.type === "actionBlock") {
        flushPending();
        const transformed = transformNode(node, {});
        applyAnchor(transformed, node.anchor);
        results.push(...transformed);
      } else {
        flushPending();
        const transformed = transformNode(node, {});
        applyAnchor(transformed, node.anchor);
        results.push(...transformed);
      }
    }
    flushPending();
    return results;
  }
  function transformNode(node, context) {
    switch (node.type) {
      case "phase":
        return transformPhaseBlock(node, context);
      case "condition":
        return transformConditionBlock(node, context);
      case "target":
        return transformTargetBlock(node, context);
      case "action":
        return transformAction(node, context);
      case "actionBlock":
        return transformActionBlock(node, context);
      default:
        if (isModifier(node)) {
          return [{ _pending: { [node.type]: node.value } }];
        }
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
  function applyAnchor(effects, anchor) {
    if (!anchor || effects.length === 0) return;
    if (!effects[0].anchor) effects[0].anchor = anchor;
  }
  var PHASE_FILTER_SHORTCUTS = {
    "cardUsed:active": "activeCardUsed",
    "cardUsed:mental": "mentalCardUsed",
    "afterCardUsed:active": "afterActiveCardUsed",
    "afterCardUsed:mental": "afterMentalCardUsed"
  };
  function transformPhaseBlock(node, context) {
    let phase = node.phase;
    let filter = node.filter;
    if (filter && filter.type === "identifier") {
      const shortcut = PHASE_FILTER_SHORTCUTS[`${phase}:${filter.name}`];
      if (shortcut) {
        phase = shortcut;
        filter = null;
      }
    }
    const nextContext = { ...context, phase };
    if (filter) nextContext.filter = filter;
    return transformBody(node.body, nextContext);
  }
  function transformConditionBlock(node, context) {
    const conditions = context.conditions ? [...context.conditions] : [];
    conditions.push(node.expr);
    return transformBody(node.body, { ...context, conditions });
  }
  function transformTargetBlock(node, context) {
    const targets = context.targets ? [...context.targets] : [];
    const targetName = node.target.type === "identifier" ? node.target.name : node.target;
    targets.push(targetName);
    return transformBody(node.body, { ...context, targets });
  }
  function transformAction(node, context) {
    const effect = createEffect(context);
    effect.actions = [node.expr];
    return [effect];
  }
  function transformActionBlock(node, context) {
    const effect = createEffect(context);
    const modifiers = {};
    const actions = [];
    for (const child of node.body) {
      if (child.type === "action") {
        actions.push(child.expr);
      } else if (isModifier(child)) {
        modifiers[child.type] = child.value;
      } else {
        throw new Error(`Unsupported node in do block: ${child.type}`);
      }
    }
    if (actions.length > 0) {
      effect.actions = actions;
    }
    Object.assign(effect, modifiers);
    return [effect];
  }
  function transformBody(body, context) {
    const results = [];
    let pendingActions = [];
    let pendingModifiers = {};
    let pendingNestedPhases = [];
    const flushPending = () => {
      if (pendingActions.length === 0 && Object.keys(pendingModifiers).length === 0 && pendingNestedPhases.length === 0) {
        return;
      }
      if (pendingActions.length === 0 && pendingNestedPhases.length === 0) {
        if (results.length > 0) {
          Object.assign(results[results.length - 1], pendingModifiers);
        }
        pendingModifiers = {};
        return;
      }
      const effect = createEffect(context);
      if (pendingActions.length > 0) effect.actions = pendingActions;
      Object.assign(effect, pendingModifiers);
      if (pendingNestedPhases.length > 0) {
        effect.effects = [...pendingNestedPhases];
      }
      results.push(effect);
      pendingActions = [];
      pendingModifiers = {};
      pendingNestedPhases = [];
    };
    for (const node of body) {
      if (isModifier(node)) {
        pendingModifiers[node.type] = node.value;
      } else if (node.type === "phase") {
        const nestedEffects = transformPhaseBlock(node, {});
        applyAnchor(nestedEffects, node.anchor);
        pendingNestedPhases.push(...nestedEffects);
      } else if (node.type === "action") {
        if (node.anchor) {
          flushPending();
          const anchored = createEffect(context);
          anchored.actions = [node.expr];
          anchored.anchor = node.anchor;
          results.push(anchored);
        } else {
          pendingActions.push(node.expr);
        }
      } else if (node.type === "actionBlock") {
        flushPending();
        const nested = transformActionBlock(node, context);
        applyAnchor(nested, node.anchor);
        results.push(...nested);
      } else if (node.type === "condition" || node.type === "target") {
        flushPending();
        const nested = transformNode(node, context);
        applyAnchor(nested, node.anchor);
        results.push(...nested);
      }
    }
    if (pendingActions.length > 0) {
      const effect = createEffect(context);
      effect.actions = pendingActions;
      Object.assign(effect, pendingModifiers);
      if (pendingNestedPhases.length > 0) {
        effect.effects = [...pendingNestedPhases];
      }
      results.push(effect);
    } else if (results.length === 0) {
      const effect = createEffect(context);
      Object.assign(effect, pendingModifiers);
      if (pendingNestedPhases.length > 0) {
        effect.effects = [...pendingNestedPhases];
      }
      if (effect.phase || effect.effects || effect.conditions || effect.targets) {
        results.push(effect);
      }
    } else if (results.length > 0) {
      if (Object.keys(pendingModifiers).length > 0) {
        for (const effect of results) {
          Object.assign(effect, pendingModifiers);
        }
      }
      if (pendingNestedPhases.length > 0) {
        const lastResult = results[results.length - 1];
        if (!lastResult.effects) {
          lastResult.effects = [];
        }
        lastResult.effects.push(...pendingNestedPhases);
      }
    }
    return results;
  }
  function createEffect(context) {
    const effect = {};
    if (context.phase) {
      effect.phase = context.phase;
    }
    if (context.filter) {
      effect.filter = context.filter;
    }
    if (context.conditions && context.conditions.length > 0) {
      effect.conditions = [...context.conditions];
    }
    if (context.targets && context.targets.length > 0) {
      effect.targets = [...context.targets];
    }
    return effect;
  }
  function transformPatches(ast) {
    if (ast.type !== "patchSequence") {
      throw new Error("Expected patchSequence at top level");
    }
    return ast.patches.flatMap((patch) => {
      if (patch.op === "append") {
        const effects = transformEffects({
          type: "sequence",
          effects: [patch.effect]
        });
        return effects.map((effect) => {
          const record = { op: "append", effect };
          hoistPatchMeta(record, effect);
          applyPatchModifiers(effect, patch);
          applyPatchLevelFields(record, patch);
          return record;
        });
      }
      if (patch.op === "patch") {
        const delta = buildDelta(patch.effect);
        const record = { op: "patch", anchor: patch.anchor, delta };
        hoistPatchMeta(record, delta);
        applyPatchModifiers(delta, patch);
        applyPatchLevelFields(record, patch);
        return record;
      }
      throw new Error(`Unknown patch op: ${patch.op}`);
    });
  }
  var PATCH_LEVEL_FIELDS = ["level"];
  var PATCH_MODIFIER_FIELDS = MODIFIER_TYPES.filter(
    (type) => !PATCH_LEVEL_FIELDS.includes(type)
  );
  function applyPatchModifiers(target, patch) {
    for (const key of PATCH_MODIFIER_FIELDS) {
      if (patch[key] != null) target[key] = patch[key];
    }
  }
  function applyPatchLevelFields(record, patch) {
    for (const key of PATCH_LEVEL_FIELDS) {
      if (patch[key] != null) record[key] = patch[key];
    }
  }
  function hoistPatchMeta(record, target) {
    if (!target) return;
    if (target.level != null) {
      record.level = target.level;
      delete target.level;
    }
  }
  function buildDelta(node) {
    const delta = {};
    applyToDelta(delta, node);
    return delta;
  }
  function applyToDelta(delta, node) {
    if (!node) return;
    switch (node.type) {
      case "phase": {
        let phase = node.phase;
        let filter = node.filter;
        if (filter && filter.type === "identifier") {
          const shortcut = PHASE_FILTER_SHORTCUTS[`${phase}:${filter.name}`];
          if (shortcut) {
            phase = shortcut;
            filter = null;
          }
        }
        delta.phase = phase;
        if (filter) delta.filter = filter;
        for (const child of node.body) applyToDelta(delta, child);
        break;
      }
      // Nested blocks add to the outer conditions/targets, as in effects.
      case "condition":
        delta.conditions = [...delta.conditions || [], node.expr];
        for (const child of node.body) applyToDelta(delta, child);
        break;
      case "target": {
        const targetName = node.target.type === "identifier" ? node.target.name : node.target;
        delta.targets = [...delta.targets || [], targetName];
        for (const child of node.body) applyToDelta(delta, child);
        break;
      }
      case "action":
        if (!delta.actions) delta.actions = [];
        delta.actions.push(node.expr);
        break;
      case "actionBlock": {
        const actions = [];
        for (const child of node.body) {
          if (child.type === "action") {
            actions.push(child.expr);
          } else if (isModifier(child)) {
            delta[child.type] = child.value;
          } else {
            throw new Error(`Unsupported node in patch do block: ${child.type}`);
          }
        }
        delta.actions = actions;
        break;
      }
      default:
        if (isModifier(node)) {
          delta[node.type] = node.value;
          return;
        }
        throw new Error(`Unknown patch body node type: ${node.type}`);
    }
  }

  // vendor/gakumas-data/utils/effects.js
  function deserializeEffectSequence(effectSequenceString) {
    if (!effectSequenceString?.length) {
      return [];
    }
    try {
      const ast = parseEffects(effectSequenceString);
      return transformEffects(ast);
    } catch (error) {
      console.error("Failed to parse effect:", effectSequenceString);
      console.error(error);
      return [];
    }
  }
  function deserializePatchSequence(patchSequenceString) {
    if (!patchSequenceString?.length) {
      return [];
    }
    try {
      const ast = parsePatches(patchSequenceString);
      return transformPatches(ast);
    } catch (error) {
      console.error("Failed to parse patch sequence:", patchSequenceString);
      console.error(error);
      return [];
    }
  }

  // vendor/gakumas-data/utils/lazyParse.js
  function lazyParse(records, parse) {
    const unparsed = new Set(records);
    return {
      one(record) {
        if (unparsed.delete(record)) parse(record);
        return record;
      },
      all() {
        unparsed.forEach(parse);
        unparsed.clear();
        return records;
      }
    };
  }

  // vendor/gakumas-data/data/customizations.js
  var parsed = lazyParse(customizations_default, (customization) => {
    customization.conditions = deserializePatchSequence(customization.conditions);
    customization.cost = deserializePatchSequence(customization.cost);
    customization.actions = deserializePatchSequence(customization.actions);
    customization.effects = deserializePatchSequence(customization.effects);
  });
  var CUSTOMIZATIONS_BY_ID = customizations_default.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
  var Customizations = class {
    static getAll() {
      return parsed.all();
    }
    static getById(id) {
      return parsed.one(CUSTOMIZATIONS_BY_ID[id]);
    }
  };
  var customizations_default2 = Customizations;

  // vendor/gakumas-data/csv/idol_road_stages.csv
  var idol_road_stages_default = [];

  // vendor/gakumas-data/csv/idol_road_effects.csv
  var idol_road_effects_default = [];

  // vendor/gakumas-data/csv/p_idols.csv
  var p_idols_default = [{ id: 1, idolId: 1, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 2, idolId: 2, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "concentration" }, { id: 3, idolId: 3, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 4, idolId: 4, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 5, idolId: 5, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 6, idolId: 6, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 7, idolId: 7, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "concentration" }, { id: 8, idolId: 8, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 9, idolId: 9, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "concentration" }, { id: 10, idolId: 1, title: "\u308F\u305F\u3057\u304C\u4E00\u756A\uFF01", rarity: "SR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 11, idolId: 2, title: "\u4E00\u5339\u72FC", rarity: "SR", plan: "sense", recommendedEffect: "concentration" }, { id: 12, idolId: 3, title: "\u30AB\u30EF\u30A4\u30A4\u2661\u306F\u3058\u3081\u307E\u3057\u305F", rarity: "SR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 13, idolId: 4, title: "\u306F\u3058\u307E\u308A\u306F\u30AB\u30C3\u30B3\u3088\u304F", rarity: "SR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 14, idolId: 5, title: "\u4E00\u3064\u8E0F\u307F\u51FA\u3057\u305F\u5148\u306B", rarity: "SR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 15, idolId: 6, title: "\u80F8\u3092\u5F35\u3063\u3066\u4E00\u6B69\u305A\u3064", rarity: "SR", plan: "logic", recommendedEffect: "motivation" }, { id: 16, idolId: 7, title: "\u5922\u3078\u306E\u30EA\u30B9\u30BF\u30FC\u30C8", rarity: "SR", plan: "sense", recommendedEffect: "concentration" }, { id: 17, idolId: 8, title: "\u4E00\u756A\u5411\u3044\u3066\u306A\u3044\u3053\u3068", rarity: "SR", plan: "logic", recommendedEffect: "motivation" }, { id: 18, idolId: 9, title: "\u300E\u79C1\u3089\u3057\u3055\u300F\u306E\u306F\u3058\u307E\u308A", rarity: "SR", plan: "sense", recommendedEffect: "concentration" }, { id: 19, idolId: 1, title: "Fighting My Way", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 20, idolId: 2, title: "Luna say maybe", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 21, idolId: 3, title: "\u4E16\u754C\u4E00\u53EF\u611B\u3044\u79C1", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 22, idolId: 4, title: "Fluorite", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 23, idolId: 5, title: "\u767D\u7DDA", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 24, idolId: 6, title: "Wonder Scale", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 25, idolId: 7, title: "Tame-Lie-One-Step", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 26, idolId: 8, title: "\u5149\u666F", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 27, idolId: 9, title: "clumsy trick", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 28, idolId: 2, title: "\u30A2\u30A4\u30F4\u30A4", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 29, idolId: 10, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 30, idolId: 10, title: "\u30A2\u30A4\u30C9\u30EB\u3001\u306F\u3058\u3081\u3063\uFF01", rarity: "SR", plan: "logic", recommendedEffect: "motivation" }, { id: 31, idolId: 10, title: "The Rolling Riceball", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 32, idolId: 3, title: "Yellow Big Bang\uFF01", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 33, idolId: 1, title: "Boom Boom Pow", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 34, idolId: 4, title: "\u30AD\u30DF\u3068\u30BB\u30DF\u30D6\u30EB\u30FC", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 35, idolId: 7, title: "\u30AD\u30DF\u3068\u30BB\u30DF\u30D6\u30EB\u30FC", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 36, idolId: 9, title: "\u30AD\u30DF\u3068\u30BB\u30DF\u30D6\u30EB\u30FC", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 37, idolId: 8, title: "\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 38, idolId: 1, title: "\u51A0\u83CA", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 39, idolId: 5, title: "\u51A0\u83CA", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 40, idolId: 3, title: "\u51A0\u83CA", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 41, idolId: 1, title: "\u521D\u58F0", rarity: "R", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 42, idolId: 2, title: "\u521D\u58F0", rarity: "R", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 43, idolId: 3, title: "\u521D\u58F0", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 44, idolId: 6, title: "\u65E5\u3005\u3001\u767A\u898B\u7684\u30B9\u30C6\u30C3\u30D7\uFF01", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 45, idolId: 5, title: "\u521D\u5FC3", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 46, idolId: 6, title: "\u521D\u5FC3", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 47, idolId: 9, title: "\u521D\u5FC3", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 48, idolId: 9, title: "\u3088\u3046\u3053\u305D\u521D\u661F\u6E29\u6CC9", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 49, idolId: 6, title: "\u3088\u3046\u3053\u305D\u521D\u661F\u6E29\u6CC9", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 50, idolId: 4, title: "Feel Jewel Dream", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 51, idolId: 6, title: "\u4EEE\u88C5\u72C2\u9A12\u66F2", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 52, idolId: 2, title: "\u4EEE\u88C5\u72C2\u9A12\u66F2", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 53, idolId: 8, title: "\u4EEE\u88C5\u72C2\u9A12\u66F2", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 54, idolId: 4, title: "\u521D\u604B", rarity: "R", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 55, idolId: 7, title: "\u521D\u604B", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 56, idolId: 8, title: "\u521D\u604B", rarity: "R", plan: "sense", recommendedEffect: "concentration" }, { id: 57, idolId: 9, title: "L.U.V", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 58, idolId: 1, title: "\u53E4\u4ECA\u6771\u897F\u3061\u3087\u3061\u3087\u3044\u306E\u3061\u3087\u3044", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 59, idolId: 11, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "anomaly", recommendedEffect: "strength" }, { id: 60, idolId: 11, title: "\u4E00\u756A\u661F", rarity: "SR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 61, idolId: 11, title: "\u5C0F\u3055\u306A\u91CE\u671B", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 62, idolId: 3, title: "White Night! White Wish!", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 63, idolId: 10, title: "White Night! White Wish!", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 64, idolId: 5, title: "White Night! White Wish!", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 65, idolId: 7, title: "\u30AB\u30AF\u30B7\u30BF\u30EF\u30BF\u30B7", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 66, idolId: 1, title: "Campus mode!!", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 67, idolId: 2, title: "Campus mode!!", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 68, idolId: 3, title: "Campus mode!!", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 69, idolId: 4, title: "Campus mode!!", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 70, idolId: 11, title: "Campus mode!!", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 71, idolId: 9, title: "Campus mode!!", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 72, idolId: 6, title: "Campus mode!!", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 73, idolId: 8, title: "Campus mode!!", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 74, idolId: 10, title: "Campus mode!!", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 75, idolId: 5, title: "Campus mode!!", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 76, idolId: 7, title: "Campus mode!!", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 77, idolId: 8, title: "\u30CF\u30C3\u30D4\u30FC\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 78, idolId: 9, title: "\u30CF\u30C3\u30D4\u30FC\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 79, idolId: 11, title: "\u30CF\u30C3\u30D4\u30FC\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 80, idolId: 2, title: "\u96EA\u89E3\u3051\u306B", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 81, idolId: 6, title: "\u96EA\u89E3\u3051\u306B", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 82, idolId: 4, title: "\u96EA\u89E3\u3051\u306B", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 83, idolId: 5, title: "\u6975\u5149", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 84, idolId: 5, title: "\u685C\u30D5\u30A9\u30C8\u30B0\u30E9\u30D5", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 85, idolId: 7, title: "\u685C\u30D5\u30A9\u30C8\u30B0\u30E9\u30D5", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 86, idolId: 1, title: "\u685C\u30D5\u30A9\u30C8\u30B0\u30E9\u30D5", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 87, idolId: 11, title: "Our Chant", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 88, idolId: 1, title: "\u96E8\u4E0A\u304C\u308A\u306E\u30A2\u30A4\u30EA\u30B9", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 89, idolId: 2, title: "\u96E8\u4E0A\u304C\u308A\u306E\u30A2\u30A4\u30EA\u30B9", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 90, idolId: 3, title: "\u96E8\u4E0A\u304C\u308A\u306E\u30A2\u30A4\u30EA\u30B9", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 91, idolId: 12, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "anomaly", recommendedEffect: "preservation" }, { id: 92, idolId: 12, title: "\u3086\u3063\u304F\u308A\u3001\u4E00\u6B69\u305A\u3064", rarity: "SR", plan: "anomaly", recommendedEffect: "preservation" }, { id: 93, idolId: 12, title: "\u30C4\u30AD\u30CE\u30AB\u30E1", rarity: "SSR", plan: "anomaly", recommendedEffect: "preservation" }, { id: 94, idolId: 6, title: "Howling over the World", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 95, idolId: 9, title: "Howling over the World", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 96, idolId: 5, title: "Howling over the World", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 97, idolId: 7, title: "Love & Joy", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 98, idolId: 12, title: "Campus mode!!", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 99, idolId: 11, title: "\u521D\u9663", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 100, idolId: 12, title: "\u521D\u9663", rarity: "R", plan: "logic", recommendedEffect: "motivation" }, { id: 101, idolId: 10, title: "\u521D\u9663", rarity: "R", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 102, idolId: 8, title: "\u30B5\u30F3\u30D5\u30A7\u30FC\u30C7\u30C3\u30C9", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 103, idolId: 10, title: "Star-mine", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 104, idolId: 12, title: "Star-mine", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 105, idolId: 11, title: "Star-mine", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 106, idolId: 3, title: "\u81EA\u5DF1\u80AF\u5B9A\u611F\u7206\u4E0A\u3052\u2191\u2191\u3057\u3085\u304D\u3057\u3085\u304D\u30BD\u30F3\u30B0", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 107, idolId: 4, title: "\u30DF\u30E9\u30AF\u30EB\u30CA\u30CA\u30A6(\uFF9F\u2200\uFF9F)\uFF01", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 108, idolId: 7, title: "\u30DF\u30E9\u30AF\u30EB\u30CA\u30CA\u30A6(\uFF9F\u2200\uFF9F)\uFF01", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 109, idolId: 8, title: "\u30DF\u30E9\u30AF\u30EB\u30CA\u30CA\u30A6(\uFF9F\u2200\uFF9F)\uFF01", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 110, idolId: 9, title: "36\u2103 U\u30FBB\u30FBU", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 111, idolId: 3, title: "\u304C\u3080\u3057\u3083\u3089\u306B\u884C\u3053\u3046\uFF01", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 112, idolId: 1, title: "\u304C\u3080\u3057\u3083\u3089\u306B\u884C\u3053\u3046\uFF01", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 113, idolId: 2, title: "\u304C\u3080\u3057\u3083\u3089\u306B\u884C\u3053\u3046\uFF01", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 114, idolId: 6, title: "\u7A7A\u3068\u7D04\u675F", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 115, idolId: 4, title: "\u898B\u3066", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 116, idolId: 13, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "anomaly", recommendedEffect: "strength" }, { id: 117, idolId: 13, title: "\u521D\u5FD7\u8CAB\u5FB9", rarity: "SR", plan: "logic", recommendedEffect: "motivation" }, { id: 118, idolId: 13, title: "\u7406\u8AD6\u6B66\u88C5\u3057\u3066", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 119, idolId: 10, title: "\u30B0\u30FC\u30B9\u30FC\u30D4\u30FC", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 120, idolId: 5, title: "Atmosphere", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 121, idolId: 13, title: "Campus mode!!", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 122, idolId: 12, title: "Superlative", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 123, idolId: 2, title: "\u4E00\u4F53\u3044\u3064\u304B\u3089", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 124, idolId: 6, title: "\u307F\u3061\u306A\u308B\u3072\u308D\u304C\u308B", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 125, idolId: 8, title: "\u307F\u3061\u306A\u308B\u3072\u308D\u304C\u308B", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 126, idolId: 11, title: "\u8D64\u88F8\u3005", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 127, idolId: 10, title: "ENDLESS DANCE", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 128, idolId: 12, title: "ENDLESS DANCE", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 129, idolId: 11, title: "ENDLESS DANCE", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 130, idolId: 1, title: "Wildest Flower", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 131, idolId: 14, title: "", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 132, idolId: 14, title: "", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 133, idolId: 14, title: "", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 134, idolId: 5, title: "\u3068\u304D\u3081\u304D\u30A8\u30E2\u30FC\u30B7\u30E7\u30F3", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 135, idolId: 7, title: "\u3068\u304D\u3081\u304D\u30A8\u30E2\u30FC\u30B7\u30E7\u30F3", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 136, idolId: 10, title: "\u771F\u3063\u767D\u3044\u30DA\u30FC\u30B8\u3068\u6C34\u5F69\u306E\u4E3B\u4EBA\u516C", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 137, idolId: 12, title: "VEIL", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 138, idolId: 2, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 139, idolId: 9, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 140, idolId: 8, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 141, idolId: 5, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 142, idolId: 4, title: "SUGAR FLAVOR", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 143, idolId: 9, title: "SUGAR FLAVOR", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 144, idolId: 3, title: "GO MY WAY!!", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 145, idolId: 1, title: "GO MY WAY!!", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 146, idolId: 10, title: "GO MY WAY!!", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 147, idolId: 13, title: "\u30AF\u30E9\u30A4\u30A2\u30A4", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 148, idolId: 1, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 149, idolId: 2, title: "\u300C\u306D\u3048\u3001\u8A00\u3063\u3061\u3083\u3046\u3088\u3002\u300D", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 150, idolId: 11, title: "\u300C\u306D\u3048\u3001\u8A00\u3063\u3061\u3083\u3046\u3088\u3002\u300D", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 151, idolId: 12, title: "\u300C\u306D\u3048\u3001\u8A00\u3063\u3061\u3083\u3046\u3088\u3002\u300D", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 152, idolId: 4, title: "\u6A19", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 153, idolId: 6, title: "\u6A19", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 154, idolId: 7, title: "\u6A19", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 155, idolId: 11, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 156, idolId: 8, title: "\u3081", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 157, idolId: 10, title: "Agitato", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 158, idolId: 5, title: "Agitato", rarity: "SSR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 159, idolId: 1, title: "Agitato", rarity: "SSR", plan: "logic", recommendedEffect: "motivation" }, { id: 160, idolId: 11, title: "Roar", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 161, idolId: 13, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "anomaly", recommendedEffect: "strength" }, { id: 162, idolId: 6, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "anomaly", recommendedEffect: "fullPower" }, { id: 163, idolId: 12, title: "\u30AC\u30E9\u30AF\u30BF\u30ED\u30FC\u30C9", rarity: "SSR", plan: "logic", recommendedEffect: "goodImpressionTurns" }, { id: 164, idolId: 15, title: "\u30E1\u30BF\u30E2\u30EB\u30D5\u30A9\u30FC\u30BC", rarity: "SSR", plan: "sense", recommendedEffect: "concentration" }, { id: 165, idolId: 15, title: "\u61A7\u308C\u3092\u62B1\u3044\u3066\u4E00\u6B69\u305A\u3064", rarity: "SR", plan: "sense", recommendedEffect: "goodConditionTurns" }, { id: 166, idolId: 15, title: "\u5B66\u5712\u751F\u6D3B", rarity: "R", plan: "sense", recommendedEffect: "concentration" }];

  // vendor/gakumas-data/data/pIdols.js
  p_idols_default.forEach((pIdol) => {
    pIdol._type = "pIdol";
  });
  var P_IDOLS_BY_ID = p_idols_default.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
  var PIdols = class {
    static getAll() {
      return p_idols_default;
    }
    static getById(id) {
      return P_IDOLS_BY_ID[id];
    }
    static getFiltered({ idolIds, rarities, plans, recommendedEffects }) {
      return p_idols_default.filter((pIdol) => {
        if (idolIds && !idolIds.includes(pIdol.idolId)) return false;
        if (rarities && !rarities.includes(pIdol.rarity)) return false;
        if (plans && !plans.includes(pIdol.plan)) return false;
        if (recommendedEffects && !recommendedEffects.includes(pIdol.recommendedEffect))
          return false;
        return true;
      });
    }
  };
  var pIdols_default = PIdols;

  // vendor/gakumas-data/data/idolRoad.js
  function parseTriple(value, parse) {
    const [vocal, dance, visual] = String(value).split(",").map((p) => parse(p));
    return { vocal, dance, visual };
  }
  function createIdolRoad(stageRows, effectRows) {
    const byIdol = /* @__PURE__ */ Object.create(null);
    for (const row of stageRows) {
      byIdol[`${row.stageId}:${row.idolId}`] = {
        criteria: parseTriple(row.criteria, parseFloat),
        turnCounts: parseTriple(row.turnCounts, (p) => parseInt(p, 10)),
        firstTurns: parseTriple(row.firstTurns, parseFloat)
      };
    }
    const byEffect = /* @__PURE__ */ Object.create(null);
    for (const row of effectRows) {
      byEffect[`${row.stageId}:${row.recommendedEffect}`] = { src: row.effects };
    }
    function getSupportEffects(stageId, recommendedEffect) {
      const entry = byEffect[`${stageId}:${recommendedEffect}`];
      if (!entry) return [];
      entry.parsed ??= deserializeEffectSequence(entry.src);
      return entry.parsed;
    }
    return {
      // Returns the stage as the given P-idol plays it. Stages that aren't
      // Idol Road, and unknown P-idols, come back unchanged.
      resolveStage(stage, pIdolId) {
        if (stage?.type !== "idolRoad") return stage;
        const pIdol = pIdols_default.getById(pIdolId);
        if (!pIdol) return stage;
        const resolved = { ...stage, pIdolId: pIdol.id };
        const idolRow = byIdol[`${stage.id}:${pIdol.idolId}`];
        if (idolRow) Object.assign(resolved, idolRow);
        if (pIdol.plan) resolved.plan = pIdol.plan;
        const supportEffects = getSupportEffects(
          stage.id,
          pIdol.recommendedEffect
        );
        if (supportEffects.length) {
          resolved.effects = [...stage.effects || [], ...supportEffects];
        }
        return resolved;
      }
    };
  }
  var IdolRoad = createIdolRoad(idol_road_stages_default, idol_road_effects_default);
  var idolRoad_default = IdolRoad;

  // vendor/gakumas-data/csv/p_items.csv
  var p_items_default = [{ id: 1, name: "\u306F\u3064\u307C\u3057\u30D6\u30ED\u30FC\u30C1", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 2, name: "\u306F\u3064\u307C\u3057\u30D6\u30EC\u30B9\u30EC\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 3, name: "\u306F\u3064\u307C\u3057\u624B\u5E33", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:concentration>=5 { cardUsesRemaining+=1; concentration+=2 }; limit:1 }" }, { id: 4, name: "\u306F\u3064\u307C\u3057T\u30B7\u30E3\u30C4", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=1 { cardUsesRemaining+=1; goodConditionTurns+=2 }; limit:1 }" }, { id: 5, name: "\u306F\u3064\u307C\u3057\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:goodImpressionTurns>=3 { cardUsesRemaining+=1; goodImpressionTurns+=3 }; limit:1 }" }, { id: 6, name: "\u30DE\u30B9\u30B3\u30C3\u30C8\uFF08\u975E\u516C\u8A8D\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:motivation>=5 { cardUsesRemaining+=1; motivation+=3 }; limit:1 }" }, { id: 7, name: "\u3070\u304F\u304A\u3093\u30E9\u30A4\u30AA\u30F3", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 1, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=1 { score+=6 }; limit:1 }" }, { id: 8, name: "\u3070\u304F\u304A\u3093\u30E9\u30A4\u30AA\u30F3+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 1, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=1 { score+=11 }; limit:1 }" }, { id: 9, name: "\u5FC5\u643A\u30B9\u30C6\u30F3\u30EC\u30B9\u30DC\u30C8\u30EB", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 2, welfare: false, effects: "at:startOfTurn { if:concentration>=3 { concentration+=4 }; limit:1 }" }, { id: 10, name: "\u5FC5\u643A\u30B9\u30C6\u30F3\u30EC\u30B9\u30DC\u30C8\u30EB+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 2, welfare: false, effects: "at:startOfTurn { if:concentration>=3 { concentration+=6 }; limit:1 }" }, { id: 11, name: "\u3061\u3073\u3069\u3082\u624B\u4F5C\u308A\u30E1\u30C0\u30EB", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 3, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=6 { goodImpressionTurns+=2 }; limit:2 }" }, { id: 12, name: "\u3061\u3073\u3069\u3082\u624B\u4F5C\u308A\u30E1\u30C0\u30EB+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 3, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=6 { goodImpressionTurns+=2 }; limit:3 }" }, { id: 13, name: "\u7D33\u58EB\u98A8\u30CF\u30F3\u30AB\u30C1\u30FC\u30D5", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 4, welfare: false, effects: "at:afterStartOfTurn { if:goodConditionTurns>=1 { concentration+=1 }; limit:2 }" }, { id: 14, name: "\u7D33\u58EB\u98A8\u30CF\u30F3\u30AB\u30C1\u30FC\u30D5+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 4, welfare: false, effects: "at:afterStartOfTurn { if:goodConditionTurns>=1 { concentration+=2 }; limit:2 }" }, { id: 15, name: "\u7DD1\u306E\u304A\u63C3\u3044\u30D6\u30EC\u30B9", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 5, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { goodImpressionTurns+=3 }; limit:1 }" }, { id: 16, name: "\u7DD1\u306E\u304A\u63C3\u3044\u30D6\u30EC\u30B9+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 5, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { goodImpressionTurns+=5 }; limit:1 }" }, { id: 17, name: "\u9858\u3044\u3092\u53F6\u3048\u308B\u304A\u5B88\u308A", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 6, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { motivation+=2 }; limit:1 }" }, { id: 18, name: "\u9858\u3044\u3092\u53F6\u3048\u308B\u304A\u5B88\u308A+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 6, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { motivation+=3 }; limit:1 }" }, { id: 19, name: "\u30D4\u30F3\u30AF\u306E\u304A\u63C3\u3044\u30D6\u30EC\u30B9", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 7, welfare: false, effects: "at:startOfTurn { concentration+=1; limit:2 }" }, { id: 20, name: "\u30D4\u30F3\u30AF\u306E\u304A\u63C3\u3044\u30D6\u30EC\u30B9+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 7, welfare: false, effects: "at:startOfTurn { concentration+=1; limit:3 }" }, { id: 21, name: "\u8D85\u7D76\u3042\u3093\u307F\u3093\u30DE\u30B9\u30AF", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 8, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=genki*0.5; fixedStamina-=1 } }" }, { id: 22, name: "\u8D85\u7D76\u3042\u3093\u307F\u3093\u30DE\u30B9\u30AF+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 8, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=genki*0.7; fixedStamina-=1 } }" }, { id: 23, name: "\u3044\u3064\u3082\u306E\u30E1\u30A4\u30AF\u30DD\u30FC\u30C1", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 9, welfare: false, effects: "at:cardUsed[active] { if:stamina>=maxStamina*0.5 { concentration+=2 }; limit:1 }" }, { id: 24, name: "\u3044\u3064\u3082\u306E\u30E1\u30A4\u30AF\u30DD\u30FC\u30C1+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 9, welfare: false, effects: "at:cardUsed[active] { if:stamina>=maxStamina*0.5 { concentration+=3 }; limit:1 }" }, { id: 25, name: "\u54B2\u5B63\u306E\u5B8C\u5168\u98DF\u30EC\u30B7\u30D4", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 10, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=1 { genki+=9 }; limit:1 }" }, { id: 26, name: "\u54B2\u5B63\u306E\u5B8C\u5168\u98DF\u30EC\u30B7\u30D4+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 10, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=1 { genki+=12 }; limit:1 }" }, { id: 27, name: "\u79C1\u306E\u300C\u521D\u300D\u306E\u697D\u8B5C", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 11, welfare: false, effects: "at:startOfTurn { if:genki==0 { cost-=1; concentration+=3 }; limit:2 }" }, { id: 28, name: "\u79C1\u306E\u300C\u521D\u300D\u306E\u697D\u8B5C+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 11, welfare: false, effects: "at:startOfTurn { if:genki==0 { cost-=1; concentration+=4 }; limit:2 }" }, { id: 29, name: "\u304A\u6C17\u306B\u306E\u30B9\u30CB\u30FC\u30AB\u30FC", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 12, welfare: false, effects: "at:endOfTurn { if:genki>=7 { goodImpressionTurns+=4 }; limit:1 }" }, { id: 30, name: "\u304A\u6C17\u306B\u306E\u30B9\u30CB\u30FC\u30AB\u30FC+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 12, welfare: false, effects: "at:endOfTurn { if:genki>=7 { goodImpressionTurns+=5 }; limit:1 }" }, { id: 31, name: "Dear\u30EA\u30C8\u30EB\u30D7\u30EA\u30F3\u30B9", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 13, welfare: false, effects: "at:goodConditionTurnsIncreased { if:isDirectEffect { goodConditionTurns+=3 }; limit:1 }" }, { id: 32, name: "Dear\u30EA\u30C8\u30EB\u30D7\u30EA\u30F3\u30B9+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 13, welfare: false, effects: "at:goodConditionTurnsIncreased { if:isDirectEffect { goodConditionTurns+=4 }; limit:1 }" }, { id: 33, name: "\u601D\u3044\u51FA\u30ED\u30DC", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 14, welfare: false, effects: "at:endOfTurn { if:stamina>=maxStamina*0.5 { goodImpressionTurns+=3 }; limit:1 }" }, { id: 34, name: "\u601D\u3044\u51FA\u30ED\u30DC+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 14, welfare: false, effects: "at:endOfTurn { if:stamina>=maxStamina*0.5 { goodImpressionTurns+=4 }; limit:1 }" }, { id: 35, name: "\u3057\u3087\u3052\u306A\u3044\u30CF\u30F3\u30AB\u30C1", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 15, welfare: false, effects: "at:afterCardUsed[active] { score+=genki*0.6; fixedStamina-=2; limit:2 }" }, { id: 36, name: "\u3057\u3087\u3052\u306A\u3044\u30CF\u30F3\u30AB\u30C1+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 15, welfare: false, effects: "at:afterCardUsed[active] { score+=genki*0.7; fixedStamina-=2; limit:2 }" }, { id: 37, name: "\u653E\u8AB2\u5F8C\u306E\u3089\u304F\u304C\u304D", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 16, welfare: false, effects: "at:concentrationIncreased { if:isDirectEffect & stamina>=maxStamina*0.5 { concentration+=2 }; limit:2 }" }, { id: 38, name: "\u653E\u8AB2\u5F8C\u306E\u3089\u304F\u304C\u304D+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 16, welfare: false, effects: "at:concentrationIncreased { if:isDirectEffect { concentration+=2 }; limit:2 }" }, { id: 39, name: "\u3060\u308C\u3067\u3082\u308F\u304B\u308B\u5165\u9580\u66F8", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 17, welfare: false, effects: "at:startOfTurn { if:genki>=7 { motivation+=5 }; limit:1 }" }, { id: 40, name: "\u3060\u308C\u3067\u3082\u308F\u304B\u308B\u5165\u9580\u66F8+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 17, welfare: false, effects: "at:startOfTurn { if:genki>=7 { motivation+=6 }; limit:1 }" }, { id: 41, name: "\u304D\u307F\u3078\u306E\u5DEE\u3057\u5165\u308C", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 18, welfare: false, effects: "at:startOfTurn { if:concentration>=5 { fixedStamina+=2 }; limit:3 }" }, { id: 42, name: "\u304D\u307F\u3078\u306E\u5DEE\u3057\u5165\u308C+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 18, welfare: false, effects: "at:startOfTurn { if:concentration>=5 { fixedStamina+=2 }; limit:4 }" }, { id: 43, name: "\u5171\u306B\u6226\u3046\u30BF\u30AA\u30EB", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 19, welfare: false, effects: "at:afterCardUsed[active] { goodConditionTurns+=1; cardUsesRemaining+=1; limit:1 }" }, { id: 44, name: "\u5171\u306B\u6226\u3046\u30BF\u30AA\u30EB+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 19, welfare: false, effects: "at:afterCardUsed[active] { goodConditionTurns+=1; cardUsesRemaining+=1; genki+=5; limit:1 }" }, { id: 45, name: "\u81EA\u5206\u3092\u5B88\u308B\u30A4\u30E4\u30DB\u30F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 20, welfare: false, effects: "at:cardUsed { if:concentration>=5 { cardUsesRemaining+=1; concentration+=1 }; limit:1 }" }, { id: 46, name: "\u81EA\u5206\u3092\u5B88\u308B\u30A4\u30E4\u30DB\u30F3+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 20, welfare: false, effects: "at:cardUsed { if:concentration>=5 { cardUsesRemaining+=1; concentration+=3 }; limit:1 }" }, { id: 47, name: "\u30D4\u30C3\u30B0\u30C9\u30EA\u30FC\u30E0\u8CAF\u91D1\u7BB1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 21, welfare: false, effects: "at:afterCardUsed { if:goodImpressionTurns>=6 { goodImpressionTurns+=3; cardUsesRemaining+=1 }; limit:1 }" }, { id: 48, name: "\u30D4\u30C3\u30B0\u30C9\u30EA\u30FC\u30E0\u8CAF\u91D1\u7BB1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 21, welfare: false, effects: "at:afterCardUsed { if:goodImpressionTurns>=6 { goodImpressionTurns+=5; cardUsesRemaining+=1 }; limit:1 }" }, { id: 49, name: "\u5185\u306A\u308B\u5149\u306E\u8033\u98FE\u308A", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 22, welfare: false, effects: "at:afterStartOfTurn { if:goodConditionTurns>=1 { concentration+=2; genki+=1 }; limit:2 }" }, { id: 50, name: "\u5185\u306A\u308B\u5149\u306E\u8033\u98FE\u308A+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 22, welfare: false, effects: "at:afterStartOfTurn { if:goodConditionTurns>=1 { concentration+=3; genki+=1 }; limit:2 }" }, { id: 51, name: "\u5922\u3078\u306E\u30E9\u30A4\u30D5\u30ED\u30B0", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 23, welfare: false, effects: "at:endOfTurn { if:genki>=7 { goodImpressionTurns*=1.5; score+=goodImpressionTurns*0.3 }; limit:1 }" }, { id: 52, name: "\u5922\u3078\u306E\u30E9\u30A4\u30D5\u30ED\u30B0+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 23, welfare: false, effects: "at:endOfTurn { if:genki>=7 { goodImpressionTurns*=1.5; score+=goodImpressionTurns }; limit:1 }" }, { id: 53, name: "\u3072\u307F\u3064\u7279\u8A13\u30AB\u30FC\u30C7", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 24, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { motivation+=3 }; limit:2 }" }, { id: 54, name: "\u3072\u307F\u3064\u7279\u8A13\u30AB\u30FC\u30C7+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 24, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { motivation+=3 }; limit:3 }" }, { id: 55, name: "\u30B2\u30FC\u30BB\u30F3\u306E\u6226\u5229\u54C1", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 25, welfare: false, effects: "at:startOfStage { concentration+=3; limit:1 }" }, { id: 56, name: "\u30B2\u30FC\u30BB\u30F3\u306E\u6226\u5229\u54C1+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 25, welfare: false, effects: "at:startOfStage { concentration+=4; limit:1 }" }, { id: 57, name: "\u307F\u3061\u304F\u3055\u7814\u7A76\u30CE\u30FC\u30C8", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 26, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=genki*0.5; fixedStamina-=1 } }" }, { id: 58, name: "\u307F\u3061\u304F\u3055\u7814\u7A76\u30CE\u30FC\u30C8+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 26, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=genki*0.65; fixedStamina-=1 } }" }, { id: 59, name: "\u7B49\u8EAB\u5927\u306E\u30EC\u30C7\u30A3\u30EA\u30C3\u30D7", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 27, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=5 }; limit:2 }" }, { id: 60, name: "\u7B49\u8EAB\u5927\u306E\u30EC\u30C7\u30A3\u30EA\u30C3\u30D7+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 27, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=3 { score+=5 }; limit:3 }" }, { id: 61, name: "\u7F8E\u9234\u304B\u3089\u306E\u8D08\u308A\u7269", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 62, name: "\u6253\u5012\uFF01\u58BE\u7530\u6C38\u5E74\u79C1\u8CA1\u6CD5", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 63, name: "\u624B\u4F5C\u308A\u306E\u3054\u8912\u7F8E", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 64, name: "\u3075\u308F\u3075\u308F\u3067\u3082\u3053\u3082\u3053", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 65, name: "\u304A\u59C9\u3055\u307E\u5927\u767E\u79D1", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 66, name: "\u4F8B\u306ESSD\u306E\u79D8\u5BC6", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 67, name: "\u4E00\u7DD2\u306B\u304A\u663C\u5BDD\u30DD\u30D7\u30EA", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 68, name: "\u79C1\u304C\u898B\u3064\u3051\u305F\u9038\u6750\u30E1\u30E2", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 69, name: "\u671D\u4E00\u306E\u52A9\u3051\u821F", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 70, name: "\u8A93\u3044\u306E\u82B1\u3073\u3089", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 71, name: "\u5F97\u4F53\u306E\u3057\u308C\u306A\u3044\u30E2\u30CE", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn { setScoreBuff(0.5,1) }; limit:3 }" }, { id: 72, name: "\u661F\u306E\u30EA\u30C8\u30EB\u30D7\u30EA\u30F3\u30B9", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn { fixedGenki+=2 } }" }, { id: 73, name: "\u6094\u3057\u3055\u306E\u8C61\u5FB4", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn { setScoreBuff(0.5,1) }; limit:3 }" }, { id: 74, name: "\u66C7\u308A\u3092\u306C\u3050\u3063\u305F\u30BF\u30AA\u30EB", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed[active] { if:isVocalTurn { fixedStamina+=2 }; limit:3 }" }, { id: 75, name: "\u30B9\u30AB\u30A6\u30C8\u906E\u308A\u5E3D", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfTurn { if:isVocalTurn { drawCard; fixedGenki+=2 }; limit:3 }" }, { id: 76, name: "\u4FE1\u983C\u306E\u8A3C", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 77, name: "\u6E80\u958B\u30DA\u30A2\u30D8\u30A2\u30D4\u30F3", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed[active] { if:isVisualTurn { fixedStamina+=2 }; limit:3 }" }, { id: 78, name: "\u4EF2\u76F4\u308A\u306E\u304D\u3063\u304B\u3051", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn { cardUsesRemaining+=1 }; limit:1 }" }, { id: 79, name: "\u5922\u306B\u3042\u3075\u308C\u305F\u5927\u8377\u7269", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn { cardUsesRemaining+=1 }; limit:1 }" }, { id: 80, name: "\u3053\u308C\u304C\u3001\u79C1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 28, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=10 { score+=goodImpressionTurns; genki+=3 }; limit:2 }" }, { id: 81, name: "\u3053\u308C\u304C\u3001\u79C1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 28, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=10 { score+=goodImpressionTurns; genki+=3 }; limit:3 }" }, { id: 82, name: "\u5929\u5DDD\u30E9\u30FC\u30E1\u30F3\u5DE1\u308A", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn { cardUsesRemaining+=1 }; limit:1 }" }, { id: 83, name: "\u30C6\u30AF\u30CE\u30C9\u30C3\u30B0", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 29, welfare: false, effects: "at:afterCardUsed { if:motivation>=3 { motivation+=2 }; limit:1 }" }, { id: 84, name: "\u30C6\u30AF\u30CE\u30C9\u30C3\u30B0+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 29, welfare: false, effects: "at:afterCardUsed { if:motivation>=3 { motivation+=3 }; limit:1 }" }, { id: 85, name: "\u67F4\u72AC\u30DD\u30B7\u30A7\u30C3\u30C8", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 30, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 { genki+=5 }; limit:2 }" }, { id: 86, name: "\u67F4\u72AC\u30DD\u30B7\u30A7\u30C3\u30C8+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 30, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 { genki+=5 }; limit:3 }" }, { id: 87, name: "\u8EE2\u304C\u308A\u7D9A\u3051\u308B\u5143\u6C17\u306E\u6E90", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 31, welfare: false, effects: "at:afterCardUsed[mental] { if:motivation>=5 { motivation+=3; cardUsesRemaining+=1 }; limit:1 }" }, { id: 88, name: "\u8EE2\u304C\u308A\u7D9A\u3051\u308B\u5143\u6C17\u306E\u6E90+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 31, welfare: false, effects: "at:afterCardUsed[mental] { if:motivation>=5 { motivation+=5; cardUsesRemaining+=1 }; limit:1 }" }, { id: 89, name: "\u6700\u9AD8\u306B\u30CF\u30C3\u30D4\u30FC\u306E\u6E90", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 32, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==278 { goodConditionTurns+=3; fixedGenki+=5 }; limit:1 }" }, { id: 90, name: "\u6700\u9AD8\u306B\u30CF\u30C3\u30D4\u30FC\u306E\u6E90+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 32, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==278 { goodConditionTurns+=3; fixedGenki+=11 }; limit:1 }" }, { id: 91, name: "\u30C0\u30D6\u30EB\u30DC\u30C8\u30EB", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 92, name: "\u8679\u304B\u3051\u308B\u30AF\u30ED\u30B9", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed[active] { if:isDanceTurn { fixedStamina+=2 }; limit:3 }" }, { id: 93, name: "\u52DD\u3061\u3078\u306E\u3053\u3060\u308F\u308A", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 33, welfare: false, effects: "at:staminaDecreased { if:isDirectEffect { goodImpressionTurns+=2 }; limit:4 }" }, { id: 94, name: "\u52DD\u3061\u3078\u306E\u3053\u3060\u308F\u308A+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 33, welfare: false, effects: "at:staminaDecreased { if:isDirectEffect { goodImpressionTurns+=2 } }" }, { id: 95, name: "\u54B2\u5B63\u30AA\u30B9\u30B9\u30E1\u30DE\u30C3\u30C8", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 96, name: "\u6700\u5F8C\u306E\u590F\u306E\u601D\u3044\u51FA", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 34, welfare: false, effects: "at:startOfTurn { if:concentration>=3 { genki+=10 }; limit:1 }" }, { id: 97, name: "\u6700\u5F8C\u306E\u590F\u306E\u601D\u3044\u51FA+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 34, welfare: false, effects: "at:startOfTurn { if:concentration>=3 { genki+=14 }; limit:1 }" }, { id: 98, name: "\u30AB\u30A8\u30EB\u5370\u306E\u6247\u98A8\u6A5F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 35, welfare: false, effects: "at:afterCardUsed[active] { if:motivation>=12 { score+=motivation*2.7; fixedStamina-=2 }; limit:4 }" }, { id: 99, name: "\u30AB\u30A8\u30EB\u5370\u306E\u6247\u98A8\u6A5F+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 35, welfare: false, effects: "at:afterCardUsed[active] { if:motivation>=12 { score+=motivation*3.4; fixedStamina-=2 }; limit:4 }" }, { id: 100, name: "\u8CA0\u3051\u305A\u5ACC\u3044\u306E\u52F2\u7AE0", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn { score+=motivation*0.5 } }" }, { id: 101, name: "\u304D\u307F\u3068\u5206\u3051\u5408\u3046\u590F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 36, welfare: false, effects: "at:afterStartOfTurn { if:halfCostTurns>=1 { perfectConditionTurns+=1; drawCard }; limit:2 }" }, { id: 102, name: "\u304D\u307F\u3068\u5206\u3051\u5408\u3046\u590F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 36, welfare: false, effects: "at:afterStartOfTurn { if:halfCostTurns>=1 { perfectConditionTurns+=1; drawCard }; limit:3 }" }, { id: 103, name: "\u53EF\u611B\u3044\u96A0\u3057\u30D0\u30B9\u30BF\u30AA\u30EB", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 104, name: "\u307E\u3060\u898B\u306C\u4E16\u754C\u3078", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 37, welfare: false, effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.5 { concentration+=5; costReduction+=2; upgradeHand }; limit:1 }" }, { id: 105, name: "\u307E\u3060\u898B\u306C\u4E16\u754C\u3078+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 37, welfare: false, effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.5 { concentration+=7; costReduction+=3; upgradeHand }; limit:1 }" }, { id: 106, name: "\u30AA\u30FC\u30D0\u30FC\u30D1\u30EF\u30FC\u30DC\u30FC\u30EB", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn { concentration+=4; fixedStamina-=2 }; limit:1 }" }, { id: 107, name: "\u30A6\u30C1\u30E5\u30A6\u30B8\u30F3\u30C7\u30A2\u30EB", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 108, name: "\u6557\u308C\u77E5\u3089\u305A\u306E\u30DD\u30A4", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 38, welfare: false, effects: "at:startOfTurn { if:goodImpressionTurns>=6 { fixedStamina+=4 }; limit:2 }" }, { id: 109, name: "\u6557\u308C\u77E5\u3089\u305A\u306E\u30DD\u30A4+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 38, welfare: false, effects: "at:startOfTurn { if:goodImpressionTurns>=6 { fixedStamina+=5 }; limit:2 }" }, { id: 110, name: "\u74F6\u306E\u4E2D\u306E\u304D\u3089\u3081\u304D", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 39, welfare: false, effects: "at:endOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=2 }; limit:3 }" }, { id: 111, name: "\u74F6\u306E\u4E2D\u306E\u304D\u3089\u3081\u304D+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 39, welfare: false, effects: "at:endOfTurn { if:goodConditionTurns>=3 { goodConditionTurns+=2 }; limit:4 }" }, { id: 112, name: "\u3071\u3061\u3071\u3061\u7DDA\u9999\u82B1\u706B", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 40, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 & goodImpressionTurns>=6 { genki+=goodImpressionTurns; motivation+=2; fixedStamina-=1 }; limit:4 }" }, { id: 113, name: "\u3071\u3061\u3071\u3061\u7DDA\u9999\u82B1\u706B+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 40, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 & goodImpressionTurns>=6 { genki+=goodImpressionTurns; motivation+=3; fixedStamina-=1 } }" }, { id: 114, name: "873\u30B7\u30E5\u30FC\u30BF\u30FC", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn { goodImpressionTurns+=2; fixedStamina+=1 }; limit:2 }" }, { id: 115, name: "\u30CF\u30F3\u30BF\u30FC\u306E\u6226\u5229\u54C1", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 116, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u54B2\u5B63", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 41, welfare: false, effects: "at:staminaDecreased { if:isDirectEffect { goodImpressionTurns+=2 }; limit:2 }" }, { id: 117, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u54B2\u5B63+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 41, welfare: false, effects: "at:staminaDecreased { if:isDirectEffect { goodImpressionTurns+=2 }; limit:3 }" }, { id: 118, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u624B\u6BEC", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 42, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=6 { score+=goodImpressionTurns }; limit:2 }" }, { id: 119, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u624B\u6BEC+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 42, welfare: false, effects: "at:endOfTurn { if:goodImpressionTurns>=6 { score+=goodImpressionTurns }; limit:3 }" }, { id: 120, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u3053\u3068\u306D", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 43, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==326 { goodConditionTurns+=2 }; limit:1 }" }, { id: 121, name: "\u521D\u58F0\u306E\u8A3C\u30FB\u3053\u3068\u306D+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 43, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==326 { goodConditionTurns+=2; fixedGenki+=5 }; limit:1 }" }, { id: 122, name: "\u3068\u304D\u3081\u304D\u306E\u3044\u3063\u3071\u3044", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 44, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=3+3*cardsUsed; fixedStamina-=2 }; limit:1 }" }, { id: 123, name: "\u3068\u304D\u3081\u304D\u306E\u3044\u3063\u3071\u3044+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 44, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=5+3*cardsUsed; fixedStamina-=1 }; limit:1 }" }, { id: 124, name: "\u307B\u3063\u3053\u308A\u307E\u3093\u3077\u304F", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 125, name: "\u304D\u3063\u304B\u3051\u306E\u5E2F", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 126, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u30EA\u30FC\u30EA\u30E4", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 45, welfare: false, effects: "at:endOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=2; fixedStamina-=1 }; limit:2 }" }, { id: 127, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u30EA\u30FC\u30EA\u30E4+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 45, welfare: false, effects: "at:endOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=2 }; limit:2 }" }, { id: 128, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u5343\u5948", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 46, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=2+cardsUsed; fixedStamina-=1 }; limit:1 }" }, { id: 129, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u5343\u5948+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 46, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { score+=6+cardsUsed; fixedStamina-=1 }; limit:1 }" }, { id: 130, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u8389\u6CE2", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 47, welfare: false, effects: "at:cardUsed { if:cardsUsed%3==2 { motivation+=2 }; limit:2 }" }, { id: 131, name: "\u521D\u5FC3\u306E\u8A3C\u30FB\u8389\u6CE2+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 47, welfare: false, effects: "at:cardUsed { if:cardsUsed%3==2 { motivation+=3 }; limit:2 }" }, { id: 132, name: "\u3071\u305F\u3071\u305F\u3046\u3061\u308F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 48, welfare: false, effects: "at:cardUsed { if:cardsUsed%3==2 { genki+=1; motivation+=3 }; limit:2 }" }, { id: 133, name: "\u3071\u305F\u3071\u305F\u3046\u3061\u308F+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 48, welfare: false, effects: "at:cardUsed { if:cardsUsed%3==2 { genki+=2; motivation+=4 }; limit:2 }" }, { id: 134, name: "\u5927\u304D\u304F\u3066\u3064\u3084\u3064\u3084", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 135, name: "\u6E29\u6CC9\u306E\u5F8C\u306E\u304A\u697D\u3057\u307F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 49, welfare: false, effects: "at:cardUsed { if:cardsUsed%4==3 { concentration*=1.3; fixedGenki+=2 }; limit:2 }" }, { id: 136, name: "\u6E29\u6CC9\u306E\u5F8C\u306E\u304A\u697D\u3057\u307F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 49, welfare: false, effects: "at:cardUsed { if:cardsUsed%4==3 { concentration*=1.3; fixedGenki+=7 }; limit:2 }" }, { id: 137, name: "\u3068\u3046\u3061\u3087\u30FC\u306E\u304D\u308D\u304F", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 138, name: "\u307F\u3093\u306A\u306E\u6559\u79D1\u66F8", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:startOfTurn { if:isVocalTurn & stamina<=maxStamina*0.5 { fixedStamina+=4 }; limit:1 }" }, { id: 139, name: "\u30B9\u30BF\u30A4\u30EA\u30C3\u30B7\u30E5\u30E2\u30FC\u30C9", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 50, welfare: false, effects: "at:startOfTurn { if:motivation>=3 { goodImpressionTurns+=3; motivation-=1 }; limit:3 }" }, { id: 140, name: "\u30B9\u30BF\u30A4\u30EA\u30C3\u30B7\u30E5\u30E2\u30FC\u30C9+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 50, welfare: false, effects: "at:startOfTurn { if:motivation>=3 { goodImpressionTurns+=3; motivation-=1 }; limit:4 }" }, { id: 141, name: "\u3068\u308D\u3051\u305F\u6642\u9593", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn { setScoreBuff(0.5,1) }; limit:3 }" }, { id: 142, name: "\u512A\u3057\u3055\u30DF\u30EB\u30AF\u30B7\u30E5\u30AC\u30FC", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 143, name: "\u3046\uFF5E\u3089\uFF5E\u3081\uFF5E\u3057\uFF5E\u3084\uFF5E", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 51, welfare: false, effects: "at:cardUsed[active] { fixedGenki+=5; limit:2 }" }, { id: 144, name: "\u3046\uFF5E\u3089\uFF5E\u3081\uFF5E\u3057\uFF5E\u3084\uFF5E+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 51, welfare: false, effects: "at:cardUsed[active] { fixedGenki+=7; limit:2 }" }, { id: 145, name: "\u3076\u304D\u3063\u3061\u3087\u30B3\u30A6\u30E2\u30EA", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 52, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 & goodImpressionTurns>=3 { score+=genki*0.9; score+=motivation*1.6; goodImpressionTurns-=2 }; limit:3 }" }, { id: 146, name: "\u3076\u304D\u3063\u3061\u3087\u30B3\u30A6\u30E2\u30EA+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 52, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 & goodImpressionTurns>=3 { score+=genki; score+=motivation*2.3; goodImpressionTurns-=2 }; limit:3 }" }, { id: 147, name: "\u3044\u3058\u3063\u3071\u308A\u30D0\u30EB\u30FC\u30F3", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & goodImpressionTurns>=3 { motivation+=3 }; limit:2 }" }, { id: 148, name: "\u304A\u5B22\u69D8\u306E\u6069\u8FD4\u3057", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & goodImpressionTurns>=6 { score+=goodImpressionTurns*0.8 }; limit:2 }" }, { id: 149, name: "\u3044\u305F\u305A\u3089\u30D1\u30DA\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 53, welfare: false, effects: "at:cardUsed[active] { if:stamina<=maxStamina*0.5 { score+=consumedStamina*1.8; fixedStamina+=5; nullifyGenkiTurns+=2 }; limit:2 }" }, { id: 150, name: "\u3044\u305F\u305A\u3089\u30D1\u30DA\u30C3\u30C8+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 53, welfare: false, effects: "at:cardUsed[active] { if:stamina<=maxStamina*0.5 { score+=consumedStamina*2.2; fixedStamina+=6; nullifyGenkiTurns+=2 }; limit:2 }" }, { id: 151, name: "\u3064\u3084\u3064\u3084\u3067\u3075\u3055\u3075\u3055", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 152, name: "\u521D\u604B\u306E\u8A3C\u30FB\u9EBB\u592E", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 54, welfare: false, effects: "at:startOfTurn { if:motivation>=3 { goodImpressionTurns+=3; motivation-=1 }; limit:1 }" }, { id: 153, name: "\u521D\u604B\u306E\u8A3C\u30FB\u9EBB\u592E+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 54, welfare: false, effects: "at:startOfTurn { if:motivation>=3 { goodImpressionTurns+=3; motivation-=1 }; limit:2 }" }, { id: 154, name: "\u521D\u604B\u306E\u8A3C\u30FB\u6E05\u590F", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 55, welfare: false, effects: "at:afterCardUsed { if:motivation>=8 { score+=motivation*1.5; fixedStamina-=1 }; limit:2 }" }, { id: 155, name: "\u521D\u604B\u306E\u8A3C\u30FB\u6E05\u590F+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 55, welfare: false, effects: "at:afterCardUsed { if:motivation>=8 { score+=motivation*2.1; fixedStamina-=1 }; limit:2 }" }, { id: 156, name: "\u521D\u604B\u306E\u8A3C\u30FB\u5E83", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 56, welfare: false, effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.5 { concentration+=2; costReduction+=1; upgradeRandomCardInHand }; limit:1; group:1 }" }, { id: 157, name: "\u521D\u604B\u306E\u8A3C\u30FB\u5E83+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 56, welfare: false, effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.5 { concentration+=4; costReduction+=2; upgradeRandomCardInHand }; limit:1; group:1 }" }, { id: 158, name: "\u3053\u308C\u3067\u3070\u3063\u3061\u308A", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 57, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(fixedStamina) { goodImpressionTurns+=genki*0.5; genki=0; score+=goodImpressionTurns*2; fixedStamina-=5 }; limit:1 }" }, { id: 159, name: "\u3053\u308C\u3067\u3070\u3063\u3061\u308A+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 57, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(fixedStamina) { goodImpressionTurns+=genki*0.7; genki=0; score+=goodImpressionTurns*2; fixedStamina-=5 }; limit:1 }" }, { id: 160, name: "\u4F1A\u9577\u306E\u5B8C\u74A7\u306A\u8A08\u753B", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 161, name: "\u305C\u3063\u305F\u3044\u30DE\u30EB\u79D8\u30EC\u30B7\u30D4", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 162, name: "\u30A2\u30CB\u30E1\u30A4\u30C8\u88C5\u5099", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 58, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 & goodConditionTurns>=1 { concentration+=goodConditionTurns*0.4; concentration+=1 }; limit:2 }" }, { id: 163, name: "\u30A2\u30CB\u30E1\u30A4\u30C8\u88C5\u5099+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 58, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 & goodConditionTurns>=1 { concentration+=goodConditionTurns*0.5; concentration+=1; genki+=3 }; limit:2 }" }, { id: 164, name: "\u3054\u3061\u305D\u3046\u3055\u307E\u3067\u3057\u305F", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 165, name: "\u5C0F\u3055\u3044\u79CB\u898B\u3064\u3051\u305F", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & concentration>=5 { score+=10 }; limit:2 }" }, { id: 166, name: "\u306F\u3064\u307C\u3057\u6642\u8A08", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:fullPowerCharge>=3 { cardUsesRemaining+=1; fullPowerCharge+=3 }; limit:1 }" }, { id: 167, name: "\u306F\u3064\u307C\u3057\u30D5\u30A3\u30AE\u30E5\u30A2", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isStrength { setStance(preservation2); cardUsesRemaining+=1 }; limit:1 }" }, { id: 168, name: "\u30C6\u30A3\u30FC\u30AD\u30E3\u30C7\u30A3\u30FC", rarity: "R", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 59, welfare: false, effects: "at:afterCardUsed[active] { if:isStrength { score+=5; fixedStamina+=1 }; limit:1 }" }, { id: 169, name: "\u30C6\u30A3\u30FC\u30AD\u30E3\u30C7\u30A3\u30FC+", rarity: "R", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 59, welfare: false, effects: "at:afterCardUsed[active] { if:isStrength { score+=7; fixedStamina+=3 }; limit:1 }" }, { id: 170, name: "\u307F\u3093\u306A\u306E\u61A7\u308C", rarity: "SR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 60, welfare: false, effects: "at:cardUsed { if:isFullPower { score+=9; genki+=9 }; limit:1 }" }, { id: 171, name: "\u307F\u3093\u306A\u306E\u61A7\u308C+", rarity: "SR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 60, welfare: false, effects: "at:cardUsed { if:isFullPower { score+=18; genki+=9 }; limit:1 }" }, { id: 172, name: "\u65B0\u3057\u3044\u3001\u79C1", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 61, welfare: false, effects: "at:afterCardUsed[active] { if:isStrength { score+=8; fixedStamina+=4 }; limit:1 }" }, { id: 173, name: "\u65B0\u3057\u3044\u3001\u79C1+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 61, welfare: false, effects: "at:afterCardUsed[active] { if:isStrength { score+=12; fixedStamina+=6 }; limit:1 }" }, { id: 174, name: "\u30A2\u30A4\u30C9\u30EB\u30D1\u30EF\u30FC\u6E2C\u5B9A\u6A5F", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:startOfTurn { if:isDanceTurn & isPreservation { fixedStamina+=5 }; limit:1 }" }, { id: 175, name: "\u8CBB\u75280\u5186\u611B\u60C5MAX", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 62, welfare: false, effects: "at:startOfTurn { if:motivation>=5 { genki+=4 }; limit:2 }" }, { id: 176, name: "\u8CBB\u75280\u5186\u611B\u60C5MAX+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 62, welfare: false, effects: "at:startOfTurn { if:motivation>=5 { genki+=6 }; limit:2 }" }, { id: 177, name: "\u3081\u308A\u304F\u308A\u30E9\u30A4\u30AA\u30F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 63, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=goodConditionTurns*0.7; fixedStamina-=1 }; limit:2 }" }, { id: 178, name: "\u3081\u308A\u304F\u308A\u30E9\u30A4\u30AA\u30F3+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 63, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=goodConditionTurns*0.7 }; limit:2 }" }, { id: 179, name: "\u30A4\u30B1\u3066\u308B\u30BB\u30FC\u30BF\u30FC", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & concentration>=1 { goodConditionTurns+=3; concentration-=1 }; limit:1 }" }, { id: 180, name: "\u6D77\u306E\u5411\u3053\u3046\u307E\u3067", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 64, welfare: false, effects: "at:afterStartOfTurn { if:motivation>=5 { motivation*=1.3; drawCard; fixedStamina-=1 }; limit:3; group:1 }" }, { id: 181, name: "\u6D77\u306E\u5411\u3053\u3046\u307E\u3067+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 64, welfare: false, effects: "at:afterStartOfTurn { if:motivation>=5 { motivation*=1.3; drawCard }; limit:3; group:1 }" }, { id: 182, name: "\u306C\u304F\u3082\u308A\u3075\u305F\u308A\u3076\u3093", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed { if:isVisualTurn & motivation>=5 { genki+=2 }; limit:2 }" }, { id: 183, name: "\u30AB\u30EF\u30A4\u30A4\u306E\u3064\u304F\u308A\u65B9", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 184, name: "\u3042\u306E\u65E5\u306E\u30D3\u30CB\u30FC\u30EB\u5098", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 65, welfare: false, effects: "at:startOfTurn { if:cumulativeFullPowerCharge>=5 { fullPowerCharge+=5; holdCard(466) }; limit:1 }" }, { id: 185, name: "\u3042\u306E\u65E5\u306E\u30D3\u30CB\u30FC\u30EB\u5098+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 65, welfare: false, effects: "at:startOfTurn { if:cumulativeFullPowerCharge>=5 { fullPowerCharge+=8; holdCard(466) }; limit:1 }" }, { id: 186, name: "\u306F\u3044\u307C\u304F\u305B\u3093\u3052\u3093", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & isFullPower { score+=13 }; limit:2 }" }, { id: 187, name: "\u307B\u3063\u3053\u308A\u306F\u3093\u3076\u3093\u3053", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 188, name: "\u5411\u304D\u5408\u3046\u899A\u609F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 66, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==24 { goodConditionTurns+=1; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 189, name: "\u5411\u304D\u5408\u3046\u899A\u609F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 66, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==24 { goodConditionTurns+=2; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 190, name: "\u592A\u967D\u307E\u3067\u5C4A\u3051\u308B\u6B4C\u58F0", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 67, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==32 { concentration+=1; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 191, name: "\u592A\u967D\u307E\u3067\u5C4A\u3051\u308B\u6B4C\u58F0+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 67, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==32 { concentration+=2; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 192, name: "\u3042\u305F\u3057\u3060\u3051\u306E\u4E00\u756A\u661F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 68, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==64 { goodImpressionTurns+=2; cardUsesRemaining+=1; fixedStamina-=2 }; limit:3 }" }, { id: 193, name: "\u3042\u305F\u3057\u3060\u3051\u306E\u4E00\u756A\u661F+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 68, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==64 { goodImpressionTurns+=3; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 194, name: "N.I.A\u30EF\u30C3\u30DA\u30F3", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 195, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u7D2B\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 196, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u7D2B\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 197, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u767D\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 198, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u767D\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 199, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u9ED2\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 200, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u9ED2\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 201, name: "\u3059\u3054\u3059\u304E\u308B\u30D0\u30C8\u30F3", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 202, name: "\u30DC\u30AF\u306E\u4E00\u90E8", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 69, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==382 & isPreservation { drawCard; halfCostTurns+=1; fixedStamina-=1; target:382 { g.score+=10 } }; limit:3 }" }, { id: 203, name: "\u30DC\u30AF\u306E\u4E00\u90E8+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 69, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==382 & isPreservation { drawCard(2); halfCostTurns+=1; fixedStamina-=1; target:382 { g.score+=10 } }; limit:3 }" }, { id: 204, name: "\u3044\u3064\u304B\u306E\u5C0F\u3055\u306A\u661F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 70, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==30 { turnsRemaining+=1; perfectConditionTurns+=2; fixedStamina-=3 }; limit:2 }" }, { id: 205, name: "\u3044\u3064\u304B\u306E\u5C0F\u3055\u306A\u661F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 70, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==30 { turnsRemaining+=1; perfectConditionTurns+=3; fixedStamina-=2 }; limit:2 }" }, { id: 206, name: "\u304D\u307F\u304C\u898B\u3064\u3051\u305F\u79C1", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 71, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==394 { setScoreBuff(0.6,2); fullPowerCharge+=10; fixedStamina-=1 }; limit:1 }" }, { id: 207, name: "\u304D\u307F\u304C\u898B\u3064\u3051\u305F\u79C1+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 71, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==394 { setScoreBuff(0.6,2); fullPowerCharge+=15; fixedStamina-=1 }; limit:1 }" }, { id: 208, name: "\u63CF\u3044\u305F\u5922\u3078\u306E\u3042\u3086\u307F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 72, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==40 { turnsRemaining+=1; genki*=1.5; fixedStamina-=2 }; limit:1 }" }, { id: 209, name: "\u63CF\u3044\u305F\u5922\u3078\u306E\u3042\u3086\u307F+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 72, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==40 { turnsRemaining+=1; genki*=1.6 }; limit:1 }" }, { id: 210, name: "\u9078\u3073\u3068\u3063\u305F\u71B1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 73, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==60 & stamina>=maxStamina*0.5 { motivation+=2; cardUsesRemaining+=1; fixedStamina-=maxStamina*0.15 }; limit:5 }" }, { id: 211, name: "\u9078\u3073\u3068\u3063\u305F\u71B1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 73, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==60 & stamina>=maxStamina*0.5 { motivation+=3; cardUsesRemaining+=1; fixedStamina-=maxStamina*0.15 }; limit:5 }" }, { id: 212, name: "\u53F6\u3048\u308B\u899A\u609F", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 74, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==380 & countCards[held]>=1 { setStance(preservation); fullPowerCharge+=2; target:held { g.scoreTimes+=1; g.cost-=2 } } limit:1 }" }, { id: 213, name: "\u53F6\u3048\u308B\u899A\u609F+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 74, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==380 & countCards[held]>=1 { setStance(preservation2); fullPowerCharge+=4; target:held { g.scoreTimes+=1; g.cost-=1 } } limit:1 }" }, { id: 214, name: "\u305C\u3063\u305F\u3044\u3044\u3063\u3071\u3044\uFF01", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 215, name: "\u3044\u3064\u304B\u898B\u305F\u5922", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 75, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==28 { concentration+=1; fixedStamina-=3; at:startOfTurn { concentration+=3; limit:3 } } limit:2 }" }, { id: 216, name: "\u3044\u3064\u304B\u898B\u305F\u5922+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 75, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==28 { concentration+=1; fixedStamina-=1; at:startOfTurn { concentration+=3; limit:3 } } limit:2 }" }, { id: 217, name: "\u7FFC", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 76, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==58 & genki>=7 { goodImpressionTurns*=1.5; fixedStamina-=2; at:turn { moveRandomToHand[baseId(490) & removed]; limit:1 } } limit:2 }" }, { id: 218, name: "\u7FFC+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 76, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==58 & genki>=7 { goodImpressionTurns*=1.5; at:turn { moveRandomToHand[baseId(490) & removed]; limit:1 } } limit:2 }" }, { id: 219, name: "\u4F53\u307B\u3050\u3057\u30ED\u30FC\u30E9\u30FC", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 220, name: "\u3046\u308B\u304A\u3044\u306E\u3069\u30B1\u30A2", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 221, name: "\u30C8\u30EC\u30FC\u30CA\u30FC\u306E\u512A\u3057\u3055", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 222, name: "\u308C\u3093\u3057\u3085\u30FC\u306E\u3057\u308B\u3057", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 77, welfare: false, effects: "at:cardUsed { if:cardHasEffect(fullPowerCharge) { genki+=10 }; limit:1 }" }, { id: 223, name: "\u308C\u3093\u3057\u3085\u30FC\u306E\u3057\u308B\u3057+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 77, welfare: false, effects: "at:cardUsed { if:cardHasEffect(fullPowerCharge) { genki+=13 }; limit:1 }" }, { id: 224, name: "\u3042\u307E\u3044\u304F\u3061\u3069\u3051", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 78, welfare: false, effects: "at:endOfTurn { if:isStrength { setStance(preservation); genki+=2 }; limit:2 }" }, { id: 225, name: "\u3042\u307E\u3044\u304F\u3061\u3069\u3051+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 78, welfare: false, effects: "at:endOfTurn { if:isStrength { setStance(preservation); genki+=5 }; limit:2 }" }, { id: 226, name: "\u76F8\u624B\u3078\u306E\u6DF1\u3044\u611B", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 79, welfare: false, effects: "at:cardUsed[active] { if:motivation>=8 { motivationMultiplier=2.2; genki+=2; fixedStamina-=2 }; limit:2 }" }, { id: 227, name: "\u76F8\u624B\u3078\u306E\u6DF1\u3044\u611B+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 79, welfare: false, effects: "at:cardUsed[active] { if:motivation>=8 { motivationMultiplier=2.2; genki+=2 }; limit:2 }" }, { id: 228, name: "\u304A\u59C9\u3055\u307E\u30D3\u30C3\u30B0\u30E9\u30D6", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed[active] { if:isVocalTurn { setScoreBuff(0.5,1); motivationMultiplier=1.3; genki+=2 }; limit:1 }" }, { id: 229, name: "\u52DD\u5229\u306E1\u679A", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 80, welfare: false, effects: "at:afterStartOfTurn { if:isStrength { genki+=6 }; limit:2 }" }, { id: 230, name: "\u52DD\u5229\u306E1\u679A+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 80, welfare: false, effects: "at:afterStartOfTurn { if:isStrength { genki+=8 }; limit:2 }" }, { id: 231, name: "\u6625\u306E\u304A\u3068\u305A\u308C", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 81, welfare: false, effects: "at:buffCostConsumed { if:goodImpressionTurns>=3 { goodImpressionTurns+=2; motivation+=1; fixedStamina-=1 }; limit:4 }" }, { id: 232, name: "\u6625\u306E\u304A\u3068\u305A\u308C+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 81, welfare: false, effects: "at:buffCostConsumed { if:goodImpressionTurns>=3 { goodImpressionTurns+=2; motivation+=1 }; limit:4 }" }, { id: 233, name: "\u3086\u3046\u3058\u3087\u30FC\u306E\u304D\u308D\u304F", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 234, name: "\u307E\u3042\u308B\u3044\u6625\u8272", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 82, welfare: false, effects: "at:stanceChanged { if:isFullPower & strengthTimes>=1 { target:effect(fullPowerCharge) & active { g.score+=11 }; fixedStamina-=2; at:turn { setStance(preservation2); limit:1 } } limit:2 }" }, { id: 235, name: "\u307E\u3042\u308B\u3044\u6625\u8272+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 82, welfare: false, effects: "at:stanceChanged { if:isFullPower & strengthTimes>=1 { target:effect(fullPowerCharge) & active { g.score+=11 }; at:turn { setStance(preservation2); limit:1 } } limit:2 }" }, { id: 236, name: "\u4F53\u529B\u81EA\u6162\u306E\u672C\u6C17", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 237, name: "\u5C0F\u3055\u306A\u9280\u6CB3", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 83, welfare: false, effects: "at:cardUsed[mental] { if:stance==strength2 { target:mental { g.genki+=4 }; fixedStamina-=2 } limit:3 }" }, { id: 238, name: "\u5C0F\u3055\u306A\u9280\u6CB3+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 83, welfare: false, effects: "at:cardUsed[mental] { if:stance==strength2 { target:mental { g.genki+=4 }; fixedStamina-=1 } limit:3 }" }, { id: 239, name: "\u3072\u3068\u308A\u3060\u3061\u30B7\u30E5\u30FC\u30BA", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & stamina<=maxStamina*0.5 { fixedStamina+=maxStamina*0.15 }; limit:2 }" }, { id: 240, name: "\u7A4D\u307F\u91CD\u306D\u305F\u52AA\u529B", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 84, welfare: false, effects: "at:startOfTurn { if:cumulativeFullPowerCharge>=5 { genki+=6 }; limit:2 }" }, { id: 241, name: "\u7A4D\u307F\u91CD\u306D\u305F\u52AA\u529B+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 84, welfare: false, effects: "at:startOfTurn { if:cumulativeFullPowerCharge>=5 { genki+=8 }; limit:2 }" }, { id: 242, name: "\u300CP\u3063\u3061\u300D", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 85, welfare: false, effects: "at:cardUsed { if:concentration>=8 { effectCounter+=1; if:effectCounter%2==1 { goodConditionTurns+=3; concentration-=1 } } }" }, { id: 243, name: "\u300CP\u3063\u3061\u300D+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 85, welfare: false, effects: "at:cardUsed { if:concentration>=3 { effectCounter+=1; if:effectCounter%2==1 { goodConditionTurns+=3; concentration-=1 } } }" }, { id: 244, name: "\u5922\u3078\u306E\u30B9\u30BF\u30FC\u30C8\u30E9\u30A4\u30F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & goodConditionTurns>=3 { goodConditionTurns+=3; fixedStamina-=1 }; limit:2 }" }, { id: 245, name: "\u30AE\u30E3\u30EB\u3081\u3044\u304D\u3093\u3050\uFF01", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 246, name: "\u904B\u547D\u306E\u51FA\u9022\u3044", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 86, welfare: false, effects: "at:afterStartOfTurn { if:isFullPower { genki+=10; fullPowerCharge+=3; fixedStamina-=3; target:hand { g.score+=10 }; at:turn { setStance(preservation); limit:1 } } limit:1 }" }, { id: 247, name: "\u904B\u547D\u306E\u51FA\u9022\u3044+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 86, welfare: false, effects: "at:afterStartOfTurn { if:isFullPower { genki+=10; fullPowerCharge+=3; target:hand { g.score+=10 }; at:turn { setStance(preservation); limit:1 } } limit:1 }" }, { id: 248, name: "\u7D46\u306E\u306A\u308F\u3068\u3073", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 249, name: "\u4E00\u756A\u661F\u306E\u6311\u6226\u72B6", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 87, welfare: false, effects: "at:afterCardUsed { if:goodImpressionTurns>=6 { goodImpressionTurns+=2; motivation+=2; fixedStamina-=1 }; limit:3 }" }, { id: 250, name: "\u4E00\u756A\u661F\u306E\u6311\u6226\u72B6+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 87, welfare: false, effects: "at:afterCardUsed { if:goodImpressionTurns>=6 { goodImpressionTurns+=2; motivation+=2 }; limit:3 }" }, { id: 251, name: "\u5E7C\u99B4\u67D3\u306E\u610F\u5730", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 252, name: "\u5699\u307F\u7DE0\u3081\u305F\u30BF\u30AA\u30EB", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 253, name: "\u96E8\u4E0A\u304C\u308A\u306E\u82B1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 88, welfare: false, effects: "at:startOfTurn { motivation+=9; fixedStamina-=4; at:turn { uneaseTurns+=5; limit:1; delay:2 } limit:1 }" }, { id: 254, name: "\u96E8\u4E0A\u304C\u308A\u306E\u82B1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 88, welfare: false, effects: "at:startOfTurn { motivation+=10; fixedStamina-=3; at:turn { uneaseTurns+=5; limit:1; delay:2 } limit:1 }" }, { id: 255, name: "\u96E8\u4E0A\u304C\u308A\u306E\u5973\u795E", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 89, welfare: false, effects: "at:afterStartOfTurn { cardUsesRemaining+=1; genki+=5; addCardToTopOfDeck(23); limit:5 }" }, { id: 256, name: "\u96E8\u4E0A\u304C\u308A\u306E\u5973\u795E+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 89, welfare: false, effects: "at:afterStartOfTurn { cardUsesRemaining+=1; genki+=6; addCardToTopOfDeck(23); limit:5 }" }, { id: 257, name: "\u96E8\u4E0A\u304C\u308A\u306E\u8679", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 90, welfare: false, effects: "at:afterCardUsed[mental] { if:stance==preservation2 { setEnthusiasmBonus(4); fixedStamina-=1 }; limit:4 }" }, { id: 258, name: "\u96E8\u4E0A\u304C\u308A\u306E\u8679+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 90, welfare: false, effects: "at:afterCardUsed[mental] { if:stance==preservation2 { setEnthusiasmBonus(4) }; limit:4 }" }, { id: 259, name: "\u30D1\u30EF\u30FC\u3092\u304F\u308C\u308B\u30E2\u30CE", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 260, name: "\u304A\u6B8B\u3057\u306B\u3093\u3058\u3093", rarity: "SR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 261, name: "\u4F11\u61A9\u4E2D\u306E\u304A\u3084\u3064", rarity: "R", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 91, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(preservation) & isFullPower { score+=floor(cumulativeFullPowerCharge*0.6) }; limit:3 }" }, { id: 262, name: "\u4F11\u61A9\u4E2D\u306E\u304A\u3084\u3064+", rarity: "R", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 91, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(preservation) & isFullPower { score+=floor(cumulativeFullPowerCharge*0.6) } }" }, { id: 263, name: "\u305D\u3088\u98A8\u306B\u63FA\u308C\u308B\u9AEA\u98FE\u308A", rarity: "SR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 92, welfare: false, effects: "at:afterCardUsed[active] { setStance(preservation); fixedStamina-=2; target:effect(strength) { g.score+=3 } limit:2 }" }, { id: 264, name: "\u305D\u3088\u98A8\u306B\u63FA\u308C\u308B\u9AEA\u98FE\u308A+", rarity: "SR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 92, welfare: false, effects: "at:afterCardUsed[active] { setStance(preservation); fixedStamina-=2; target:effect(strength) { g.score+=3 } limit:3 }" }, { id: 265, name: "\u3044\u3064\u3082\u306E\u6301\u3061\u7269", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 93, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(preservation) & isFullPower { score+=cumulativeFullPowerCharge*1.4; fixedStamina-=1 } }" }, { id: 266, name: "\u3044\u3064\u3082\u306E\u6301\u3061\u7269+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 93, welfare: false, effects: "at:afterCardUsed { if:cardHasEffect(preservation) & isFullPower { score+=cumulativeFullPowerCharge*1.4 } }" }, { id: 267, name: "\u601D\u3044\u51FA\u30AB\u30BF\u30E1\u30B3\u30A4\u30E1", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 268, name: "\u304A\u3082\u3066\u306A\u3057\u306E\u6C17\u6301\u3061", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 269, name: "\u52DD\u5229\u3088\u308A\u5927\u5207\u306A\u3082\u306E", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:startOfTurn { if:isVisualTurn & stamina<=maxStamina*0.5 { fixedGenki+=10 }; limit:1 }" }, { id: 270, name: "N.I.A\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 271, name: "N.I.A\u30B9\u30DE\u30DB\u30EA\u30F3\u30B0", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 272, name: "N.I.A\u30C8\u30FC\u30C8\u30D0\u30C3\u30B0", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 273, name: "N.I.A\u30D1\u30B9\u30B1\u30FC\u30B9", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 274, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u91D1\u7D2B\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 275, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u91D1\u7D2B\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 276, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u91D1\u767D\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 277, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u91D1\u767D\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 278, name: "N.I.A\u30D0\u30F3\u30C9\uFF08\u91D1\u9ED2\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 279, name: "N.I.A\u30E9\u30A4\u30C8\uFF08\u91D1\u9ED2\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 280, name: "\u4F1D\u8AAC\u306Eidol\u88C5\u5099", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 94, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength & genki>=50 { score+=genki*4.4; genki=0; fixedStamina-=2 }; limit:2 }" }, { id: 281, name: "\u4F1D\u8AAC\u306Eidol\u88C5\u5099+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 94, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength & genki>=50 { score+=genki*5; genki=0 }; limit:2 }" }, { id: 282, name: "\u5C45\u6B8B\u308A\u306E\u751F\u5F92\u4F1A\u5BA4", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn & strengthTimes>=3 { setEnthusiasmBonus(10) }; limit:1 }" }, { id: 283, name: "\u306E\u3073\u306E\u3073\u30D0\u30F3\u30C9", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 284, name: "\u4E16\u754C\u3092\u6551\u3063\u305F\u30DE\u30A4\u30AF", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 95, welfare: false, effects: "at:cardUsed { if:cardHasEffect(concentration) { halfCostTurns+=2 }; limit:2 }" }, { id: 285, name: "\u4E16\u754C\u3092\u6551\u3063\u305F\u30DE\u30A4\u30AF+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 95, welfare: false, effects: "at:cardUsed { if:cardHasEffect(concentration) { halfCostTurns+=2 }; limit:3 }" }, { id: 286, name: "\u52DD\u5229\u3092\u305D\u306E\u624B\u306B", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfStage { addCardToHand(111); limit:1 }" }, { id: 287, name: "\u8FF7\u5B50\u306E\u304A\u547C\u3073\u51FA\u3057", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfStage { addCardToHand(131); limit:1 }" }, { id: 288, name: "\u9EBB\u592E\u306B\u3074\u3063\u305F\u3057", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfStage { addCardToHand(421); limit:1 }" }, { id: 289, name: "\u30B7\u30EB\u30F4\u30A7\u30B9\u30BF\u51FA\u6483\uFF01", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 96, welfare: false, effects: "at:endOfTurn { if:turnsElapsed%2==1 & countCards[removed]<=8 { setGoodImpressionTurnsEffectBuff(0.7,3); fixedStamina-=1 } }" }, { id: 290, name: "\u30B7\u30EB\u30F4\u30A7\u30B9\u30BF\u51FA\u6483\uFF01+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 96, welfare: false, effects: "at:endOfTurn { if:turnsElapsed%2==1 & countCards[removed]<=8 { setGoodImpressionTurnsEffectBuff(0.7,3) } }" }, { id: 291, name: "\u304A\u3068\u3082\u306E\u30DF\u30DF\u30BA\u30AF", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 292, name: "\u3078\u3068\u3078\u3068\u3067\u304D\u3085\u30FC", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 293, name: "\u3042\u306E\u65E5\u306E\u7D04\u675F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 97, welfare: false, effects: "at:cardUsed[active] { if:activeCardsUsed%2==1 { setConcentrationBuff(0.25,5) }; limit:2 }" }, { id: 294, name: "\u3042\u306E\u65E5\u306E\u7D04\u675F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 97, welfare: false, effects: "at:cardUsed[active] { if:activeCardsUsed%2==1 { setConcentrationBuff(0.25,5) }; limit:3 }" }, { id: 295, name: "\u5305\u307E\u308C\u308B\u3084\u3055\u3057\u3055", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn & goodConditionTurns>=10 { perfectConditionTurns+=4; genki+=10 }; limit:1 }" }, { id: 296, name: "\u304A\u4F3C\u5408\u3044\u30CD\u30AF\u30BF\u30A4", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 297, name: "\u592A\u967D\u3092\u8FFD\u3044\u8D8A\u3059\u6B4C\u58F0", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 98, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==132 { motivation+=15; halfCostTurns+=5; setScoreDebuff(0.75, 2); at:turn { setScoreBuff(0.5, 4); limit:1; delay:2 } } limit:1 }" }, { id: 298, name: "\u592A\u967D\u3092\u8FFD\u3044\u8D8A\u3059\u6B4C\u58F0+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 98, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==132 { motivation+=15; halfCostTurns+=5; setScoreDebuff(0.5, 2); at:turn { setScoreBuff(0.5, 5); limit:1; delay:2 } } limit:1 }" }, { id: 299, name: "\u624B\u4F5C\u308A\u30B5\u30D6\u30B9\u30AF\u5F01\u5F53", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn & genki>=30 { goodImpressionTurns+=4; motivation+=4; genki+=2 }; limit:1 }" }, { id: 300, name: "\u521D\u9663\u306E\u8A3C\u30FB\u661F\u5357", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 99, welfare: false, effects: "at:cardUsed[active] { if:motivation>=5 { motivationMultiplier=1.4; genki+=1; fixedStamina-=1 }; limit:2 }" }, { id: 301, name: "\u521D\u9663\u306E\u8A3C\u30FB\u661F\u5357+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 99, welfare: false, effects: "at:cardUsed[active] { if:motivation>=5 { motivationMultiplier=1.4; genki+=1 }; limit:2 }" }, { id: 302, name: "\u521D\u9663\u306E\u8A3C\u30FB\u7F8E\u9234", rarity: "R", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 100, welfare: false, effects: "at:startOfTurn { nullifyGenkiTurns+=2; limit:1 }; at:turn { motivation+=8; limit:1; delay:2 }" }, { id: 303, name: "\u521D\u9663\u306E\u8A3C\u30FB\u7F8E\u9234+", rarity: "R", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 100, welfare: false, effects: "at:startOfTurn { nullifyGenkiTurns+=2; limit:1 }; at:turn { motivation+=10; limit:1; delay:2 }" }, { id: 304, name: "\u521D\u9663\u306E\u8A3C\u30FB\u4F51\u82BD", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 101, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=goodConditionTurns*0.3; fixedStamina-=1 }; limit:2 }" }, { id: 305, name: "\u521D\u9663\u306E\u8A3C\u30FB\u4F51\u82BD+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 101, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=goodConditionTurns*0.3 }; limit:2 }" }, { id: 306, name: "\u597D\u304D\u5ACC\u3044\u7981\u6B62\uFF01", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:startOfTurn { if:isDanceTurn & stamina<=maxStamina*0.5 { fixedGenki+=10 }; limit:1 }" }, { id: 307, name: "\u539F\u70B9\u3078\u306E\u30C1\u30B1\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 102, welfare: false, effects: "at:staminaDecreased { if:parentPhase==processCost { setEnthusiasmBuff(0.4) }; limit:3 }" }, { id: 308, name: "\u539F\u70B9\u3078\u306E\u30C1\u30B1\u30C3\u30C8+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 102, welfare: false, effects: "at:staminaDecreased { if:parentPhase==processCost { setEnthusiasmBuff(0.6) }; limit:3 }" }, { id: 309, name: "\u9762\u767D\u304F\u3066\u5FC3\u914D\u306A\u5B50", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 310, name: "\u30D3\u30B7\u30C3\u30D0\u30B7\u30C3\u7AF9\u5200", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 311, name: "\u54B2\u304D\u8A87\u308B\u661F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 103, welfare: false, effects: "at:afterCardUsed[mental] { if:genki>=30 { goodImpressionTurns+=genki*0.5; goodImpressionTurns+=2 }; limit:1 }" }, { id: 312, name: "\u54B2\u304D\u8A87\u308B\u661F+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 103, welfare: false, effects: "at:afterCardUsed[mental] { if:genki>=30 { goodImpressionTurns+=genki*0.5; goodImpressionTurns+=5 }; limit:1 }" }, { id: 313, name: "\u591C\u95C7\u306E\u661F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 104, welfare: false, effects: "at:startOfTurn { if:turnsElapsed==3 { setGoodConditionTurnsBuff(0.5,4) }; limit:1 }" }, { id: 314, name: "\u591C\u95C7\u306E\u661F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 104, welfare: false, effects: "at:startOfTurn { if:turnsElapsed==3 { setGoodConditionTurnsBuff(0.5,5) }; limit:1 }" }, { id: 315, name: "\u5922\u898B\u308B\u661F", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 105, welfare: false, effects: "at:cardUsed { if:isFullPower & turnCardsUsed%3==2 { setFullPowerChargeBuff(0.5,1); fixedStamina-=1 }; group:1 }; at:cardUsed { if:isFullPower & turnCardsUsed%3==2 { at:turn { setStance(preservation2); limit:1 } }; group:11 }" }, { id: 316, name: "\u5922\u898B\u308B\u661F+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 105, welfare: false, effects: "at:cardUsed { if:isFullPower & turnCardsUsed%3==2 { setFullPowerChargeBuff(0.5,1) }; group:1 }; at:cardUsed { if:isFullPower & turnCardsUsed%3==2 { at:turn { setStance(preservation2); limit:1 } }; group:11 }" }, { id: 317, name: "\u304A\u3055\u307C\u308A\u30BF\u30AA\u30EB", rarity: "SR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isDanceTurn { fixedGenki+=4; at:turn { nullifyDebuff+=1; limit:1 } } limit:1 }" }, { id: 318, name: "\u308F\u3044\u308F\u3044\u30BF\u30F3\u30D0\u30EA\u30F3", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 319, name: "\u3057\u3085\u304D\u3057\u3085\u304D\u306F\u30FC\u3068", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 106, welfare: false, effects: "at:afterCardUsed[mental] { if:concentration>=13 { genki+=2; drawCard; cardUsesRemaining+=1; at:cardUsed[mental] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 } } limit:1 }" }, { id: 320, name: "\u3057\u3085\u304D\u3057\u3085\u304D\u306F\u30FC\u3068+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 106, welfare: false, effects: "at:afterCardUsed[mental] { if:concentration>=13 { genki+=10; drawCard(2); cardUsesRemaining+=1; at:cardUsed[mental] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 } } limit:1 }" }, { id: 321, name: "\u30D4\u30FC\u30AF\u30BF\u30A4\u30E0\u30D5\u30E9\u30C3\u30B0", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 322, name: "\u3075\u3063\u304B\u3064\u306E\u30A2\u30A4\u30B9", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 323, name: "\u30DF\u30E9\u30AF\u30EB\u30D8\u30C3\u30C9", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 107, welfare: false, effects: "at:startOfTurn { setMotivationBuff(0.5,3); fixedStamina-=2; limit:1 }; at:turn { if:turnsElapsed==1 { genki+=2 }; limit:1 }" }, { id: 324, name: "\u30DF\u30E9\u30AF\u30EB\u30D8\u30C3\u30C9+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 107, welfare: false, effects: "at:startOfTurn { setMotivationBuff(0.5,3); limit:1 }; at:turn { if:turnsElapsed==1 { genki+=2 }; limit:1 }" }, { id: 325, name: "\u4F53\u529B\u4F5C\u308A\u306E\u6559\u6750\uFF1F", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 326, name: "\u843D\u3061\u8449\u3064\u304B\u307F\u306E\u578B", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 327, name: "\u30B7\u30A7\u30A2\u30CF\u30D4\u7F36\u30D0\u30C3\u30B8", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 108, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 { fixedStamina+=3; goodImpressionTurns+=1 }; limit:2 }" }, { id: 328, name: "\u30B7\u30A7\u30A2\u30CF\u30D4\u7F36\u30D0\u30C3\u30B8+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 108, welfare: false, effects: "at:everyTurn { if:turnsElapsed%2==1 { fixedStamina+=3; goodImpressionTurns+=2 }; limit:2 }" }, { id: 329, name: "\u305F\u3053\u3084\u304D\u30C6\u30AF\u30CE\u30C9\u30C3\u30B0", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 109, welfare: false, effects: "at:stanceChanged { if:prevStance==fullPower & countCards[removed & 604]>=1 { target:604 { g.fullPowerCharge+=2; g.score+=5; g.typedCost-=2 }; holdCard(604) } limit:3 }" }, { id: 330, name: "\u305F\u3053\u3084\u304D\u30C6\u30AF\u30CE\u30C9\u30C3\u30B0+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 109, welfare: false, effects: "at:stanceChanged { if:prevStance==fullPower & countCards[removed & 604]>=1 { target:604 { g.fullPowerCharge+=2; g.score+=12; g.typedCost-=2 }; holdCard(604) } limit:3 }" }, { id: 331, name: "\u3057\u307C\u307E\u306A\u3044\u601D\u3044\u51FA", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn & stanceChangedTimes>=4 { setScoreBuff(0.25,1); genki+=8 }; limit:2 }" }, { id: 332, name: "\u304B\u3054\u3044\u3063\u3071\u3044\u306E\u6210\u679C", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 333, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u306A\u308A\u305F\u3044", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 110, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect & goodImpressionTurnsDelta>=7 & genki>=30 { score+=goodImpressionTurns*2.5; fixedStamina+=3 }; limit:2 }" }, { id: 334, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u306A\u308A\u305F\u3044+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 110, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect & goodImpressionTurnsDelta>=7 & genki>=30 { score+=goodImpressionTurns*2.5; fixedStamina+=3 }; limit:3 }" }, { id: 335, name: "\u6708\u520A\u30A2\u30CB\u30E1\u30C8\u30FC\u30AF\u266A", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfTurn { if:isVisualTurn { goodImpressionTurns+=3; moveRandomToHand[SSR & (deck | discarded)] }; limit:1 }" }, { id: 336, name: "\u30E1\u30EA\u30CF\u30EA\u30B9\u30C8\u30EC\u30C3\u30C1", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 337, name: "\u30D5\u30EC\u30D5\u30EC\u3042\u305F\u3057\uFF01", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 111, welfare: false, effects: "at:afterCardUsed[active] { if:perfectConditionTurns>=1 { cardUsesRemaining+=1; drawCard; fixedStamina-=1 }; limit:2 }" }, { id: 338, name: "\u30D5\u30EC\u30D5\u30EC\u3042\u305F\u3057\uFF01+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 111, welfare: false, effects: "at:afterCardUsed[active] { if:perfectConditionTurns>=1 { cardUsesRemaining+=1; drawCard(2) }; limit:2 }" }, { id: 339, name: "\u304A\u793C\u306E\u30C6\u30A3\u30FC\u30BB\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 340, name: "\u3073\u3063\u304F\u308A\u4EEE\u88C5\u30B0\u30C3\u30BA", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 341, name: "\u3054\u3061\u3083\u307E\u305C\u30D1\u30C3\u30B7\u30E7\u30F3", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 112, welfare: false, effects: "at:startOfTurn { if:isStrength { setStance(preservation); genki+=6 }; limit:1 }" }, { id: 342, name: "\u3054\u3061\u3083\u307E\u305C\u30D1\u30C3\u30B7\u30E7\u30F3+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 112, welfare: false, effects: "at:startOfTurn { if:isStrength { setStance(preservation); genki+=10 }; limit:1 }" }, { id: 343, name: "\u9AD8\u304F\u30B8\u30E3\u30F3\u30D7\uFF01", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 113, welfare: false, effects: "at:cardUsed { if:turnCardsUsed%2==1 { genki+=5; setGoodImpressionTurnsBuff(0.5,1); fixedStamina-=1 }; limit:2 }" }, { id: 344, name: "\u9AD8\u304F\u30B8\u30E3\u30F3\u30D7\uFF01+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 113, welfare: false, effects: "at:cardUsed { if:turnCardsUsed%2==1 { genki+=7; setGoodImpressionTurnsBuff(0.5,1) }; limit:2 }" }, { id: 345, name: "\u6FC0\u75DB\u306E\u3061\u307D\u304B\u307D\u304B", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 346, name: "\u5C4A\u3051\u305F\u3044\u60F3\u3044", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 114, welfare: false, effects: "at:afterStartOfTurn { if:turnsRemaining<=3 { moveRandomToHand[SSR & (deck | discarded)]; concentration+=goodConditionTurns*0.2; fixedStamina-=1 }; limit:3 }" }, { id: 347, name: "\u5C4A\u3051\u305F\u3044\u60F3\u3044+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 114, welfare: false, effects: "at:afterStartOfTurn { if:turnsRemaining<=3 { moveRandomToHand[SSR & (deck | discarded)]; concentration+=goodConditionTurns*0.3; fixedStamina-=1 }; limit:3 }" }, { id: 348, name: "\u3054\u304D\u3052\u3093\u3088\u3046\u30EC\u30C3\u30B9\u30F3", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 349, name: "\u6C34\u3082\u6EF4\u308B\u738B\u5B50\u69D8", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 115, welfare: false, effects: "at:afterCardUsed[active] { goodConditionTurns+=concentration*0.5; concentration+=1; limit:1 }" }, { id: 350, name: "\u6C34\u3082\u6EF4\u308B\u738B\u5B50\u69D8+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 115, welfare: false, effects: "at:afterCardUsed[active] { goodConditionTurns+=concentration*0.5; concentration+=3; limit:1 }" }, { id: 351, name: "\u304A\u3072\u308B\u306D\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 352, name: "\u306F\u3070\u305F\u304F\u30D6\u30ED\u30FC\u30C1", rarity: "R", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 116, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength { setEnthusiasmBonus(3) }; limit:1 }" }, { id: 353, name: "\u306F\u3070\u305F\u304F\u30D6\u30ED\u30FC\u30C1+", rarity: "R", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 116, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength { setEnthusiasmBonus(5) }; limit:1 }" }, { id: 354, name: "\u4E00\u7B46\u5165\u9B42", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 117, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect & goodImpressionTurns>=6 { prideTurns+=2; motivation+=4 }; limit:1 }" }, { id: 355, name: "\u4E00\u7B46\u5165\u9B42+", rarity: "SR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 117, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect & goodImpressionTurns>=6 { prideTurns+=3; motivation+=5 }; limit:1 }" }, { id: 356, name: "\u3075\u3055\u308F\u3057\u3044\u3001\u79C1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 118, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect & genki>=7 { motivation+=4; genki+=1; fixedStamina-=2 }; limit:2 }" }, { id: 357, name: "\u3075\u3055\u308F\u3057\u3044\u3001\u79C1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 118, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect & genki>=7 { motivation+=6; genki+=1; fixedStamina-=2 }; limit:2 }" }, { id: 358, name: "\u5BDD\u5FC3\u5730\u306F\u826F\u597D", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:motivationIncreased { if:isDirectEffect & isDanceTurn { setGoodImpressionTurnsBuff(0.5,2); setMotivationBuff(0.5,2) }; limit:1 }" }, { id: 359, name: "\u304A\u76F4\u3057\u523A\u7E4D\u30BB\u30C3\u30C8", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 360, name: "\u5730\u7403\u3068\u30E9\u30F3\u30C7\u30D6\u30FC\uFF01", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 119, welfare: false, effects: "at:afterStartOfTurn { if:stanceChangedTimes>=4 { moveRandomToHand[effect(preservation) & (deck | discarded)]; target:634 { g.scoreTimes+=1; g.score+=10; g.cost-=4 } } limit:2 }" }, { id: 361, name: "\u5730\u7403\u3068\u30E9\u30F3\u30C7\u30D6\u30FC\uFF01+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 119, welfare: false, effects: "at:afterStartOfTurn { if:stanceChangedTimes>=4 { moveRandomToHand[effect(preservation) & (deck | discarded)]; target:634 { g.scoreTimes+=1; g.score+=15; g.cost-=3 } } limit:2 }" }, { id: 362, name: "\u305F\u305F\u3044\u3066\u304B\u3076\u3063\u3066", rarity: "SR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfTurn { if:isDanceTurn & isStrength { target:hand { g.cost+=3 } }; limit:1 }" }, { id: 363, name: "\u3081\u3061\u3083\u304B\u308F\u30D7\u30EA", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfTurn { if:lastUsedCardType==active { moveRandomToHand[pIdol & (deck | discarded)]; upgradeRandomCardInHand }; limit:1 }" }, { id: 364, name: "\u4EA4\u308F\u3057\u305F\u7D04\u675F", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 120, welfare: false, effects: "at:endOfTurn { if:fullPowerCharge>=10 { holdCard(638); genki+=5; at:turn { setFullPowerChargeBuff(0.5, 1); limit:1 } } limit:2 }" }, { id: 365, name: "\u4EA4\u308F\u3057\u305F\u7D04\u675F+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 120, welfare: false, effects: "at:endOfTurn { if:fullPowerCharge>=10 { holdCard(638); genki+=5; at:turn { setFullPowerChargeBuff(0.5, 1); limit:1 } } limit:3 }" }, { id: 366, name: "\u5B8C\u5168\u5236\u8987\u3067\u30DD\u30F3", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 367, name: "\u30B2\u30EC\u30F3\u30C7\u3092\u7FD4\u3051\u308B\u8D64", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 368, name: "\u3042\u306E\u9803\u61A7\u308C\u305F\u30D2\u30FC\u30ED\u30FC", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 121, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==106 { cardUsesRemaining+=1; moveRandomToHand[removed & 640]; goodConditionTurns+=7; fixedStamina-=3 }; limit:1 }" }, { id: 369, name: "\u3042\u306E\u9803\u61A7\u308C\u305F\u30D2\u30FC\u30ED\u30FC+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 121, welfare: false, effects: "at:cardUsed { if:usedCardBaseId==106 { cardUsesRemaining+=1; moveRandomToHand[removed & 640]; goodConditionTurns+=9 }; limit:1 }" }, { id: 370, name: "\u7121\u6211\u306E\u5883\u5730", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 371, name: "\u306F\u3064\u307C\u3057\u8A18\u7AE0", rarity: "SSR", upgraded: false, plan: "free", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { fixedStamina+=7; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 372, name: "\u306F\u3064\u307C\u3057\u30E1\u30C0\u30EB (\u6A59)", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { goodConditionTurns+=5; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 373, name: "\u30AC\u30E9\u30B9\u306F\u3064\u307F (\u6A59)", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { concentration+=5; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 374, name: "\u306F\u3064\u307C\u3057\u30E1\u30C0\u30EB (\u767D)", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { goodImpressionTurns+=5; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 375, name: "\u30AC\u30E9\u30B9\u306F\u3064\u307F (\u767D)", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { motivation+=5; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 376, name: "\u306F\u3064\u307C\u3057\u30E1\u30C0\u30EB (\u9ED2)", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { target:effect(strength) { g.score+=10 }; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 377, name: "\u30AC\u30E9\u30B9\u306F\u3064\u307F (\u9ED2)", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[!(N | T)]>=21 { target:effect(fullPowerCharge) { g.score+=10 }; removeRandom[basic & (deck | discarded | hand)] } }" }, { id: 378, name: "\u3060\u304B\u3089\u3001\u304A\u3044\u3067", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 122, welfare: false, effects: "at:startOfTurn { if:goodImpressionTurns>=6 { goodImpressionTurns+=10; setScoreDebuff(0.6, 2); at:cardUsed[mental] { motivation+=1; limit:5 } } limit:1 }" }, { id: 379, name: "\u3060\u304B\u3089\u3001\u304A\u3044\u3067+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 122, welfare: false, effects: "at:startOfTurn { if:goodImpressionTurns>=6 { goodImpressionTurns+=13; setScoreDebuff(0.6, 2); at:cardUsed[mental] { motivation+=1; limit:5 } } limit:1 }" }, { id: 380, name: "\u3074\u3063\u305F\u3057\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:cardUsed[active] { if:isVisualTurn & goodConditionTurns>=3 { concentration+=2; score+=4 }; limit:1 }" }, { id: 381, name: "\u61A7\u308C\u306E\u306F\u3058\u307E\u308A", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 123, welfare: false, effects: "at:stanceChanged { if:isFullPower { nullifyCostActiveCards+=1; target:mental { g.genki+=4 } } limit:2 }" }, { id: 382, name: "\u61A7\u308C\u306E\u306F\u3058\u307E\u308A+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 123, welfare: false, effects: "at:stanceChanged { if:isFullPower { nullifyCostActiveCards+=1; target:mental { g.genki+=5 } } limit:3 }" }, { id: 383, name: "\u305D\u3063\u304F\u308A\u30EF\u30F3\u30EF\u30F3", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 384, name: "\u3072\u308D\u304C\u308B\u672A\u6765\u3078", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 124, welfare: false, effects: "at:buffCostConsumed { if:goodConditionTurns>=3 { concentration+=2; goodConditionTurns-=1; at:turn { drawCard; limit:1 } } }" }, { id: 385, name: "\u3072\u308D\u304C\u308B\u672A\u6765\u3078+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 124, welfare: false, effects: "at:buffCostConsumed { if:goodConditionTurns>=3 { concentration+=2; goodConditionTurns-=1; at:turn { drawCard(2); limit:1 } } }" }, { id: 386, name: "\u307F\u3061\u306A\u308B\u30B7\u30B0\u30CA\u30EB", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 125, welfare: false, effects: "at:startOfStage { genki+=7; motivation+=4; fixedStamina-=maxStamina*0.8; limit:1 }; at:buffCostConsumed { fixedStamina+=maxStamina*0.2; setGoodImpressionTurnsEffectBuff(0.1) }" }, { id: 387, name: "\u307F\u3061\u306A\u308B\u30B7\u30B0\u30CA\u30EB+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 125, welfare: false, effects: "at:startOfStage { genki+=8; motivation+=5; fixedStamina-=maxStamina*0.8; limit:1 }; at:buffCostConsumed { fixedStamina+=maxStamina*0.2; setGoodImpressionTurnsEffectBuff(0.1) }" }, { id: 388, name: "\u306F\u3058\u3081\u3066\u306E\u3051\u3093\u304B?", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 389, name: "\u8FF7\u5B50\u306E\u3086\u304F\u3048", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVocalTurn & stamina<=maxStamina*0.5 { motivation+=2; halfCostTurns+=2 }; limit:1 }" }, { id: 390, name: "\u6700\u521D\u306E\u9CE5", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 126, welfare: false, effects: "at:turn { if:turnsElapsed%2==1 & genki>=30 { fixedStamina+=1; score+=genki*0.2*countCards[removed & 757] } }" }, { id: 391, name: "\u6700\u521D\u306E\u9CE5+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 126, welfare: false, effects: "at:turn { if:turnsElapsed%2==1 & genki>=30 { fixedStamina+=2; score+=genki*0.25*countCards[removed & 757] } }" }, { id: 392, name: "\u5E78\u305B\u306E\u8A70\u3081\u5408\u308F\u305B", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 393, name: "\u77E5\u3089\u306A\u3044\u4E16\u754C\u3078", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 127, welfare: false, effects: "at:cardUsed { if:cardHasEffect(concentration) { effectCounter+=1; if:effectCounter%3==2 { concentration+=countCards[removed]*0.5 } } }" }, { id: 394, name: "\u77E5\u3089\u306A\u3044\u4E16\u754C\u3078+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 127, welfare: false, effects: "at:cardUsed { if:cardHasEffect(concentration) { effectCounter+=1; if:effectCounter%3==2 { concentration+=countCards[removed]*0.5; genki+=2 } } }" }, { id: 395, name: "\u7BB1\u5EAD\u306E\u30D0\u30E9", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 128, welfare: false, effects: "at:afterCardUsed[mental] { if:goodImpressionTurns>=6 { genki+=4; goodImpressionTurns+=1 }; limit:2 }" }, { id: 396, name: "\u7BB1\u5EAD\u306E\u30D0\u30E9+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 128, welfare: false, effects: "at:afterCardUsed[mental] { if:goodImpressionTurns>=6 { genki+=4; goodImpressionTurns+=2 }; limit:2 }" }, { id: 397, name: "\u82B1\u6D77\u30E1\u30E2\u30EA\u30A2\u30EB", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 398, name: "\u304A\u6D17\u6FEF\u306E\u5FC5\u9700\u54C1", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 399, name: "\u30E6\u30FC\u30C8\u30D4\u30A2\u3078\u306E\u8A98\u3044", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 129, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength & fullPowerCharge>=5 { genki+=4; fullPowerCharge-=2; target:active { g.score+=3 }; at:turn { drawCard; limit:1 } } }" }, { id: 400, name: "\u30E6\u30FC\u30C8\u30D4\u30A2\u3078\u306E\u8A98\u3044+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 129, welfare: false, effects: "at:stanceChanged { if:isDirectEffect & isStrength & fullPowerCharge>=5 { genki+=6; fullPowerCharge-=2; target:active { g.score+=3 }; at:turn { drawCard; limit:1 } } }" }, { id: 401, name: "\u307B\u304F\u307B\u304F\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 402, name: "\u3059\u3079\u3066\u3092\u8D85\u3048\u305F\u5148\u3078", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 130, welfare: false, effects: "at:startOfStage { setScoreDebuff(0.2,4); limit:1 }; at:turn { if:turnsElapsed==3 { motivation+=2; cardUsesRemaining+=1 }; limit:1 }; at:turn { if:turnsElapsed==6 { goodImpressionTurns+=4 }; limit:1 }" }, { id: 403, name: "\u3059\u3079\u3066\u3092\u8D85\u3048\u305F\u5148\u3078+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 130, welfare: false, effects: "at:startOfStage { setScoreDebuff(0.2,4); limit:1 }; at:turn { if:turnsElapsed==3 { motivation+=2; cardUsesRemaining+=1 }; limit:1 }; at:turn { if:turnsElapsed==6 { goodImpressionTurns+=4; cardUsesRemaining+=1 }; limit:1 }" }, { id: 404, name: "\u54B2\u5B63\u306E\u5B8C\u5168\u98DF\u30FB\u6539", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed { if:turnCardsUsed%2==1 { goodImpressionTurns+=2; setGoodImpressionTurnsEffectBuff(0.25) }; limit:1 }" }, { id: 405, name: "\u6F14\u6280\u306E\u305F\u3057\u306A\u307F", rarity: "SR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:staminaDecreased { if:parentPhase==processCost & isVisualTurn { goodImpressionTurns+=2; halfCostTurns+=2 }; limit:1 }" }, { id: 406, name: "\u3042\u3055\u308A\u5148\u751F\u306E\u304A\u307E\u3082\u308A", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 131, welfare: false, effects: "at:everyTurn { if:turnsElapsed%4==3 { moveRandomToTopOfDeck[baseId(789)] } }" }, { id: 407, name: "\u3042\u3055\u308A\u5148\u751F\u306E\u304A\u307E\u3082\u308A", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 132, welfare: false, effects: "at:everyTurn { if:turnsElapsed%4==3 { moveRandomToTopOfDeck[baseId(791)] } }" }, { id: 408, name: "\u3042\u3055\u308A\u5148\u751F\u306E\u304A\u307E\u3082\u308A", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 133, welfare: false, effects: "at:everyTurn { if:turnsElapsed%4==3 { moveRandomToTopOfDeck[baseId(793)] } }" }, { id: 409, name: "\u308F\u305F\u3057\u305F\u3061\u306E\u7D04\u675F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 134, welfare: false, effects: "at:goodConditionTurnsIncreased { if:isDirectEffect & goodConditionTurnsDelta>=7 & concentration>=13 { goodConditionTurns+=concentration*0.75; concentration/=2; perfectConditionTurns+=1; genki+=2 } }" }, { id: 410, name: "\u308F\u305F\u3057\u305F\u3061\u306E\u7D04\u675F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 134, welfare: false, effects: "at:goodConditionTurnsIncreased { if:isDirectEffect & goodConditionTurnsDelta>=7 & concentration>=13 { goodConditionTurns+=concentration*0.75; concentration/=2; perfectConditionTurns+=2; genki+=2 } }" }, { id: 411, name: "\u3042\u305F\u3057\u305F\u3061\u306E\u7D04\u675F", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 135, welfare: false, effects: "at:endOfTurn { if:cumulativeFullPowerCharge>=13 { target:797 { g.scoreTimes+=1 }; fixedStamina-=1; at:turn { moveRandomToHand[baseId(797)]; limit:1 } }; limit:2 }" }, { id: 412, name: "\u3042\u305F\u3057\u305F\u3061\u306E\u7D04\u675F+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 135, welfare: false, effects: "at:endOfTurn { if:cumulativeFullPowerCharge>=13 { target:797 { g.scoreTimes+=1 }; at:turn { moveRandomToHand[baseId(797)]; limit:1 } }; limit:2 }" }, { id: 413, name: "\u5922\u3092\u53F6\u3048\u308B\u305F\u3081\u306B", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn & countCards[removed]>=7 { goodConditionTurns+=1 } }" }, { id: 414, name: "\u5207\u78CB\u7422\u78E8\u306E\u30BF\u30AA\u30EB", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 415, name: "\u304A\u304B\u3044\u3082\u306E\u30D0\u30C3\u30B0", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: true, effects: "at:stanceChanged { if:isDirectEffect & isStrength & isDanceTurn & genki==0 { halfCostTurns+=1 } }" }, { id: 416, name: "\u5922\u3092\u5275\u308B\u30B9\u30C6\u30C3\u30AD", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 136, welfare: false, effects: "at:endOfTurn { if:turnsElapsed%3==2 { score+=genki*1.1; genki=0; at:turn { drawCard; limit:1 } }; limit:3 }" }, { id: 417, name: "\u5922\u3092\u5275\u308B\u30B9\u30C6\u30C3\u30AD+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 136, welfare: false, effects: "at:endOfTurn { if:turnsElapsed%3==2 { score+=genki*1.3; genki=0; at:turn { drawCard(2); limit:1 } }; limit:3 }" }, { id: 418, name: "\u3082\u3050\u3082\u3050\u5B9A\u98DF", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 419, name: "\u591C\u7A7A\u3092\u5F93\u3048\u308B\u82B1", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 137, welfare: false, effects: "at:afterCardUsed { if:prevStance!=none & cardHasEffect(strength) { effectCounter+=1; if:effectCounter%3==2 { setStance(leisure); setEnthusiasmBuff(0.4,1); genki+=3; limit:5 } } }" }, { id: 420, name: "\u591C\u7A7A\u3092\u5F93\u3048\u308B\u82B1+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 137, welfare: false, effects: "at:afterCardUsed { if:prevStance!=none & cardHasEffect(strength) { effectCounter+=1; if:effectCounter%3==2 { setStance(leisure); setEnthusiasmBuff(0.4,1); genki+=3 } } }" }, { id: 421, name: "\u306E\u3093\u3073\u308A\u30A2\u30D5\u30BF\u30CC\u30FC\u30F3", rarity: "SR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:fullPowerChargeIncreased { if:isVisualTurn & isDirectEffect & isFullPower { fullPowerCharge+=6 }; limit:1 }" }, { id: 422, name: "\u592A\u967D\u3092\u8D85\u3048\u308B\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 138, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { genki+=consumedGenki*0.75; drawCard(2); fixedStamina-=3 }; limit:1 }" }, { id: 423, name: "\u592A\u967D\u3092\u8D85\u3048\u308B\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 138, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { genki+=consumedGenki*0.75; drawCard(2); fixedStamina-=1 }; limit:1 }" }, { id: 424, name: "\u61A7\u308C\u7D9A\u3051\u305F\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 139, welfare: false, effects: "at:cardUsed { if:goodConditionTurns>=8 & cardHasEffect(goodConditionTurns) { effectCounter+=1; if:effectCounter%4==3 { perfectConditionTurns+=1; cardUsesRemaining+=1; drawCard; fixedStamina-=1; limit:5 } } }" }, { id: 425, name: "\u61A7\u308C\u7D9A\u3051\u305F\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 139, welfare: false, effects: "at:cardUsed { if:goodConditionTurns>=6 & cardHasEffect(goodConditionTurns) { effectCounter+=1; if:effectCounter%4==3 { perfectConditionTurns+=1; cardUsesRemaining+=1; drawCard; limit:5 } } }" }, { id: 426, name: "\u60F3\u5B9A\u5916\u306E\u30C1\u30B1\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:afterStartOfTurn { if:isVisualTurn & goodConditionTurns>=10 { goodConditionTurns+=3; moveRandomToHand[pIdol & (deck | discarded)]; cardUsesRemaining+=1 }; limit:1 }" }, { id: 427, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u7D2B\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 428, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u7DD1\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 429, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u9EC4\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 430, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u8D64\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 431, name: "\u30DD\u30FC\u30C1\uFF08\u8D64\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 432, name: "\u30DD\u30FC\u30C1\uFF08\u7DD1\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 433, name: "\u30DD\u30FC\u30C1\uFF08\u9EC4\uFF09", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 434, name: "\u30DD\u30FC\u30C1\uFF08\u8D64\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 435, name: "\u30DD\u30FC\u30C1\uFF08\u7DD1\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 436, name: "\u30DD\u30FC\u30C1\uFF08\u9EC4\uFF09", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 437, name: "\u30DD\u30FC\u30C1\uFF08\u8D64\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 438, name: "\u30DD\u30FC\u30C1\uFF08\u7DD1\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 439, name: "\u30DD\u30FC\u30C1\uFF08\u9EC4\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 440, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u9752\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 441, name: "H.I.F\u5FDC\u63F4\u68D2\uFF08\u6843\uFF09", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "produce", pIdolId: "", welfare: false, effects: "at:startOfStage { if:countCards[deck]<22 { addRandomBasicCardToDeckAtRandom(22-countCards[deck]) }}" }, { id: 442, name: "\u3059\u3079\u3066\u3092\u8CED\u3051\u305F\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 140, welfare: false, effects: "at:afterCardUsed { if:cardSourceType==pIdol & stamina>=maxStamina*0.8 { costReduction+=1; cardUsesRemaining+=1; fixedStamina-=2 }; limit:3 }" }, { id: 443, name: "\u3059\u3079\u3066\u3092\u8CED\u3051\u305F\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 140, welfare: false, effects: "at:afterCardUsed { if:cardSourceType==pIdol & stamina>=maxStamina*0.8 { costReduction+=1; genki+=1; cardUsesRemaining+=1; fixedStamina-=1 }; limit:3 }" }, { id: 444, name: "\u5922\u306E\u624B\u52A9\u3051", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 445, name: "\u5F37\u3044\u610F\u5FD7\u306E\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 141, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%5==4 { motivationMultiplier=2; genki+=10; fixedStamina-=1; limit:2 } } }" }, { id: 446, name: "\u5F37\u3044\u610F\u5FD7\u306E\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 141, welfare: false, effects: "at:motivationIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%5==4 { motivationMultiplier=2; genki+=15; limit:2 } } }" }, { id: 447, name: "H.I.F\u30EF\u30C3\u30DA\u30F3", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "produce", pIdolId: "", welfare: false, effects: "" }, { id: 448, name: "\u6EA2\u308C\u51FA\u308B\u60F3\u3044", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 142, welfare: false, effects: "at:afterCardUsed[mental] { if:goodConditionTurns>=5 { effectCounter+=1; if:effectCounter%3==2 { goodConditionTurns+=3; perfectConditionTurns+=1; limit:3 } } }" }, { id: 449, name: "\u6EA2\u308C\u51FA\u308B\u60F3\u3044+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 142, welfare: false, effects: "at:afterCardUsed[mental] { if:goodConditionTurns>=5 { effectCounter+=1; if:effectCounter%3==2 { goodConditionTurns+=3; perfectConditionTurns+=1; genki+=3; limit:3 } } }" }, { id: 450, name: "\u63FA\u308C\u52D5\u304F\u60F3\u3044", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 143, welfare: false, effects: "at:cardUsed[active] { if:strengthTimes>=4 { setStance(strength); setEnthusiasmBonus(3,1) } }" }, { id: 451, name: "\u63FA\u308C\u52D5\u304F\u60F3\u3044+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 143, welfare: false, effects: "at:cardUsed[active] { if:strengthTimes>=3 { setStance(strength); setEnthusiasmBonus(3,1) } }" }, { id: 452, name: "\u604B\u5FC3\u306E\u3086\u304F\u3048", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn & isPreservation { genki+=3; moveRandomToHand[effect(strength) & (deck | discarded)]; limit:3 } }" }, { id: 453, name: "\u61D0\u304B\u3057\u30D1\u30FC\u30C6\u30A3\u30FC\u8AD6\u4E89", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 454, name: "\u3042\u3053\u304C\u308C\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 144, welfare: false, effects: "at:stanceChanged { if:isFullPower { setFullPowerEffectBuff(0.25); limit:4 } }" }, { id: 455, name: "\u3042\u3053\u304C\u308C\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 144, welfare: false, effects: "at:stanceChanged { if:isFullPower { setFullPowerEffectBuff(0.35); limit:4 } }" }, { id: 456, name: "\u5C45\u7720\u308A\u6CE8\u610F\uFF01", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 457, name: "\u3075\u3089\u3044\u3068\u30E9\u30A4\u30AA\u30F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 145, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=6 { perfectConditionTurns+=3; halfCostTurns+=2 }; limit:1 }" }, { id: 458, name: "\u3075\u3089\u3044\u3068\u30E9\u30A4\u30AA\u30F3+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 145, welfare: false, effects: "at:startOfTurn { if:goodConditionTurns>=6 { perfectConditionTurns+=4; halfCostTurns+=3 }; limit:1 }" }, { id: 459, name: "\u30A2\u30A4\u30C9\u30EB\u535A\u58EB\u306E\u5FC5\u9700\u54C1", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 146, welfare: false, effects: "at:activeCardUsed { if:goodImpressionTurns>=10 { effectCounter+=1; if:effectCounter%2==1 { goodImpressionTurns+=6; at:turn { drawCard; limit:1 }; limit:2 } } }" }, { id: 460, name: "\u30A2\u30A4\u30C9\u30EB\u535A\u58EB\u306E\u5FC5\u9700\u54C1+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 146, welfare: false, effects: "at:activeCardUsed { if:goodImpressionTurns>=10 { effectCounter+=1; if:effectCounter%2==1 { goodImpressionTurns+=6; at:turn { drawCard; limit:1 }; limit:3 } } }" }, { id: 461, name: "\u5168\u529B\u304A\u3046\u3048\u3093\u3046\u3061\u308F", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:cardUsed[active] { if:isVocalTurn & genki<=30 { goodImpressionTurns+=3; setScoreBuff(0.1,5) }; limit:1 }" }, { id: 462, name: "\u30C9\u30AD\u30C9\u30AD\u76EE\u96A0\u3057", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 463, name: "\u706B\u82B1\u6563\u308B\u30CA\u30A4\u30C8\u30AD\u30E9\u30FC", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 147, welfare: false, effects: "at:stanceChanged { if:isFullPower & fullPowerCharge>=10 { genki+=6; fullPowerCharge+=6; target:all { g.score+=3 }; limit:2 } }" }, { id: 464, name: "\u706B\u82B1\u6563\u308B\u30CA\u30A4\u30C8\u30AD\u30E9\u30FC+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 147, welfare: false, effects: "at:stanceChanged { if:isFullPower & fullPowerCharge>=10 { genki+=6; fullPowerCharge+=6; target:all { g.score+=3 }; limit:3 } }" }, { id: 465, name: "\u4E0D\u5C48\u306E\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 148, welfare: false, effects: "at:afterCardUsed[baseId(849)] { if:preservationTimes>=2 { target:849 { g.score+=100 }; at:turn { drawCard; limit:1 }; fixedStamina-=3 }; limit:2 }" }, { id: 466, name: "\u4E0D\u5C48\u306E\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 148, welfare: false, effects: "at:afterCardUsed[baseId(849)] { if:preservationTimes>=2 { target:849 { g.score+=100 }; at:turn { drawCard; limit:1 } }; limit:2 }" }, { id: 467, name: "\u6CE8\u76EE\u30A4\u30F3\u30BF\u30D3\u30E5\u30FC\uFF01", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "support", pIdolId: "", welfare: false, effects: "at:startOfTurn { if:isVisualTurn & preservationTimes>=4 { target:active { g.score+=22 }; limit:1 } }" }, { id: 468, name: "\u304D\u3063\u3061\u308A\u30D5\u30A1\u30F3\u88C5\u5099", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 469, name: "\u590F\u3092\u7DE8\u3093\u3060\u5F71", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 149, welfare: false, effects: "at:cardUsed { if:cardHasEffect(strength) & stance==strength2 { setStrengthEffectBuff(0.35); at:turn { setStance(preservation); limit:1 } }; limit:2 }" }, { id: 470, name: "\u590F\u3092\u7DE8\u3093\u3060\u5F71+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 149, welfare: false, effects: "at:cardUsed { if:cardHasEffect(strength) & stance==strength2 { setStrengthEffectBuff(0.6); at:turn { setStance(preservation); limit:1 } }; limit:2 }" }, { id: 471, name: "\u5927\u6E80\u8DB3\u30EC\u30DD\u30FC\u30C8\u266A", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 472, name: "\u307B\u3063\u307A\u305F\u307A\u305F\u308A", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 473, name: "\u6EB6\u3051\u3066\u3086\u304F\u590F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 150, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 { genki+=3; concentration+=2 }; limit:2 }" }, { id: 474, name: "\u6EB6\u3051\u3066\u3086\u304F\u590F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 150, welfare: false, effects: "at:everyTurn { if:turnsElapsed%3==2 { genki+=5; concentration+=3 }; limit:2 }" }, { id: 475, name: "\u590F\u306E\u8DB3\u97F3", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 151, welfare: false, effects: "at:buffCostConsumed { if:concentration>=13 { concentration+=2; setConcentrationEffectBuff(0.05,1); genki+=1 } }" }, { id: 476, name: "\u590F\u306E\u8DB3\u97F3+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 151, welfare: false, effects: "at:buffCostConsumed { if:concentration>=13 { concentration+=3; setConcentrationEffectBuff(0.05,1); genki+=1 } }" }, { id: 477, name: "\u771F\u590F\u306B\u54B2\u304F\u592A\u967D", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 478, name: "\u61A7\u308C\u306E\u6A19", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 152, welfare: false, effects: "at:afterActiveCardUsed { if:goodConditionTurns>=8 { goodConditionTurns+=4; cardUsesRemaining+=1 }; limit:1 }" }, { id: 479, name: "\u61A7\u308C\u306E\u6A19+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 152, welfare: false, effects: "at:afterActiveCardUsed { if:goodConditionTurns>=8 { goodConditionTurns+=5; cardUsesRemaining+=1; genki+=5 }; limit:1 }" }, { id: 480, name: "\u53EF\u80FD\u6027\u306E\u6A19", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 153, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=genki*0.65; fixedStamina-=2 } }" }, { id: 481, name: "\u53EF\u80FD\u6027\u306E\u6A19+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 153, welfare: false, effects: "at:startOfTurn { if:turnsRemaining<=2 { score+=genki*0.8; fixedStamina-=2 } }" }, { id: 482, name: "\u52C7\u6C17\u306E\u6A19", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 154, welfare: false, effects: "at:cardUsed { if:concentration>=13 { cardUsesRemaining+=1; concentration+=4 }; limit:1 }" }, { id: 483, name: "\u52C7\u6C17\u306E\u6A19+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 154, welfare: false, effects: "at:cardUsed { if:concentration>=13 { cardUsesRemaining+=1; concentration+=7 }; limit:1 }" }, { id: 484, name: "\u305F\u3089\u3075\u304F\u3059\u3057\u653E\u984C\u266A", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: true, effects: "" }, { id: 485, name: "\u9802\u70B9\u306E\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 155, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { goodImpressionTurns+=5; turnsRemaining+=1; goodImpressionTurns-=6 }; limit:2 }" }, { id: 486, name: "\u9802\u70B9\u306E\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 155, welfare: false, effects: "at:startOfTurn { if:turnsRemaining==1 { goodImpressionTurns+=5; turnsRemaining+=1; fixedStamina+=1; goodImpressionTurns-=6 }; limit:2 }" }, { id: 487, name: "\u7D20\u6575\u306A\u304A\u4ED5\u4E8B", rarity: "SSR", upgraded: false, plan: "free", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 488, name: "\u6B62\u307E\u306A\u3044\u5D50", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 156, welfare: false, effects: "at:startOfTurn { setFullPowerChargeBuff(0.25,1); setStance(preservation); genki+=2; doubleBuffCostTurns+=1 }" }, { id: 489, name: "\u6B62\u307E\u306A\u3044\u5D50+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 156, welfare: false, effects: "at:startOfTurn { setFullPowerChargeBuff(0.4,1); setStance(preservation); genki+=2; doubleBuffCostTurns+=1 }" }, { id: 490, name: "\u9650\u754C\u3078\u306E\u6311\u6226\u5238", rarity: "SR", upgraded: false, plan: "anomaly", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 491, name: "\u5C0F\u60AA\u9B54\u306E\u8272\u6C17", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 157, welfare: false, effects: "at:startOfTurn { if:isFullPower { genki+=7; fullPowerCharge+=1 }; limit:2 }" }, { id: 492, name: "\u5C0F\u60AA\u9B54\u306E\u8272\u6C17+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 157, welfare: false, effects: "at:startOfTurn { if:isFullPower { genki+=7; fullPowerCharge+=2 }; limit:2 }" }, { id: 493, name: "\u5929\u6027\u306E\u624D\u80FD", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 158, welfare: false, effects: "at:afterCardUsed { if:countCards[hand & baseId(23)]>=1 { score+=goodConditionTurns*0.3 } }" }, { id: 494, name: "\u5929\u6027\u306E\u624D\u80FD+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 158, welfare: false, effects: "at:afterCardUsed { if:countCards[hand & baseId(23)]>=1 { genki+=1; score+=goodConditionTurns*0.5 } }" }, { id: 495, name: "\u738B\u5B50\u69D8\u96A0\u3057\u304B\u307C\u3061\u3083", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 496, name: "\u898F\u683C\u5916\u306E\u9B45\u529B", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 159, welfare: false, effects: "at:mentalCardUsed { if:motivation>=5 { effectCounter+=1; if:effectCounter%2==1 { motivation+=4; costReduction+=1; limit:2 } } }" }, { id: 497, name: "\u898F\u683C\u5916\u306E\u9B45\u529B+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 159, welfare: false, effects: "at:mentalCardUsed { if:motivation>=5 { effectCounter+=1; if:effectCounter%2==1 { motivation+=5; goodImpressionTurns+=1; costReduction+=1; limit:2 } } }" }, { id: 498, name: "\u82B1\u6D77\u30D5\u30A1\u30FC\u30E0\u30E9\u30F3\u30BF\u30F3", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 499, name: "\u304A\u624B\u88FD\u3074\u3063\u305F\u308A\u8863\u88C5", rarity: "SR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 500, name: "\u4E16\u754C\u3092\u9B45\u4E86\u3059\u308B\u59FF", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 160, welfare: false, effects: "at:afterStartOfTurn { if:turnsRemaining<=4 { genki+=1; moveRandomToHand[removed & baseId(909)]; fixedStamina-=1; doubleBuffCostTurns+=1 }; limit:4 }" }, { id: 501, name: "\u4E16\u754C\u3092\u9B45\u4E86\u3059\u308B\u59FF+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 160, welfare: false, effects: "at:afterStartOfTurn { if:turnsRemaining<=5 { genki+=2; moveRandomToHand[removed & baseId(909)]; fixedStamina-=1; doubleBuffCostTurns+=1 }; limit:5 }" }, { id: 502, name: "\u304A\u8A98\u3044\u30C1\u30B1\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 503, name: "\u306D\u304E\u3089\u3044\u30B3\u30FC\u30D2\u30FC", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 504, name: "\u30D2\u30FC\u30ED\u30FC\u306E\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 161, welfare: false, effects: "at:afterStartOfTurn { if:cumulativeFullPowerCharge>=10 { genki+=4; setScoreBuff(0.25); moveRandomToHand[baseId(911) & (deck | discarded)] }; limit:1 }" }, { id: 505, name: "\u30D2\u30FC\u30ED\u30FC\u306E\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 161, welfare: false, effects: "at:afterStartOfTurn { if:cumulativeFullPowerCharge>=10 { genki+=11; setScoreBuff(0.25); moveRandomToHand[baseId(911) & (deck | discarded)] }; limit:1 }" }, { id: 506, name: "\u5922\u898B\u308B\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 162, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==917 { moveRandomToTopOfDeck[removed & baseId(917)]; fixedStamina-=1 }; limit:3 }" }, { id: 507, name: "\u5922\u898B\u308B\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "anomaly", mode: "stage", sourceType: "pIdol", pIdolId: 162, welfare: false, effects: "at:afterCardUsed { if:usedCardBaseId==917 { moveRandomToTopOfDeck[removed & baseId(917)]; genki+=2 }; limit:3 }" }, { id: 508, name: "\u661F\u3005\u3092\u7D71\u3079\u308B\u8F1D\u304D", rarity: "SSR", upgraded: false, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 163, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%4==3 { setGoodImpressionTurnsTimesBuff(1,2); setGoodImpressionTurnsEffectBuff(0.1,2); fixedStamina-=1 } } }" }, { id: 509, name: "\u661F\u3005\u3092\u7D71\u3079\u308B\u8F1D\u304D+", rarity: "SSR", upgraded: true, plan: "logic", mode: "stage", sourceType: "pIdol", pIdolId: 163, welfare: false, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%4==3 { setGoodImpressionTurnsTimesBuff(1,2); setGoodImpressionTurnsEffectBuff(0.1,2) } } }" }, { id: 510, name: "\u904E\u6FC0\u3081\uFF1F\u30C1\u30E7\u30A4\u30B9", rarity: "SSR", upgraded: false, plan: "logic", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 511, name: "\u4EF2\u826F\u3057\u30A2\u30EB\u30D0\u30E0", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: true, effects: "" }, { id: 512, name: "\u306A\u306B\u304B\u304C\u5909\u308F\u308B\u4E88\u611F", rarity: "SSR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 164, welfare: false, effects: "at:afterStartOfStage { setMetamorphosis; concentration+=1; limit:1 }" }, { id: 513, name: "\u306A\u306B\u304B\u304C\u5909\u308F\u308B\u4E88\u611F+", rarity: "SSR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 164, welfare: false, effects: "at:afterStartOfStage { setMetamorphosis; concentration+=1; goodConditionTurns+=1; limit:1 }" }, { id: 514, name: "\u304A\u8FD4\u3057\u306E\u9AEA\u98FE\u308A", rarity: "SR", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 165, welfare: false, effects: "at:endOfTurn { if:turnsRemaining<=2 { score+=3 }; limit:2 }" }, { id: 515, name: "\u304A\u8FD4\u3057\u306E\u9AEA\u98FE\u308A+", rarity: "SR", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 165, welfare: false, effects: "at:endOfTurn { if:turnsRemaining<=2 { score+=5 }; limit:2 }" }, { id: 516, name: "\u304A\u5B22\u69D8\u304A\u3067\u304B\u3051\u30BB\u30C3\u30C8", rarity: "SSR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 517, name: "\u304A\u6383\u9664\u306E\u6210\u679C", rarity: "SR", upgraded: false, plan: "sense", mode: "produce", sourceType: "support", pIdolId: "", welfare: false, effects: "" }, { id: 518, name: "\u5F93\u8005\u306E\u5FC5\u9700\u54C1", rarity: "R", upgraded: false, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 166, welfare: false, effects: "at:afterStartOfStage { concentration+=2; setScoreDebuff(0.1,2); limit:1 }" }, { id: 519, name: "\u5F93\u8005\u306E\u5FC5\u9700\u54C1+", rarity: "R", upgraded: true, plan: "sense", mode: "stage", sourceType: "pIdol", pIdolId: 166, welfare: false, effects: "at:afterStartOfStage { concentration+=3; setScoreDebuff(0.1,2); limit:1 }" }];

  // vendor/gakumas-data/utils/contestPower.js
  function getPItemContestPower(pItem) {
    if (pItem.sourceType == "pIdol") {
      if (pItem.rarity == "R") {
        return pItem.upgraded ? 240 : 150;
      }
      if (pItem.rarity == "SR") {
        return pItem.upgraded ? 300 : 225;
      }
      if (pItem.rarity == "SSR") {
        return pItem.upgraded ? 420 : 300;
      }
    } else if (pItem.sourceType == "support") {
      if (pItem.rarity == "SR") {
        return 135;
      } else if (pItem.rarity == "SSR") {
        if (pItem.welfare) {
          return 159;
        } else {
          return 180;
        }
      }
    }
    return 0;
  }
  function getSkillCardContestPower(skillCard) {
    if (skillCard.sourceType == "pIdol") {
      return skillCard.upgraded ? 15 : 3;
    } else if (skillCard.sourceType == "support") {
      return skillCard.upgraded ? 126 : 96;
    } else if (skillCard.sourceType == "produce") {
      if (skillCard.rarity == "R") {
        if (skillCard.unlockPlv <= 2) {
          return skillCard.upgraded ? 39 : 30;
        } else {
          return skillCard.upgraded ? 60 : 45;
        }
      }
      if (skillCard.rarity == "SR") {
        if (skillCard.unlockPlv <= 2) {
          return skillCard.upgraded ? 102 : 75;
        } else {
          return skillCard.upgraded ? 141 : 105;
        }
      }
      if (skillCard.rarity == "SSR") {
        return skillCard.upgraded ? 204 : 150;
      }
    }
    return 0;
  }

  // vendor/gakumas-data/data/pItems.js
  p_items_default.forEach((pItem) => {
    pItem._type = "pItem";
    pItem.pIdolId = pItem.pIdolId || null;
    pItem.contestPower = getPItemContestPower(pItem);
  });
  var parsed2 = lazyParse(p_items_default, (pItem) => {
    pItem.effects = deserializeEffectSequence(pItem.effects);
  });
  var P_ITEMS_BY_ID = p_items_default.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
  var PItems = class {
    static getAll() {
      return parsed2.all();
    }
    static getById(id) {
      return parsed2.one(P_ITEMS_BY_ID[id]);
    }
    static getFiltered({ rarities, plans, modes, sourceTypes, pIdolIds }) {
      return p_items_default.filter((pItem) => {
        if (rarities && !rarities.includes(pItem.rarity)) return false;
        if (plans && !plans.includes(pItem.plan)) return false;
        if (modes && !modes.includes(pItem.mode)) return false;
        if (sourceTypes && !sourceTypes.includes(pItem.sourceType)) return false;
        if (pIdolIds && !pIdolIds.includes(pItem.pIdolId)) return false;
        return true;
      }).map(parsed2.one);
    }
  };
  var pItems_default = PItems;

  // vendor/gakumas-data/csv/skill_cards.csv
  var skill_cards_default = [{ id: 1, name: "\u30A2\u30D4\u30FC\u30EB\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9", limit: "", effects: "" }, { id: 2, name: "\u30A2\u30D4\u30FC\u30EB\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=14", limit: "", effects: "" }, { id: 3, name: "\u30DD\u30FC\u30BA\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=2; genki+=2", limit: "", effects: "" }, { id: 4, name: "\u30DD\u30FC\u30BA\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=6; genki+=4", limit: "", effects: "" }, { id: 5, name: "\u6311\u6226", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=7", actions: "score+=25", limit: 1, effects: "" }, { id: 6, name: "\u6311\u6226+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=7", actions: "score+=37", limit: 1, effects: "" }, { id: 7, name: "\u8A66\u884C\u932F\u8AA4", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "score+=8; score+=8", limit: 1, effects: "" }, { id: 8, name: "\u8A66\u884C\u932F\u8AA4+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; score+=10", limit: 1, effects: "" }, { id: 9, name: "\u53EF\u611B\u3044\u4ED5\u8349", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=2; score+=goodImpressionTurns", limit: 1, effects: "" }, { id: 10, name: "\u53EF\u611B\u3044\u4ED5\u8349+", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=3; score+=goodImpressionTurns*1.2", limit: 1, effects: "" }, { id: 11, name: "\u6C17\u5206\u8EE2\u63DB", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "score+=genki", limit: 1, effects: "" }, { id: 12, name: "\u6C17\u5206\u8EE2\u63DB+", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=genki*1.1", limit: 1, effects: "" }, { id: 13, name: "\u8868\u73FE\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=4", limit: 1, effects: "" }, { id: 14, name: "\u8868\u73FE\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=7", limit: 1, effects: "" }, { id: 15, name: "\u632F\u308B\u821E\u3044\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=1; goodConditionTurns+=2", limit: "", effects: "" }, { id: 16, name: "\u632F\u308B\u821E\u3044\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=1; goodConditionTurns+=3", limit: "", effects: "" }, { id: 17, name: "\u8868\u60C5\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=1; concentration+=2", limit: "", effects: "" }, { id: 18, name: "\u8868\u60C5\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=1; concentration+=3", limit: "", effects: "" }, { id: 19, name: "\u76EE\u7DDA\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=1; goodImpressionTurns+=2", limit: "", effects: "" }, { id: 20, name: "\u76EE\u7DDA\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; goodImpressionTurns+=3", limit: "", effects: "" }, { id: 21, name: "\u610F\u8B58\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=1; motivation+=2", limit: "", effects: "" }, { id: 22, name: "\u610F\u8B58\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; motivation+=3", limit: "", effects: "" }, { id: 23, name: "\u7720\u6C17", availableCustomizations: "", rarity: "T", type: "trouble", plan: "free", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "", limit: 1, effects: "" }, { id: 24, name: "\u8EFD\u3044\u8DB3\u53D6\u308A", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; goodConditionTurns+=2", limit: "", effects: "" }, { id: 25, name: "\u8EFD\u3044\u8DB3\u53D6\u308A+", availableCustomizations: "65,68,18", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9; goodConditionTurns+=3", limit: "", effects: "" }, { id: 26, name: "\u611B\u5B0C", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=13", limit: "", effects: "" }, { id: 27, name: "\u611B\u5B0C+", availableCustomizations: "14,18,65", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=21", limit: "", effects: "" }, { id: 28, name: "\u6E96\u5099\u904B\u52D5", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; concentration+=2", limit: "", effects: "" }, { id: 29, name: "\u6E96\u5099\u904B\u52D5+", availableCustomizations: "70,4,64", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9; concentration+=3", limit: "", effects: "" }, { id: 30, name: "\u30D5\u30A1\u30F3\u30B5", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 2, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=10", limit: "", effects: "" }, { id: 31, name: "\u30D5\u30A1\u30F3\u30B5+", availableCustomizations: "14,16,65", rarity: "R", type: "active", plan: "sense", unlockPlv: 2, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=16", limit: "", effects: "" }, { id: 32, name: "\u52E2\u3044\u4EFB\u305B", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 9, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; if:goodConditionTurns>=1 { concentration+=3 }", limit: "", effects: "" }, { id: 33, name: "\u52E2\u3044\u4EFB\u305B+", availableCustomizations: "70,4,64", rarity: "R", type: "active", plan: "sense", unlockPlv: 9, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9; if:goodConditionTurns>=1 { concentration+=4 }", limit: "", effects: "" }, { id: 34, name: "\u30CF\u30A4\u30BF\u30C3\u30C1", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 13, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=1.5; score+=17", limit: 1, effects: "" }, { id: 35, name: "\u30CF\u30A4\u30BF\u30C3\u30C1+", availableCustomizations: "65,29,27", rarity: "R", type: "active", plan: "sense", unlockPlv: 13, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=2; score+=23", limit: 1, effects: "" }, { id: 36, name: "\u30C8\u30FC\u30AF\u30BF\u30A4\u30E0", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 14, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=6", actions: "score+=27", limit: 1, effects: "" }, { id: 37, name: "\u30C8\u30FC\u30AF\u30BF\u30A4\u30E0+", availableCustomizations: "65,29,18", rarity: "R", type: "active", plan: "sense", unlockPlv: 14, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=6", actions: "score+=38", limit: 1, effects: "" }, { id: 38, name: "\u4ECA\u65E5\u3082\u304A\u306F\u3088\u3046", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=7; goodImpressionTurns+=3", limit: "", effects: "" }, { id: 39, name: "\u4ECA\u65E5\u3082\u304A\u306F\u3088\u3046+", availableCustomizations: "71,7,65", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9; goodImpressionTurns+=4", limit: "", effects: "" }, { id: 40, name: "\u3086\u308B\u3075\u308F\u304A\u3057\u3083\u3079\u308A", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivation+=3; score+=genki*0.6", limit: 1, effects: "" }, { id: 41, name: "\u3086\u308B\u3075\u308F\u304A\u3057\u3083\u3079\u308A+", availableCustomizations: "27,72,67", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivation+=4; score+=genki*0.8", limit: 1, effects: "" }, { id: 42, name: "\u3082\u3046\u5C11\u3057\u3060\u3051", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; motivation+=3", limit: "", effects: "" }, { id: 43, name: "\u3082\u3046\u5C11\u3057\u3060\u3051+", availableCustomizations: "72,65,27", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=15; motivation+=4", limit: "", effects: "" }, { id: 44, name: "\u624B\u62CD\u5B50", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 13, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=goodImpressionTurns*1.5", limit: 1, effects: "" }, { id: 45, name: "\u624B\u62CD\u5B50+", availableCustomizations: "66,29,20", rarity: "R", type: "active", plan: "logic", unlockPlv: 13, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=goodImpressionTurns*2", limit: 1, effects: "" }, { id: 46, name: "\u5143\u6C17\u306A\u6328\u62F6", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 14, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "score+=genki*1.1", limit: 1, effects: "" }, { id: 47, name: "\u5143\u6C17\u306A\u6328\u62F6+", availableCustomizations: "67,9,29", rarity: "R", type: "active", plan: "logic", unlockPlv: 14, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=genki*1.2", limit: 1, effects: "" }, { id: 48, name: "\u6C17\u5408\u5341\u5206\uFF01", availableCustomizations: "", rarity: "R", type: "mental", plan: "free", unlockPlv: 16, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=2; halfCostTurns+=2", limit: "", effects: "" }, { id: 49, name: "\u6C17\u5408\u5341\u5206\uFF01+", availableCustomizations: "75,74,36", rarity: "R", type: "mental", plan: "free", unlockPlv: 16, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=2; halfCostTurns+=3", limit: "", effects: "" }, { id: 50, name: "\u30D5\u30A1\u30FC\u30B9\u30C8\u30B9\u30C6\u30C3\u30D7", availableCustomizations: "", rarity: "R", type: "mental", plan: "free", unlockPlv: 16, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=3; if:stamina>=maxStamina*0.5 { costReduction+=1 }", limit: 1, effects: "" }, { id: 51, name: "\u30D5\u30A1\u30FC\u30B9\u30C8\u30B9\u30C6\u30C3\u30D7+", availableCustomizations: "75,36,3", rarity: "R", type: "mental", plan: "free", unlockPlv: 16, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=6; if:stamina>=maxStamina*0.5 { costReduction+=1 }", limit: 1, effects: "" }, { id: 52, name: "\u30D0\u30E9\u30F3\u30B9\u611F\u899A", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "concentration+=3", limit: "", effects: "" }, { id: 53, name: "\u30D0\u30E9\u30F3\u30B9\u611F\u899A+", availableCustomizations: "70,75,14", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=1; concentration+=4", limit: "", effects: "" }, { id: 54, name: "\u697D\u89B3\u7684", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 4, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodConditionTurns+=3; if:goodConditionTurns>=1 { concentration+=1 }", limit: "", effects: "" }, { id: 55, name: "\u697D\u89B3\u7684+", availableCustomizations: "70,68,3", rarity: "R", type: "mental", plan: "sense", unlockPlv: 4, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodConditionTurns+=4; if:goodConditionTurns>=1 { concentration+=1 }", limit: "", effects: "" }, { id: 56, name: "\u6DF1\u547C\u5438", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 19, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=2; if:concentration>=3 { goodConditionTurns+=3 }", limit: "", effects: "" }, { id: 57, name: "\u6DF1\u547C\u5438+", availableCustomizations: "3,70,68", rarity: "R", type: "mental", plan: "sense", unlockPlv: 19, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=3; if:concentration>=3 { goodConditionTurns+=3 }", limit: "", effects: "" }, { id: 58, name: "\u30EA\u30B9\u30BF\u30FC\u30C8", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=2; goodImpressionTurns+=3", limit: "", effects: "" }, { id: 59, name: "\u30EA\u30B9\u30BF\u30FC\u30C8+", availableCustomizations: "75,71,7", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=2; goodImpressionTurns+=4", limit: "", effects: "" }, { id: 60, name: "\u3048\u3044\u3048\u3044\u304A\u30FC", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=1; motivation+=3", limit: "", effects: "" }, { id: 61, name: "\u3048\u3044\u3048\u3044\u304A\u30FC+", availableCustomizations: "75,72,9", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; motivation+=4", limit: "", effects: "" }, { id: 62, name: "\u30EA\u30BA\u30DF\u30AB\u30EB", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 2, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=6", limit: 1, effects: "" }, { id: 63, name: "\u30EA\u30BA\u30DF\u30AB\u30EB+", availableCustomizations: "22,20,75", rarity: "R", type: "mental", plan: "logic", unlockPlv: 2, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=8", limit: 1, effects: "" }, { id: 64, name: "\u601D\u3044\u51FA\u3057\u7B11\u3044", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 4, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=3; if:goodImpressionTurns>=3 { motivation+=2 }", limit: "", effects: "" }, { id: 65, name: "\u601D\u3044\u51FA\u3057\u7B11\u3044+", availableCustomizations: "71,72,7", rarity: "R", type: "mental", plan: "logic", unlockPlv: 4, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=4; if:goodImpressionTurns>=3 { motivation+=3 }", limit: "", effects: "" }, { id: 66, name: "\u30D1\u30B9\u30C6\u30EB\u6C17\u5206", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 9, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=5; if:motivation>=3 { goodImpressionTurns+=3 }", limit: "", effects: "" }, { id: 67, name: "\u30D1\u30B9\u30C6\u30EB\u6C17\u5206+", availableCustomizations: "75,71,12", rarity: "R", type: "mental", plan: "logic", unlockPlv: 9, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=7; if:motivation>=3 { goodImpressionTurns+=4 }", limit: "", effects: "" }, { id: 68, name: "\u52B1\u307E\u3057", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 19, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "motivation+=3; if:motivation>=6 { goodImpressionTurns+=4 }", limit: "", effects: "" }, { id: 69, name: "\u52B1\u307E\u3057+", availableCustomizations: "72,27,71", rarity: "R", type: "mental", plan: "logic", unlockPlv: 19, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "motivation+=4; if:motivation>=6 { goodImpressionTurns+=5 }", limit: "", effects: "" }, { id: 70, name: "\u524D\u9014\u6D0B\u3005", availableCustomizations: "", rarity: "SR", type: "active", plan: "free", unlockPlv: 3, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=8; genki+=7", limit: "", effects: "" }, { id: 71, name: "\u524D\u9014\u6D0B\u3005+", availableCustomizations: "59,4,47", rarity: "SR", type: "active", plan: "free", unlockPlv: 3, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=12; genki+=10", limit: "", effects: "" }, { id: 72, name: "\u6C7A\u3081\u30DD\u30FC\u30BA", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=18", limit: 1, effects: "" }, { id: 73, name: "\u6C7A\u3081\u30DD\u30FC\u30BA+", availableCustomizations: "48,14,29", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=27", limit: 1, effects: "" }, { id: 74, name: "\u30A2\u30C9\u30EA\u30D6", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=5; goodConditionTurns+=3", limit: "", effects: "" }, { id: 75, name: "\u30A2\u30C9\u30EA\u30D6+", availableCustomizations: "48,52,18", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=9; goodConditionTurns+=4", limit: "", effects: "" }, { id: 76, name: "\u60C5\u71B1\u30BF\u30FC\u30F3", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=11; concentration+=3", limit: "", effects: "" }, { id: 77, name: "\u60C5\u71B1\u30BF\u30FC\u30F3+", availableCustomizations: "4,54,29", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=18; concentration+=4", limit: "", effects: "" }, { id: 78, name: "\u98DB\u8E8D", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 6, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=13; if:concentration>=6 { score+=15 }", limit: 1, effects: "" }, { id: 79, name: "\u98DB\u8E8D+", availableCustomizations: "47,14,37", rarity: "SR", type: "active", plan: "sense", unlockPlv: 6, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=13; if:concentration>=6 { score+=15 }", limit: 1, effects: "" }, { id: 80, name: "\u795D\u798F", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 7, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "score+=26; goodConditionTurns+=1", limit: 1, effects: "" }, { id: 81, name: "\u795D\u798F+", availableCustomizations: "48,52,16", rarity: "SR", type: "active", plan: "sense", unlockPlv: 7, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "score+=40; goodConditionTurns+=1", limit: 1, effects: "" }, { id: 82, name: "\u30B9\u30BF\u30FC\u30C8\u30C0\u30C3\u30B7\u30E5", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 22, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=30; genki+=10; doubleCostTurns+=2", limit: "", effects: "" }, { id: 83, name: "\u30B9\u30BF\u30FC\u30C8\u30C0\u30C3\u30B7\u30E5+", availableCustomizations: "48,29,14", rarity: "SR", type: "active", plan: "sense", unlockPlv: 22, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=40; genki+=10; doubleCostTurns+=2", limit: "", effects: "" }, { id: 84, name: "\u30B9\u30BF\u30F3\u30C9\u30D7\u30EC\u30FC", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 24, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=12; genki+=7; concentration+=5; doubleCostTurns+=2", limit: "", effects: "" }, { id: 85, name: "\u30B9\u30BF\u30F3\u30C9\u30D7\u30EC\u30FC+", availableCustomizations: "59,29,54", rarity: "SR", type: "active", plan: "sense", unlockPlv: 24, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=12; genki+=7; concentration+=7; doubleCostTurns+=2", limit: "", effects: "" }, { id: 86, name: "\u30B7\u30E5\u30D7\u30EC\u30D2\u30B3\u30FC\u30EB", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 33, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "score+=6; goodConditionTurns+=2; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 87, name: "\u30B7\u30E5\u30D7\u30EC\u30D2\u30B3\u30FC\u30EB+", availableCustomizations: "32,39", rarity: "SR", type: "active", plan: "sense", unlockPlv: 33, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=2", actions: "score+=6; goodConditionTurns+=3; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 88, name: "\u30E9\u30D6\u30EA\u30FC\u30A6\u30A4\u30F3\u30AF", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=4; score+=goodImpressionTurns*0.6", limit: "", effects: "" }, { id: 89, name: "\u30E9\u30D6\u30EA\u30FC\u30A6\u30A4\u30F3\u30AF+", availableCustomizations: "55,49,29", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=5; score+=goodImpressionTurns*0.8", limit: "", effects: "" }, { id: 90, name: "\u3042\u308A\u304C\u3068\u3046\u306E\u8A00\u8449", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=9; score+=genki*0.4", limit: 1, effects: "" }, { id: 91, name: "\u3042\u308A\u304C\u3068\u3046\u306E\u8A00\u8449+", availableCustomizations: "59,50,9", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=11; score+=genki*0.7", limit: 1, effects: "" }, { id: 92, name: "\u30CF\u30FC\u30C8\u306E\u5408\u56F3", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 6, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=genki*1.3; genki/=2", limit: 1, effects: "" }, { id: 93, name: "\u30CF\u30FC\u30C8\u306E\u5408\u56F3+", availableCustomizations: "51,30,9", rarity: "SR", type: "active", plan: "logic", unlockPlv: 6, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=genki*1.8; genki/=2", limit: 1, effects: "" }, { id: 94, name: "\u30AD\u30E9\u30E1\u30AD", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 24, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=5; score+=goodImpressionTurns*2; doubleCostTurns+=2", limit: 1, effects: "" }, { id: 95, name: "\u30AD\u30E9\u30E1\u30AD+", availableCustomizations: "59,20,49", rarity: "SR", type: "active", plan: "logic", unlockPlv: 24, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=5; score+=goodImpressionTurns*2.5; doubleCostTurns+=2", limit: 1, effects: "" }, { id: 96, name: "\u307F\u3093\u306A\u5927\u597D\u304D", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 34, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "score+=goodImpressionTurns*0.9; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 97, name: "\u307F\u3093\u306A\u5927\u597D\u304D+", availableCustomizations: "5,34", rarity: "SR", type: "active", plan: "logic", unlockPlv: 34, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "score+=goodImpressionTurns*1.2; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 98, name: "\u30A2\u30A4\u30C9\u30EB\u5BA3\u8A00", availableCustomizations: "", rarity: "SR", type: "mental", plan: "free", unlockPlv: 23, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "cardUsesRemaining+=1; drawCard(2)", limit: 1, effects: "" }, { id: 99, name: "\u30A2\u30A4\u30C9\u30EB\u5BA3\u8A00+", availableCustomizations: "24,27", rarity: "SR", type: "mental", plan: "free", unlockPlv: 23, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; drawCard(2); halfCostTurns+=1", limit: 1, effects: "" }, { id: 100, name: "\u30CF\u30A4\u30C6\u30F3\u30B7\u30E7\u30F3", availableCustomizations: "", rarity: "SR", type: "mental", plan: "free", unlockPlv: 23, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=11; nullifyGenkiTurns+=2; halfCostTurns+=3", limit: 1, effects: "" }, { id: 101, name: "\u30CF\u30A4\u30C6\u30F3\u30B7\u30E7\u30F3+", availableCustomizations: "3,59,58", rarity: "SR", type: "mental", plan: "free", unlockPlv: 23, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=13; nullifyGenkiTurns+=2; halfCostTurns+=4", limit: 1, effects: "" }, { id: 102, name: "\u773C\u529B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=6; concentration+=3", limit: 1, effects: "" }, { id: 103, name: "\u773C\u529B+", availableCustomizations: "3,59,54", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=8; concentration+=4", limit: 1, effects: "" }, { id: 104, name: "\u5927\u58F0\u63F4", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=6; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 105, name: "\u5927\u58F0\u63F4+", availableCustomizations: "3,52,59", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=8; goodConditionTurns+=4", limit: 1, effects: "" }, { id: 106, name: "\u6F14\u51FA\u8A08\u753B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 17, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "perfectConditionTurns+=3; at:cardUsed[active] { fixedGenki+=2 }", limit: 1, effects: "" }, { id: 107, name: "\u6F14\u51FA\u8A08\u753B+", availableCustomizations: "3,53,28", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 17, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "perfectConditionTurns+=4; at:cardUsed[active] { fixedGenki+=2 }", limit: 1, effects: "" }, { id: 108, name: "\u9858\u3044\u306E\u529B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 18, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=2; at:cardUsed[active] { concentration+=1 }", limit: 1, effects: "" }, { id: 109, name: "\u9858\u3044\u306E\u529B+", availableCustomizations: "3,54,29", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 18, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=3; at:cardUsed[active] { concentration+=1 }", limit: 1, effects: "" }, { id: 110, name: "\u9759\u304B\u306A\u610F\u5FD7", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 20, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=4", actions: "concentration+=3; goodConditionTurns+=2", limit: 1, effects: "" }, { id: 111, name: "\u9759\u304B\u306A\u610F\u5FD7+", availableCustomizations: "28,52,54", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 20, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=4", actions: "concentration+=4; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 112, name: "\u59CB\u307E\u308A\u306E\u5408\u56F3", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 28, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=5", limit: 1, effects: "" }, { id: 113, name: "\u59CB\u307E\u308A\u306E\u5408\u56F3+", availableCustomizations: "52,3,29", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 28, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=7", limit: 1, effects: "" }, { id: 114, name: "\u610F\u5730", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 29, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=3; concentration+=4", limit: 1, effects: "" }, { id: 115, name: "\u610F\u5730+", availableCustomizations: "3,54,59", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 29, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; concentration+=5", limit: 1, effects: "" }, { id: 116, name: "\u5B58\u5728\u611F", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 31, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=4; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 117, name: "\u5B58\u5728\u611F+", availableCustomizations: "31,39", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 31, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "concentration+=5; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 118, name: "\u6210\u529F\u3078\u306E\u9053\u7B4B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 36, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "genki+=5; concentration+=7", limit: 1, effects: "" }, { id: 119, name: "\u6210\u529F\u3078\u306E\u9053\u7B4B+", availableCustomizations: "54,79,31", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 36, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "genki+=5; concentration+=9", limit: 1, effects: "" }, { id: 120, name: "\u3042\u3075\u308C\u308B\u601D\u3044\u51FA", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=2; motivation+=4", limit: "", effects: "" }, { id: 121, name: "\u3042\u3075\u308C\u308B\u601D\u3044\u51FA+", availableCustomizations: "59,56,9", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=4; motivation+=5", limit: "", effects: "" }, { id: 122, name: "\u3075\u308C\u3042\u3044", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=3; goodImpressionTurns+=4", limit: "", effects: "" }, { id: 123, name: "\u3075\u308C\u3042\u3044+", availableCustomizations: "55,7,59", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=6; goodImpressionTurns+=5", limit: "", effects: "" }, { id: 124, name: "\u5E78\u305B\u306A\u6642\u9593", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 7, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=6", limit: "", effects: "" }, { id: 125, name: "\u5E78\u305B\u306A\u6642\u9593+", availableCustomizations: "55,7,29", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 7, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=8", limit: "", effects: "" }, { id: 126, name: "\u30D5\u30A1\u30F3\u30B7\u30FC\u30C1\u30E3\u30FC\u30E0", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 17, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=3; at:cardUsed[mental] { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 127, name: "\u30D5\u30A1\u30F3\u30B7\u30FC\u30C1\u30E3\u30FC\u30E0+", availableCustomizations: "36,29,55", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 17, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=5; at:cardUsed[mental] { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 128, name: "\u30EF\u30AF\u30EF\u30AF\u304C\u6B62\u307E\u3089\u306A\u3044", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 18, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "motivation+=3; at:cardUsed[mental] { motivation+=1 }", limit: 1, effects: "" }, { id: 129, name: "\u30EF\u30AF\u30EF\u30AF\u304C\u6B62\u307E\u3089\u306A\u3044+", availableCustomizations: "36,29,56", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 18, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "motivation+=5; at:cardUsed[mental] { motivation+=1 }", limit: 1, effects: "" }, { id: 130, name: "\u672C\u756A\u524D\u591C", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 20, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=4; motivation+=3", limit: 1, effects: "" }, { id: 131, name: "\u672C\u756A\u524D\u591C+", availableCustomizations: "29,56,55", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 20, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "goodImpressionTurns+=5; motivation+=4", limit: 1, effects: "" }, { id: 132, name: "\u3072\u306A\u305F\u307C\u3063\u3053", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 22, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=11; motivation+=5; doubleCostTurns+=2", limit: 1, effects: "" }, { id: 133, name: "\u3072\u306A\u305F\u307C\u3063\u3053+", availableCustomizations: "59,56,12", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 22, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=11; motivation+=7; doubleCostTurns+=2", limit: 1, effects: "" }, { id: 134, name: "\u30A4\u30E1\u30C8\u30EC", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 28, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=7; motivation+=4", limit: 1, effects: "" }, { id: 135, name: "\u30A4\u30E1\u30C8\u30EC+", availableCustomizations: "59,56,12", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 28, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=11; motivation+=5", limit: 1, effects: "" }, { id: 136, name: "\u3084\u308B\u6C17\u306F\u6E80\u70B9", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 29, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=1; goodImpressionTurns+=4", limit: 1, effects: "" }, { id: 137, name: "\u3084\u308B\u6C17\u306F\u6E80\u70B9+", availableCustomizations: "59,55,22", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 29, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=2; goodImpressionTurns+=5", limit: 1, effects: "" }, { id: 138, name: "\u3086\u3081\u307F\u3054\u3053\u3061", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 32, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=2", actions: "motivation+=4; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 139, name: "\u3086\u3081\u307F\u3054\u3053\u3061+", availableCustomizations: "33,12", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 32, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=1", actions: "motivation+=5; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 140, name: "\u30B3\u30FC\u30EB&\u30EC\u30B9\u30DD\u30F3\u30B9", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 11, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=15; if:concentration>=3 { score+=15 }", limit: 1, effects: "" }, { id: 141, name: "\u30B3\u30FC\u30EB&\u30EC\u30B9\u30DD\u30F3\u30B9+", availableCustomizations: "1,14", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 11, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=15; if:concentration>=3 { concentrationMultiplier=1.5; score+=34 }", limit: 1, effects: "" }, { id: 142, name: "\u30D0\u30BA\u30EF\u30FC\u30C9", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 12, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=7", actions: "score+=38", limit: "", effects: "" }, { id: 143, name: "\u30D0\u30BA\u30EF\u30FC\u30C9+", availableCustomizations: "2,18", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 12, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=7", actions: "score+=54", limit: "", effects: "" }, { id: 144, name: "\u6210\u5C31", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 41, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "goodConditionTurns+=4; at:turn { score+=32; limit:1 }", limit: 1, effects: "" }, { id: 145, name: "\u6210\u5C31+", availableCustomizations: "13,29", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 41, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "goodConditionTurns+=7; at:turn { score+=40; limit:1 }", limit: 1, effects: "" }, { id: 146, name: "\u9B45\u60D1\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 43, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=8", actions: "perfectConditionTurns+=3; at:turn { score+=38; limit:1 }; at:turn { goodConditionTurnsMultiplier=2; score+=21; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 147, name: "\u9B45\u60D1\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9+", availableCustomizations: "15,29", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 43, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=7", actions: "perfectConditionTurns+=4; at:turn { score+=47; limit:1 }; at:turn { goodConditionTurnsMultiplier=2; score+=21; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 148, name: "200%\u30B9\u30DE\u30A4\u30EB", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 11, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=5; score+=goodImpressionTurns", limit: 1, effects: "" }, { id: 149, name: "200%\u30B9\u30DE\u30A4\u30EB+", availableCustomizations: "19,6", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 11, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=6; score+=goodImpressionTurns*1.7", limit: 1, effects: "" }, { id: 150, name: "\u958B\u82B1", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 12, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "motivation+=6; score+=motivation*2", limit: 1, effects: "" }, { id: 151, name: "\u958B\u82B1+", availableCustomizations: "27,8", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 12, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "motivation+=8; score+=motivation*3", limit: 1, effects: "" }, { id: 152, name: "\u5C4A\u3044\u3066\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 44, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:genki>=7", cost: "stamina-=1", actions: "score+=genki*3.2; genki=0", limit: 1, effects: "" }, { id: 153, name: "\u5C4A\u3044\u3066\uFF01+", availableCustomizations: "11,30", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 44, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:genki>=7", cost: "stamina-=1", actions: "score+=genki*4; genki=0", limit: 1, effects: "" }, { id: 154, name: "\u30C6\u30EC\u30D3\u51FA\u6F14", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 5, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=3; halfCostTurns+=4", limit: 1, effects: "" }, { id: 155, name: "\u30C6\u30EC\u30D3\u51FA\u6F14+", availableCustomizations: "38,3", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 5, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=5; halfCostTurns+=5", limit: 1, effects: "" }, { id: 156, name: "\u53F6\u3048\u305F\u3044\u5922", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 10, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "genki+=8; costReduction+=1", limit: 1, effects: "" }, { id: 157, name: "\u53F6\u3048\u305F\u3044\u5922+", availableCustomizations: "27,25", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 10, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "genki+=9; costReduction+=2", limit: 1, effects: "" }, { id: 158, name: "\u30A2\u30A4\u30C9\u30EB\u9B42", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 35, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "genki+=6; nullifyDebuff+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 159, name: "\u30A2\u30A4\u30C9\u30EB\u9B42+", availableCustomizations: "26,29", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 35, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "genki+=6; nullifyDebuff+=1; cardUsesRemaining+=1; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 160, name: "\u4ED5\u5207\u308A\u76F4\u3057", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 40, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "exchangeHand; halfCostTurns+=4; cardUsesRemaining+=1; drawCard(2)", limit: 1, effects: "" }, { id: 161, name: "\u4ED5\u5207\u308A\u76F4\u3057+", availableCustomizations: "29,24", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 40, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "exchangeHand; halfCostTurns+=4; cardUsesRemaining+=1; drawCard(2)", limit: 1, effects: "" }, { id: 162, name: "\u56FD\u6C11\u7684\u30A2\u30A4\u30C9\u30EB", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 25, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "doubleCardEffectCards+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 163, name: "\u56FD\u6C11\u7684\u30A2\u30A4\u30C9\u30EB+", availableCustomizations: "26,3", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 25, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "genki+=8; doubleCardEffectCards+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 164, name: "\u9B45\u60D1\u306E\u8996\u7DDA", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 30, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "perfectConditionTurns+=4; halfCostTurns+=2; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 165, name: "\u9B45\u60D1\u306E\u8996\u7DDA+", availableCustomizations: "32,28", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 30, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "perfectConditionTurns+=5; halfCostTurns+=5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 166, name: "\u9CF4\u308A\u6B62\u307E\u306A\u3044\u62CD\u624B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 38, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentration+=4; goodConditionTurns+=2; halfCostTurns+=2", limit: 1, effects: "" }, { id: 167, name: "\u9CF4\u308A\u6B62\u307E\u306A\u3044\u62CD\u624B+", availableCustomizations: "17,13", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 38, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentration+=5; goodConditionTurns+=3; halfCostTurns+=3", limit: 1, effects: "" }, { id: 168, name: "\u5929\u771F\u721B\u6F2B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 45, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "concentration+=1; at:endOfTurn { if:concentration>=3 { concentration+=2 } }", limit: 1, effects: "" }, { id: 169, name: "\u5929\u771F\u721B\u6F2B+", availableCustomizations: "29,17", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 45, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=1; at:endOfTurn { if:concentration>=3 { concentration+=2 } }", limit: 1, effects: "" }, { id: 170, name: "\u79C1\u304C\u30B9\u30BF\u30FC", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 25, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=2", actions: "turnsRemaining+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 171, name: "\u79C1\u304C\u30B9\u30BF\u30FC+", availableCustomizations: "33,39", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 25, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=1", actions: "turnsRemaining+=1; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 172, name: "\u661F\u5C51\u30BB\u30F3\u30BB\u30FC\u30B7\u30E7\u30F3", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 30, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "goodImpressionTurns+=5; cardUsesRemaining+=1; if:goodImpressionTurns>=10 { setGoodImpressionTurnsBuff(0.5,5) }", limit: 1, effects: "" }, { id: 173, name: "\u661F\u5C51\u30BB\u30F3\u30BB\u30FC\u30B7\u30E7\u30F3+", availableCustomizations: "7,19", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 30, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "goodImpressionTurns+=7; cardUsesRemaining+=1; drawCard; if:goodImpressionTurns>=10 { setGoodImpressionTurnsBuff(0.5,5) }", limit: 1, effects: "" }, { id: 174, name: "\u30CE\u30FC\u30C8\u306E\u7AEF\u306E\u6C7A\u610F", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 37, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=3; motivation+=3; halfCostTurns+=3", limit: 1, effects: "" }, { id: 175, name: "\u30CE\u30FC\u30C8\u306E\u7AEF\u306E\u6C7A\u610F+", availableCustomizations: "27,7", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 37, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=5; motivation+=3; halfCostTurns+=3", limit: 1, effects: "" }, { id: 176, name: "\u624B\u66F8\u304D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 39, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=2", actions: "genki+=9; genki+=9", limit: 1, effects: "" }, { id: 177, name: "\u624B\u66F8\u304D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8+", availableCustomizations: "25,33", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 39, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=1", actions: "genki+=10; genki+=10", limit: 1, effects: "" }, { id: 178, name: "\u30C8\u30AD\u30E1\u30AD", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 42, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "goodImpressionTurns+=8; motivation+=5", limit: 1, effects: "" }, { id: 179, name: "\u30C8\u30AD\u30E1\u30AD+", availableCustomizations: "21,19", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 42, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=9", actions: "goodImpressionTurns+=10; motivation+=6", limit: 1, effects: "" }, { id: 180, name: "\u8679\u8272\u30C9\u30EA\u30FC\u30DE\u30FC", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 45, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=9", actions: "goodImpressionTurns+=1; at:endOfTurn { if:goodImpressionTurns>=3 { goodImpressionTurns+=3 } }", limit: 1, effects: "" }, { id: 181, name: "\u8679\u8272\u30C9\u30EA\u30FC\u30DE\u30FC+", availableCustomizations: "29,19", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 45, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=9", actions: "goodImpressionTurns+=4; at:endOfTurn { if:goodImpressionTurns>=3 { goodImpressionTurns+=3 } }", limit: 1, effects: "" }, { id: 182, name: "\u65B0\u9032\u6C17\u92ED", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 1, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=17", limit: 1, effects: "" }, { id: 183, name: "\u65B0\u9032\u6C17\u92ED+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 1, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=25", limit: 1, effects: "" }, { id: 184, name: "\u610F\u5730\u3063\u5F35\u308A", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 2, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=7; concentration+=3", limit: 1, effects: "" }, { id: 185, name: "\u610F\u5730\u3063\u5F35\u308A+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 2, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=7; concentration+=5", limit: 1, effects: "" }, { id: 186, name: "\u30A2\u30EB\u30D0\u30A4\u30BF\u30FC", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 3, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=2; goodImpressionTurns+=5", limit: 1, effects: "" }, { id: 187, name: "\u30A2\u30EB\u30D0\u30A4\u30BF\u30FC+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 3, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=6; goodImpressionTurns+=6", limit: 1, effects: "" }, { id: 188, name: "\u30EA\u30C8\u30EB\u30FB\u30D7\u30EA\u30F3\u30B9", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 4, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=8; if:goodConditionTurns>=1 { score+=3 }", limit: 1, effects: "" }, { id: 189, name: "\u30EA\u30C8\u30EB\u30FB\u30D7\u30EA\u30F3\u30B9+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 4, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=13; if:goodConditionTurns>=1 { score+=5 }", limit: 1, effects: "" }, { id: 190, name: "\u5185\u6C17\u7CFB\u5C11\u5973", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 5, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=1; at:endOfTurn { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 191, name: "\u5185\u6C17\u7CFB\u5C11\u5973+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 5, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=2; at:endOfTurn { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 192, name: "\u5143\u6C17\u3044\u3063\u3071\u3044", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 6, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=2; score+=genki*0.5; motivation+=2", limit: 1, effects: "" }, { id: 193, name: "\u5143\u6C17\u3044\u3063\u3071\u3044+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 6, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=2; score+=genki*0.7; motivation+=3", limit: 1, effects: "" }, { id: 194, name: "\u30D5\u30EC\u30F3\u30C9\u30EA\u30FC", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 7, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=10; if:concentration>=6 { score+=10 }", limit: 1, effects: "" }, { id: 195, name: "\u30D5\u30EC\u30F3\u30C9\u30EA\u30FC+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 7, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=12; score+=12", limit: 1, effects: "" }, { id: 196, name: "\u8D85\u9AD8\u5B66\u6B74\u30A2\u30A4\u30C9\u30EB", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 8, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=2; if:motivation>=6 { genki+=3 }", limit: 1, effects: "" }, { id: 197, name: "\u8D85\u9AD8\u5B66\u6B74\u30A2\u30A4\u30C9\u30EB+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 8, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=4; if:motivation>=6 { genki+=5 }", limit: 1, effects: "" }, { id: 198, name: "\u5305\u5BB9\u529B", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 9, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=2; genki+=1; fixedStamina+=2", limit: 1, effects: "" }, { id: 199, name: "\u5305\u5BB9\u529B+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 9, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=3; genki+=4; fixedStamina+=2", limit: 1, effects: "" }, { id: 200, name: "\u4E00\u756A\u306F\u8B72\u3089\u306A\u3044", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 10, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=18; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 201, name: "\u4E00\u756A\u306F\u8B72\u3089\u306A\u3044+", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 10, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=26; goodConditionTurns+=4", limit: 1, effects: "" }, { id: 202, name: "\u30ED\u30FC\u30F3\u30FB\u30A6\u30EB\u30D5", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 11, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=12; if:concentration>=3 { score+=12 }", limit: 1, effects: "" }, { id: 203, name: "\u30ED\u30FC\u30F3\u30FB\u30A6\u30EB\u30D5+", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 11, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=12; if:concentration>=3 { score+=12 }", limit: 1, effects: "" }, { id: 204, name: "Colorful Cute!", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 12, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=6", limit: 1, effects: "" }, { id: 205, name: "Colorful Cute!+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 12, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=8", limit: 1, effects: "" }, { id: 206, name: "\u3089\u3057\u3055", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 13, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=4; if:goodConditionTurns>=1 { concentration+=3 }", limit: 1, effects: "" }, { id: 207, name: "\u3089\u3057\u3055+", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 13, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=6; if:goodConditionTurns>=1 { concentration+=4 }", limit: 1, effects: "" }, { id: 208, name: "\u7D14\u767D\u306E\u5996\u7CBE", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 14, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=2; score+=goodImpressionTurns*1.2", limit: 1, effects: "" }, { id: 209, name: "\u7D14\u767D\u306E\u5996\u7CBE+", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 14, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=2; score+=goodImpressionTurns*1.6", limit: 1, effects: "" }, { id: 210, name: "\u3044\u3063\u3057\u3087\u3051\u3093\u3081\u3044", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 15, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=1; motivation+=5", limit: 1, effects: "" }, { id: 211, name: "\u3044\u3063\u3057\u3087\u3051\u3093\u3081\u3044+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 15, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=4; motivation+=6", limit: 1, effects: "" }, { id: 212, name: "\u52C7\u6C17\u306E\u4E00\u6B69", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 16, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentrationMultiplier=2; score+=17", limit: 1, effects: "" }, { id: 213, name: "\u52C7\u6C17\u306E\u4E00\u6B69+", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 16, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentrationMultiplier=2.5; score+=24", limit: 1, effects: "" }, { id: 214, name: "\u82E6\u3057\u3044\u306E\u304C\u597D\u304D", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 17, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=6; score+=motivation*2.5", limit: 1, effects: "" }, { id: 215, name: "\u82E6\u3057\u3044\u306E\u304C\u597D\u304D+", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 17, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=7; score+=motivation*3.5", limit: 1, effects: "" }, { id: 216, name: "\u5BC4\u308A\u6DFB\u3046\u6C17\u6301\u3061", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 18, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=10; concentration+=4", limit: 1, effects: "" }, { id: 217, name: "\u5BC4\u308A\u6DFB\u3046\u6C17\u6301\u3061+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 18, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=12; concentration+=5", limit: 1, effects: "" }, { id: 218, name: "\u7D76\u5BFE\u306B\u8CA0\u3051\u306A\u3044", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 19, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=34", limit: 1, effects: "" }, { id: 219, name: "\u7D76\u5BFE\u306B\u8CA0\u3051\u306A\u3044+", availableCustomizations: "94,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 19, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "score+=48", limit: 1, effects: "" }, { id: 220, name: "\u305D\u308C\u305E\u308C\u306E\u9053", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 20, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "score+=14; concentration+=5", limit: 1, effects: "" }, { id: 221, name: "\u305D\u308C\u305E\u308C\u306E\u9053+", availableCustomizations: "95,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 20, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=15; concentration+=5", limit: 1, effects: "" }, { id: 222, name: "\u3088\u305D\u898B\u306F\u30C0\u30E1\u266A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 21, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=2; goodImpressionTurns+=7", limit: 1, effects: "" }, { id: 223, name: "\u3088\u305D\u898B\u306F\u30C0\u30E1\u266A+", availableCustomizations: "96,38", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 21, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=4; goodImpressionTurns+=9", limit: 1, effects: "" }, { id: 224, name: "\u76DB\u88C5\u306E\u83EF\u5F62", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 22, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=12; if:goodConditionTurns>=1 { score+=14 }", limit: 1, effects: "" }, { id: 225, name: "\u76DB\u88C5\u306E\u83EF\u5F62+", availableCustomizations: "91,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 22, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "@base score+=18; @bonus if:goodConditionTurns>=1 { score+=20 }", limit: 1, effects: "" }, { id: 226, name: "\u3082\u3046\u6016\u304F\u306A\u3044\u304B\u3089", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 23, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=3; at:endOfTurn { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 227, name: "\u3082\u3046\u6016\u304F\u306A\u3044\u304B\u3089+", availableCustomizations: "36,38", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 23, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=4; at:endOfTurn { goodImpressionTurns+=1 }", limit: 1, effects: "" }, { id: 228, name: "\u304A\u5B22\u69D8\u306E\u6674\u308C\u821E\u53F0", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 24, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=2; score+=genki; motivation+=2", limit: 1, effects: "" }, { id: 229, name: "\u304A\u5B22\u69D8\u306E\u6674\u308C\u821E\u53F0+", availableCustomizations: "98,38", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 24, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=5; score+=genki*1.2; motivation+=3", limit: 1, effects: "" }, { id: 230, name: "\u30EF\u30F3\u30E2\u30A2\u30B9\u30C6\u30C3\u30D7", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 25, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=7; score+=7; if:concentration>=6 { score+=7 }", limit: 1, effects: "" }, { id: 231, name: "\u30EF\u30F3\u30E2\u30A2\u30B9\u30C6\u30C3\u30D7+", availableCustomizations: "99,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 25, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=9; score+=9; if:concentration>=6 { score+=9 }", limit: 1, effects: "" }, { id: 232, name: "\u672C\u6C17\u306E\u8DA3\u5473", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 26, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=5; if:motivation>=3 { genki+=4 }", limit: 1, effects: "" }, { id: 233, name: "\u672C\u6C17\u306E\u8DA3\u5473+", availableCustomizations: "90,37", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 26, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=7; if:motivation>=3 { genki+=7 }", limit: 1, effects: "" }, { id: 234, name: "\u8DDD\u96E2\u611F", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 27, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=4; fixedStamina+=4", limit: 1, effects: "" }, { id: 235, name: "\u8DDD\u96E2\u611F+", availableCustomizations: "92,38", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 27, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "@base concentration+=5; fixedStamina+=5", limit: 1, effects: "" }, { id: 236, name: "\u304A\u59C9\u3061\u3083\u3093\u3060\u3082\u306E\uFF01", availableCustomizations: "", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:score<=1000", cost: "cost-=3", actions: "score+=6; genki+=6; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 237, name: "\u304A\u59C9\u3061\u3083\u3093\u3060\u3082\u306E\uFF01+", availableCustomizations: "59,4,47", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:score<=1000", cost: "cost-=3", actions: "score+=10; genki+=9; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 238, name: "\u304A\u30A2\u30C4\u30A4\u8996\u7DDA", availableCustomizations: "", rarity: "SR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:genki==0", cost: "cost-=0", actions: "genki+=5; halfCostTurns+=2; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 239, name: "\u304A\u30A2\u30C4\u30A4\u8996\u7DDA+", availableCustomizations: "59,58,3", rarity: "SR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:genki==0", cost: "cost-=0", actions: "genki+=6; halfCostTurns+=3; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 240, name: "\u3054\u6307\u5C0E\u3054\u97AD\u64BB", availableCustomizations: "", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:stamina>=maxStamina*0.5", cost: "cost-=5", actions: "score+=4; genki+=5; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 241, name: "\u3054\u6307\u5C0E\u3054\u97AD\u64BB+", availableCustomizations: "48,59,27", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:stamina>=maxStamina*0.5", cost: "cost-=2", actions: "score+=4; genki+=5; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 242, name: "\u30B9\u30C8\u30EC\u30C3\u30C1\u8AC7\u7FA9", availableCustomizations: "", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "cost-=3", actions: "score+=3; halfCostTurns+=2; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 243, name: "\u30B9\u30C8\u30EC\u30C3\u30C1\u8AC7\u7FA9+", availableCustomizations: "48,58,27", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "cost-=0", actions: "score+=3; halfCostTurns+=2; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 244, name: "\u5168\u529B\u30B5\u30DD\u30FC\u30C8", availableCustomizations: "", rarity: "SR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "cardUsesRemaining+=1; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 245, name: "\u5168\u529B\u30B5\u30DD\u30FC\u30C8+", availableCustomizations: "3,27", rarity: "SR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; at:turn { drawCard(2); limit:1 }", limit: 1, effects: "" }, { id: 246, name: "\u82B1\u840C\u3086\u5B63\u7BC0", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "addRandomUpgradedCardToHand; cardUsesRemaining+=1; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 247, name: "\u82B1\u840C\u3086\u5B63\u7BC0+", availableCustomizations: "27,3", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "addRandomUpgradedCardToHand; cardUsesRemaining+=1; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 248, name: "\u967D\u3060\u307E\u308A\u306E\u751F\u5F92\u4F1A\u5BA4", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fixedStamina+=3; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 249, name: "\u967D\u3060\u307E\u308A\u306E\u751F\u5F92\u4F1A\u5BA4+", availableCustomizations: "3,27", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "fixedStamina+=5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 250, name: "\u5FC3\u306E\u30A2\u30EB\u30D0\u30E0", availableCustomizations: "", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=3; genki+=3; at:turn { drawCard; limit:1 }; at:turn { drawCard; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 251, name: "\u5FC3\u306E\u30A2\u30EB\u30D0\u30E0+", availableCustomizations: "2,38", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=6; genki+=5; at:turn { drawCard; limit:1 }; at:turn { drawCard; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 252, name: "\u30C6\u30A3\u30FC\u30D1\u30FC\u30C6\u30A3", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "cardUsesRemaining+=1; upgradeHand", limit: 1, effects: "" }, { id: 253, name: "\u30C6\u30A3\u30FC\u30D1\u30FC\u30C6\u30A3+", availableCustomizations: "36,27", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "cardUsesRemaining+=1; drawCard; upgradeHand", limit: 1, effects: "" }, { id: 254, name: "\u5149\u306E\u30B9\u30C6\u30FC\u30B8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "costReduction+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 255, name: "\u5149\u306E\u30B9\u30C6\u30FC\u30B8+", availableCustomizations: "36,27", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "costReduction+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 256, name: "\u55A7\u5629\u3059\u308B\u307B\u3069\u4EF2\u304C\u3044\u3044", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "concentration+=3; goodConditionTurns+=2; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 257, name: "\u55A7\u5629\u3059\u308B\u307B\u3069\u4EF2\u304C\u3044\u3044+", availableCustomizations: "13,17", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "concentration+=4; goodConditionTurns+=4; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 258, name: "\u30C0\u30E1\u30C0\u30E1\u30AF\u30C3\u30AD\u30F3\u30B0", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "goodImpressionTurns+=4; motivation+=3; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 259, name: "\u30C0\u30E1\u30C0\u30E1\u30AF\u30C3\u30AD\u30F3\u30B0+", availableCustomizations: "19,21", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=5; motivation+=4; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 260, name: "\u65B0\u751F\u5F92\u4F1A\u7206\u8A95\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "halfCostTurns+=2; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 261, name: "\u65B0\u751F\u5F92\u4F1A\u7206\u8A95\uFF01+", availableCustomizations: "27,24", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=4", actions: "halfCostTurns+=4; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 262, name: "\u8584\u308C\u3086\u304F\u58C1", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=3; at:turn { upgradeHand; limit:1 }; at:turn { upgradeHand; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 263, name: "\u8584\u308C\u3086\u304F\u58C1+", availableCustomizations: "26,3", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=3; at:turn { upgradeHand; limit:1 }; at:turn { upgradeHand; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 264, name: "\u7D61\u307E\u308B\u60F3\u3044", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 28, forceInitialHand: true, conditions: "", cost: "cost-=8", actions: "goodImpressionTurns+=8", limit: 1, effects: "" }, { id: 265, name: "\u7D61\u307E\u308B\u60F3\u3044+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 28, forceInitialHand: true, conditions: "", cost: "cost-=8", actions: "goodImpressionTurns+=10", limit: 1, effects: "" }, { id: 266, name: "\u306A\u306B\u8074\u3044\u3066\u308B\u306E\uFF1F", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=2; fixedStamina+=3", limit: 1, effects: "" }, { id: 267, name: "\u306A\u306B\u8074\u3044\u3066\u308B\u306E\uFF1F+", availableCustomizations: "59,37,12", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=2; fixedStamina+=5", limit: 1, effects: "" }, { id: 268, name: "\u672A\u5B8C\u306E\u5927\u5668", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 29, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=2+cardsUsed*3", limit: 1, effects: "" }, { id: 269, name: "\u672A\u5B8C\u306E\u5927\u5668+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 29, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=4+cardsUsed*4", limit: 1, effects: "" }, { id: 270, name: "\u6253\u5012\u304A\u59C9\u3061\u3083\u3093", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 30, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=3; score+=genki", limit: 1, effects: "" }, { id: 271, name: "\u6253\u5012\u304A\u59C9\u3061\u3083\u3093+", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 30, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=3; score+=genki*1.4", limit: 1, effects: "" }, { id: 272, name: "\u304A\u3063\u304D\u306A\u304A\u306B\u304E\u308A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 31, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=2+cardsUsed*5", limit: 1, effects: "" }, { id: 273, name: "\u304A\u3063\u304D\u306A\u304A\u306B\u304E\u308A+", availableCustomizations: "102,38", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 31, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "@base genki+=2+cardsUsed*8", limit: 1, effects: "" }, { id: 274, name: "\u30AD\u30E1\u9854\u3067\u81EA\u64AE\u308A", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=3; concentration+=2; if:stamina>=maxStamina*0.5 { at:turn { drawCard; limit:1 } }", limit: 1, effects: "" }, { id: 275, name: "\u30AD\u30E1\u9854\u3067\u81EA\u64AE\u308A+", availableCustomizations: "52,54,3", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=4; concentration+=3; if:stamina>=maxStamina*0.5 { at:turn { drawCard; limit:1 } }", limit: 1, effects: "" }, { id: 276, name: "\u307F\u305A\u305F\u307E\u308A\u30B9\u30AD\u30C3\u30D7", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "genki+=3; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 277, name: "\u307F\u305A\u305F\u307E\u308A\u30B9\u30AD\u30C3\u30D7+", availableCustomizations: "26,3", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "genki+=8; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 278, name: "\u30A2\u30C9\u30EC\u30CA\u30EA\u30F3\u5168\u958B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 32, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=3; perfectConditionTurns+=4", limit: 1, effects: "" }, { id: 279, name: "\u30A2\u30C9\u30EC\u30CA\u30EA\u30F3\u5168\u958B+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 32, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=4; perfectConditionTurns+=5", limit: 1, effects: "" }, { id: 280, name: "POW\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 33, forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "score+=goodImpressionTurns*2.5", limit: 1, effects: "" }, { id: 281, name: "POW\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 33, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=goodImpressionTurns*2.6", limit: 1, effects: "" }, { id: 282, name: "\u304A\u6CCA\u308A\u731B\u52C9\u5F37", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "goodImpressionTurns+=5", limit: 1, effects: "" }, { id: 283, name: "\u304A\u6CCA\u308A\u731B\u52C9\u5F37+", availableCustomizations: "38,19", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "goodImpressionTurns+=6; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 284, name: "\u3072\u3093\u3084\u308A\u4E00\u4F11\u307F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 34, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "score+=9; score+=9; score+=9", limit: 1, effects: "" }, { id: 285, name: "\u3072\u3093\u3084\u308A\u4E00\u4F11\u307F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 34, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "score+=14; score+=14; score+=14", limit: 1, effects: "" }, { id: 286, name: "\u663C\u4E0B\u304C\u308A\u306E\u305D\u3088\u98A8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 35, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "motivation+=7; if:motivation>=6 { motivation+=3 }", limit: 1, effects: "" }, { id: 287, name: "\u663C\u4E0B\u304C\u308A\u306E\u305D\u3088\u98A8+", availableCustomizations: "108,38", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 35, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "motivation+=8; @base if:motivation>=3 { motivation+=5 }", limit: 1, effects: "" }, { id: 288, name: "\u3072\u3068\u547C\u5438", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 47, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "goodConditionTurns+=3; concentration+=4", limit: 1, effects: "" }, { id: 289, name: "\u3072\u3068\u547C\u5438+", availableCustomizations: "29,28,70", rarity: "R", type: "mental", plan: "sense", unlockPlv: 47, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "goodConditionTurns+=4; concentration+=5", limit: 1, effects: "" }, { id: 290, name: "\u5E78\u305B\u306E\u304A\u307E\u3058\u306A\u3044", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 46, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "goodImpressionTurns+=7", limit: 1, effects: "" }, { id: 291, name: "\u5E78\u305B\u306E\u304A\u307E\u3058\u306A\u3044+", availableCustomizations: "71,7,29", rarity: "R", type: "mental", plan: "logic", unlockPlv: 46, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "goodImpressionTurns+=9", limit: 1, effects: "" }, { id: 292, name: "\u7ACB\u3061\u4F4D\u7F6E\u30C1\u30A7\u30C3\u30AF", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 51, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "genki+=15; goodConditionTurnsMultiplier=2; score+=30; nullifyGenkiTurns+=2", limit: 1, effects: "" }, { id: 293, name: "\u7ACB\u3061\u4F4D\u7F6E\u30C1\u30A7\u30C3\u30AF+", availableCustomizations: "47,4,59", rarity: "SR", type: "active", plan: "sense", unlockPlv: 51, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "genki+=15; goodConditionTurnsMultiplier=2; score+=40; nullifyGenkiTurns+=2", limit: 1, effects: "" }, { id: 294, name: "\u30B9\u30DD\u30C3\u30C8\u30E9\u30A4\u30C8", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 49, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=7; goodConditionTurns+=5; at:turn { drawCard(2); limit:1 }; at:turn { drawCard; limit:1; delay:1 }", limit: "", effects: "" }, { id: 295, name: "\u30B9\u30DD\u30C3\u30C8\u30E9\u30A4\u30C8+", availableCustomizations: "3,52,59", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 49, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=9; goodConditionTurns+=6; at:turn { drawCard(2); limit:1 }; at:turn { drawCard; limit:1; delay:1 }", limit: "", effects: "" }, { id: 296, name: "\u6B62\u3081\u3089\u308C\u306A\u3044\u60F3\u3044", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 48, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivation+=3; goodImpressionTurns+=3; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 297, name: "\u6B62\u3081\u3089\u308C\u306A\u3044\u60F3\u3044+", availableCustomizations: "19,21", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 48, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivation+=4; goodImpressionTurns+=5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 298, name: "\u30AA\u30C8\u30E1\u30B4\u30B3\u30ED", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 52, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "goodImpressionTurns+=4; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 299, name: "\u30AA\u30C8\u30E1\u30B4\u30B3\u30ED+", availableCustomizations: "34,80", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 52, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "goodImpressionTurns+=5; cardUsesRemaining+=1; if:goodImpressionTurns>=10 { goodImpressionTurns+=2 }", limit: "", effects: "" }, { id: 300, name: "\u81F3\u9AD8\u306E\u30A8\u30F3\u30BF\u30E1", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 50, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=3", actions: "at:cardUsed[active] { score+=4 }", limit: 1, effects: "" }, { id: 301, name: "\u81F3\u9AD8\u306E\u30A8\u30F3\u30BF\u30E1+", availableCustomizations: "32,28", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 50, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=2", actions: "at:turn { drawCard; limit:1 }; at:cardUsed[active] { score+=5 }", limit: 1, effects: "" }, { id: 302, name: "\u899A\u9192", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 53, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "score+=3; score+=3; concentration+=4", limit: "", effects: "" }, { id: 303, name: "\u899A\u9192+", availableCustomizations: "1,28", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 53, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=1", actions: "score+=4; score+=4; concentration+=6", limit: "", effects: "" }, { id: 304, name: "\u8F1D\u304F\u30AD\u30DF\u3078", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 50, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=4", actions: "cardUsesRemaining+=1; at:cardUsed { score+=goodImpressionTurns*0.3 }", limit: 1, effects: "" }, { id: 305, name: "\u8F1D\u304F\u30AD\u30DF\u3078+", availableCustomizations: "46,34", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 50, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=4", actions: "cardUsesRemaining+=1; @trigger at:cardUsed { score+=goodImpressionTurns*0.5 }", limit: 1, effects: "" }, { id: 306, name: "\u3042\u306E\u3068\u304D\u306E\u7D04\u675F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 54, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=3", cost: "goodImpressionTurns-=3", actions: "genki+=14; score+=genki*1.4; score+=motivation*2", limit: 1, effects: "" }, { id: 307, name: "\u3042\u306E\u3068\u304D\u306E\u7D04\u675F+", availableCustomizations: "8,33", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 54, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=3", cost: "goodImpressionTurns-=3", actions: "motivationMultiplier=1.5; genki+=20; score+=genki*1.5; score+=motivation*2.5", limit: 1, effects: "" }, { id: 308, name: "\u5165\u9053\u96F2\u3068\u3001\u304D\u307F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 36, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "at:cardUsed[active] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 }; goodConditionTurns+=3; halfCostTurns+=2", limit: 1, effects: "" }, { id: 309, name: "\u5165\u9053\u96F2\u3068\u3001\u304D\u307F+", availableCustomizations: "109,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 36, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "at:cardUsed[active] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 }; goodConditionTurns+=5; halfCostTurns+=2", limit: 1, effects: "" }, { id: 310, name: "\u306F\u3058\u3051\u308B\u6C34\u3057\u3076\u304D", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=6", actions: "score+=33; if:goodConditionTurns>=4 { at:turn { fixedStamina+=4; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 311, name: "\u306F\u3058\u3051\u308B\u6C34\u3057\u3076\u304D+", availableCustomizations: "2,14", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=6", actions: "score+=45; if:goodConditionTurns>=4 { at:turn { fixedStamina+=6; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 312, name: "\u30D0\u30B9\u306B\u63FA\u3089\u308C\u3066", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 37, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "concentrationMultiplier=2.3; score+=5; if:stamina<=maxStamina*0.5 { genki+=6 }", limit: 1, effects: "" }, { id: 313, name: "\u30D0\u30B9\u306B\u63FA\u3089\u308C\u3066+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 37, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "concentrationMultiplier=2.6; score+=8; if:stamina<=maxStamina*0.5 { genki+=12 }", limit: 1, effects: "" }, { id: 314, name: "\u91D1\u9B5A\u3059\u304F\u3044\u3067\u52DD\u8CA0", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 38, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "goodImpressionTurns+=3; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 315, name: "\u91D1\u9B5A\u3059\u304F\u3044\u3067\u52DD\u8CA0+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 38, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "goodImpressionTurns+=5; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 316, name: "\u306F\u3058\u3081\u3066\u306E\u30E9\u30E0\u30CD", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 39, forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=4", actions: "score+=9; score+=goodConditionTurns*2", limit: 1, effects: "" }, { id: 317, name: "\u306F\u3058\u3081\u3066\u306E\u30E9\u30E0\u30CD+", availableCustomizations: "110,38", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 39, forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=4", actions: "@base score+=12; score+=goodConditionTurns*3", limit: 1, effects: "" }, { id: 318, name: "\u4EA4\u308F\u308B\u611F\u60C5", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentrationMultiplier=1.5; score+=7; concentration+=4", limit: 1, effects: "" }, { id: 319, name: "\u4EA4\u308F\u308B\u611F\u60C5+", availableCustomizations: "17,14", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentrationMultiplier=1.5; score+=13; concentration+=5", limit: 1, effects: "" }, { id: 320, name: "\u590F\u306E\u5BB5\u306E\u7DDA\u9999\u82B1\u706B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 40, forceInitialHand: true, conditions: "", cost: "stamina-=4", actions: "goodImpressionTurns+=3; motivation+=2; at:afterCardUsed { if:cardHasEffect(genki) { goodImpressionTurns+=1 } }", limit: 1, effects: "" }, { id: 321, name: "\u590F\u306E\u5BB5\u306E\u7DDA\u9999\u82B1\u706B+", availableCustomizations: "111,38", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 40, forceInitialHand: true, conditions: "", cost: "stamina-=4", actions: "goodImpressionTurns+=4; motivation+=3; @base at:afterCardUsed { if:cardHasEffect(genki) { goodImpressionTurns+=1 } }", limit: 1, effects: "" }, { id: 322, name: "\u521D\u3081\u3066\u306E\u672A\u6765", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 41, forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "score+=goodImpressionTurns*1.9", limit: 1, effects: "" }, { id: 323, name: "\u521D\u3081\u3066\u306E\u672A\u6765+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 41, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "score+=goodImpressionTurns*2", limit: 1, effects: "" }, { id: 324, name: "\u521D\u3081\u3066\u306E\u5834\u6240", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 42, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=6", limit: 1, effects: "" }, { id: 325, name: "\u521D\u3081\u3066\u306E\u5834\u6240+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 42, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=8", limit: 1, effects: "" }, { id: 326, name: "\u521D\u3081\u3066\u306E\u3054\u8912\u7F8E", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 43, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=3; perfectConditionTurns+=2", limit: 1, effects: "" }, { id: 327, name: "\u521D\u3081\u3066\u306E\u3054\u8912\u7F8E+", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 43, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=4; perfectConditionTurns+=3", limit: 1, effects: "" }, { id: 328, name: "\u304A\u8336\u4F1A\u3078\u3088\u3046\u3053\u305D\u266A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 44, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=3; perfectConditionTurns+=2; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 329, name: "\u304A\u8336\u4F1A\u3078\u3088\u3046\u3053\u305D\u266A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 44, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=5; perfectConditionTurns+=3; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 330, name: "\u521D\u3081\u3066\u306E\u5730\u5E73", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 45, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=goodConditionTurns*2", limit: 1, effects: "" }, { id: 331, name: "\u521D\u3081\u3066\u306E\u5730\u5E73+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 45, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=goodConditionTurns*2.5", limit: 1, effects: "" }, { id: 332, name: "\u521D\u3081\u3066\u306E\u8272", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 46, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; perfectConditionTurns+=2", limit: 1, effects: "" }, { id: 333, name: "\u521D\u3081\u3066\u306E\u8272+", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 46, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; perfectConditionTurns+=3", limit: 1, effects: "" }, { id: 334, name: "\u521D\u3081\u3066\u306E\u304A\u76F8\u624B", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 47, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivationMultiplier=1.5; genki+=2; score+=genki*0.4; costReduction+=1", limit: 1, effects: "" }, { id: 335, name: "\u521D\u3081\u3066\u306E\u304A\u76F8\u624B+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 47, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "motivationMultiplier=1.5; genki+=2; score+=genki*0.5; costReduction+=1", limit: 1, effects: "" }, { id: 336, name: "\u3055\u3063\u3071\u308A\u3072\u3068\u3044\u304D", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 48, forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "motivationMultiplier=2.3; genki+=2; score+=genki*0.5; costReduction+=1", limit: 1, effects: "" }, { id: 337, name: "\u3055\u3063\u3071\u308A\u3072\u3068\u3044\u304D+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 48, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "motivationMultiplier=2.3; genki+=2; score+=genki*0.9; costReduction+=1", limit: 1, effects: "" }, { id: 338, name: "\u305D\u306E\u672C\u3001\u304A\u3082\u3057\u308D\u3044\uFF1F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "if:goodImpressionTurns>=3 { score+=goodImpressionTurns*1.2 }; if:motivation>=3 { score+=genki*0.5 }; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 339, name: "\u305D\u306E\u672C\u3001\u304A\u3082\u3057\u308D\u3044\uFF1F+", availableCustomizations: "5,10", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "if:goodImpressionTurns>=3 { score+=goodImpressionTurns*1.5 }; if:motivation>=3 { score+=genki*0.7 }; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 340, name: "\u5207\u308C\u305F\u9F3B\u7DD2\u304C\u7D50\u3093\u3060\u7D46", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=4; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 341, name: "\u5207\u308C\u305F\u9F3B\u7DD2\u304C\u7D50\u3093\u3060\u7D46+", availableCustomizations: "52,29,3", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=5; at:turn { drawCard(2); limit:1 }", limit: 1, effects: "" }, { id: 342, name: "\u3053\u304F\u308A\u3068\u3072\u3068\u304F\u3061", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 49, forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "concentration+=3; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 343, name: "\u3053\u304F\u308A\u3068\u3072\u3068\u304F\u3061+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 49, forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "concentration+=4; halfCostTurns+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 344, name: "\u6708\u591C\u306E\u30E9\u30F3\u30A6\u30A7\u30A4", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 50, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "motivation+=3; at:afterCardUsed { if:cardHasEffect(goodImpressionTurns) { score+=goodImpressionTurns*0.3 } }", limit: 1, effects: "" }, { id: 345, name: "\u6708\u591C\u306E\u30E9\u30F3\u30A6\u30A7\u30A4+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 50, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "motivation+=3; at:afterCardUsed { if:cardHasEffect(goodImpressionTurns) { score+=goodImpressionTurns*0.5 } }", limit: 1, effects: "" }, { id: 346, name: "\u60AA\u622F\u3057\u3061\u3083\u3044\u307E\u3059\u308F\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 51, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=8; score+=8; if:concentration>=3 { concentration+=2 }", limit: 1, effects: "" }, { id: 347, name: "\u60AA\u622F\u3057\u3061\u3083\u3044\u307E\u3059\u308F\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 51, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; score+=10; if:concentration>=3 { concentration+=4 }", limit: 1, effects: "" }, { id: 348, name: "\u60AA\u6226\u82E6\u95D8\u30CF\u30F3\u30C9\u30E1\u30A4\u30C9", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 52, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "goodImpressionTurns+=4; motivation+=4; if:goodImpressionTurns>=3 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 349, name: "\u60AA\u6226\u82E6\u95D8\u30CF\u30F3\u30C9\u30E1\u30A4\u30C9+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 52, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "goodImpressionTurns+=6; motivation+=5; if:goodImpressionTurns>=3 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 350, name: "\u6B63\u78BA\u7121\u6BD4\u306A\u770B\u677F\u3065\u304F\u308A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 53, forceInitialHand: true, conditions: "", cost: "cost-=6", actions: "goodConditionTurns+=3; nullifyDebuff+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 351, name: "\u6B63\u78BA\u7121\u6BD4\u306A\u770B\u677F\u3065\u304F\u308A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 53, forceInitialHand: true, conditions: "", cost: "cost-=6", actions: "goodConditionTurns+=5; nullifyDebuff+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 352, name: "\u6C17\u306B\u306A\u308B\u2026\u2026", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentration+=4; if:concentration>=3 { at:turn { upgradeHand; limit:1 } }", limit: 1, effects: "" }, { id: 353, name: "\u6C17\u306B\u306A\u308B\u2026\u2026+", availableCustomizations: "29,3,54", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=5; if:concentration>=3 { at:turn { upgradeHand; limit:1 } }", limit: 1, effects: "" }, { id: 354, name: "\u521D\u3081\u3066\u306E\u7D50\u6676", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 54, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=goodImpressionTurns*0.8; motivation+=3", limit: 1, effects: "" }, { id: 355, name: "\u521D\u3081\u3066\u306E\u7D50\u6676+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 54, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=goodImpressionTurns*1.2; motivation+=3", limit: 1, effects: "" }, { id: 356, name: "\u521D\u3081\u3066\u306E\u60F3\u3044", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 55, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "motivation+=4; if:motivation>=6 { motivation+=3 }", limit: 1, effects: "" }, { id: 357, name: "\u521D\u3081\u3066\u306E\u60F3\u3044+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 55, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "motivation+=6; if:motivation>=6 { motivation+=3 }", limit: 1, effects: "" }, { id: 358, name: "\u521D\u3081\u3066\u306E\u305F\u306E\u3057\u307F", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 56, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentrationMultiplier=1.5; score+=6; if:stamina<=maxStamina*0.5 { genki+=4 }", limit: 1, effects: "" }, { id: 359, name: "\u521D\u3081\u3066\u306E\u305F\u306E\u3057\u307F+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 56, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentrationMultiplier=2; score+=8; if:stamina<=maxStamina*0.5 { genki+=7 }", limit: 1, effects: "" }, { id: 360, name: "\u307E\u305F\u3001\u660E\u65E5", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 57, forceInitialHand: false, conditions: "if:goodImpressionTurns>=1", cost: "cost-=6", actions: "fixedStamina+=maxStamina*0.1; goodImpressionTurns+=3; genki+=5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 361, name: "\u307E\u305F\u3001\u660E\u65E5+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 57, forceInitialHand: false, conditions: "if:goodImpressionTurns>=1", cost: "cost-=6", actions: "fixedStamina+=maxStamina*0.1; goodImpressionTurns+=5; genki+=10; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 362, name: "\u3061\u3087\u3061\u3087\u3044\u306E\u3061\u3087\u3044", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 58, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=2; at:endOfTurn { score+=4; limit:4 }", limit: 1, effects: "" }, { id: 363, name: "\u3061\u3087\u3061\u3087\u3044\u306E\u3061\u3087\u3044+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 58, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=2; at:endOfTurn { score+=4; limit:6 }", limit: 1, effects: "" }, { id: 364, name: "\u307B\u304B\u307B\u304B\u713C\u304D\u828B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=4; motivation+=4; if:genki>=30 { goodImpressionTurns+=3 }", limit: 1, effects: "" }, { id: 365, name: "\u307B\u304B\u307B\u304B\u713C\u304D\u828B+", availableCustomizations: "21,19", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=7; motivation+=5; if:genki>=30 { goodImpressionTurns+=4 }", limit: 1, effects: "" }, { id: 366, name: "\u3053\u3046\u304B\u3044\u2026\u2026?", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=3; score+=goodImpressionTurns*0.9", limit: 1, effects: "" }, { id: 367, name: "\u3053\u3046\u304B\u3044\u2026\u2026?+", availableCustomizations: "27,55,49", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodImpressionTurns+=4; score+=goodImpressionTurns", limit: 1, effects: "" }, { id: 368, name: "\u6328\u62F6\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "setStance(strength)", limit: "", effects: "" }, { id: 369, name: "\u6328\u62F6\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "setStance(strength); genki+=4", limit: "", effects: "" }, { id: 370, name: "\u306F\u3052\u3057\u304F", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "setStance(strength); score+=15", limit: 1, effects: "" }, { id: 371, name: "\u306F\u3052\u3057\u304F+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "setStance(strength); score+=25", limit: 1, effects: "" }, { id: 372, name: "\u30B9\u30D1\u30FC\u30C8", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=1; if:isPreservation { holdThisCard }; if:isFullPower { score+=25 }", limit: "", effects: "" }, { id: 373, name: "\u30B9\u30D1\u30FC\u30C8+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "fullPowerCharge+=1; if:isPreservation { holdThisCard }; if:isFullPower { score+=25 }", limit: "", effects: "" }, { id: 374, name: "\u30E1\u30F3\u30C8\u30EC\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=2; fullPowerCharge+=2", limit: "", effects: "" }, { id: 375, name: "\u30E1\u30F3\u30C8\u30EC\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=3; fullPowerCharge+=3", limit: "", effects: "" }, { id: 376, name: "\u30A4\u30E1\u30FC\u30B8\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=2", limit: "", effects: "" }, { id: 377, name: "\u30A4\u30E1\u30FC\u30B8\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=6", limit: "", effects: "" }, { id: 378, name: "\u30A8\u30AD\u30B5\u30A4\u30C8", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 56, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; perfectConditionTurns+=3", limit: 1, effects: "" }, { id: 379, name: "\u30A8\u30AD\u30B5\u30A4\u30C8+", availableCustomizations: "69,65,14", rarity: "R", type: "active", plan: "sense", unlockPlv: 56, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=10; perfectConditionTurns+=4", limit: 1, effects: "" }, { id: 380, name: "\u30B8\u30E3\u30B9\u30C8\u30A2\u30D4\u30FC\u30EB", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "score+=15; fullPowerCharge+=2", limit: 1, effects: "" }, { id: 381, name: "\u30B8\u30E3\u30B9\u30C8\u30A2\u30D4\u30FC\u30EB+", availableCustomizations: "65,73,77", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=15; fullPowerCharge+=3", limit: 1, effects: "" }, { id: 382, name: "\u30B9\u30BF\u30FC\u30E9\u30A4\u30C8", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=9", limit: "", effects: "" }, { id: 383, name: "\u30B9\u30BF\u30FC\u30E9\u30A4\u30C8+", availableCustomizations: "29,65,78", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=18", limit: "", effects: "" }, { id: 384, name: "\u4E00\u6B69", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 2, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=15", limit: 1, effects: "" }, { id: 385, name: "\u4E00\u6B69+", availableCustomizations: "23,78,65", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 2, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=23", limit: 1, effects: "" }, { id: 386, name: "\u30E9\u30C3\u30AD\u30FC\u266A", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 9, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=8; if:isStrength { fullPowerCharge+=3 }", limit: 1, effects: "" }, { id: 387, name: "\u30E9\u30C3\u30AD\u30FC\u266A+", availableCustomizations: "65,77,73", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 9, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=10; if:isStrength { fullPowerCharge+=4 }", limit: 1, effects: "" }, { id: 388, name: "\u7A4D\u307F\u91CD\u306D", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 13, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=2; if:isPreservation { holdThisCard }; if:isFullPower { score+=20 }", limit: "", effects: "" }, { id: 389, name: "\u7A4D\u307F\u91CD\u306D+", availableCustomizations: "4,76,29", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 13, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "fullPowerCharge+=2; if:isPreservation { holdThisCard }; if:isFullPower { score+=35 }", limit: "", effects: "" }, { id: 390, name: "\u7CBE\u4E00\u676F", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 14, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=6; score+=6", limit: 1, effects: "" }, { id: 391, name: "\u7CBE\u4E00\u676F+", availableCustomizations: "64,23,29", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 14, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=7; score+=7", limit: 1, effects: "" }, { id: 392, name: "\u30CF\u30C3\u30D4\u30FC\u266A", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation); genki+=7", limit: 1, effects: "" }, { id: 393, name: "\u30CF\u30C3\u30D4\u30FC\u266A+", availableCustomizations: "29,75,77", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=10", limit: 1, effects: "" }, { id: 394, name: "\u5B09\u3057\u3044\u8AA4\u7B97", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 4, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=5; fullPowerCharge+=2; if:fullPowerCharge>=1 { setStance(preservation) }", limit: 1, effects: "" }, { id: 395, name: "\u5B09\u3057\u3044\u8AA4\u7B97+", availableCustomizations: "75,73,43", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 4, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=6; fullPowerCharge+=3; if:fullPowerCharge>=1 { setStance(preservation) }", limit: 1, effects: "" }, { id: 396, name: "\u6D99\u306E\u601D\u3044\u51FA", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 19, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=2; if:isStrength { fullPowerCharge+=3 }", limit: 1, effects: "" }, { id: 397, name: "\u6D99\u306E\u601D\u3044\u51FA+", availableCustomizations: "73,77,75", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 19, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=4; if:isStrength { fullPowerCharge+=4 }", limit: 1, effects: "" }, { id: 398, name: "\u304D\u3089\u304D\u3089\u7D19\u5439\u96EA", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 57, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "score+=genki*1.1; at:turn { drawCard; limit:1 }", limit: "", effects: "" }, { id: 399, name: "\u304D\u3089\u304D\u3089\u7D19\u5439\u96EA+", availableCustomizations: "34,50,20", rarity: "SR", type: "active", plan: "logic", unlockPlv: 57, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "score+=genki*1.1; at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 400, name: "\u305B\u30FC\u306E\u3063\uFF01", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=12", limit: "", effects: "" }, { id: 401, name: "\u305B\u30FC\u306E\u3063\uFF01+", availableCustomizations: "40,48,62", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=22", limit: "", effects: "" }, { id: 402, name: "\u30A2\u30C3\u30C1\u30A7\u30EC\u30E9\u30F3\u30C9", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; fullPowerCharge+=3", limit: "", effects: "" }, { id: 403, name: "\u30A2\u30C3\u30C1\u30A7\u30EC\u30E9\u30F3\u30C9+", availableCustomizations: "61,29,48", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=12; fullPowerCharge+=4", limit: "", effects: "" }, { id: 404, name: "\u306F\u3058\u3051\u308B\u30D1\u30C3\u30B7\u30E7\u30F3", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 6, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stance!=none", cost: "cost-=2", actions: "score+=8; score+=8", limit: 1, effects: "" }, { id: 405, name: "\u306F\u3058\u3051\u308B\u30D1\u30C3\u30B7\u30E7\u30F3+", availableCustomizations: "42,47,62", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 6, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stance!=none", cost: "cost-=1", actions: "score+=10; score+=10", limit: 1, effects: "" }, { id: 406, name: "\u6C57\u3068\u6210\u9577", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 7, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:isFullPower", cost: "cost-=1", actions: "score+=37", limit: 1, effects: "" }, { id: 407, name: "\u6C57\u3068\u6210\u9577+", availableCustomizations: "42,48,60", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 7, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:isFullPower", cost: "cost-=0", actions: "score+=47", limit: 1, effects: "" }, { id: 408, name: "\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0\u30A2\u30AF\u30C8", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 29, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=10; fullPowerCharge+=2", limit: 1, effects: "" }, { id: 409, name: "\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0\u30A2\u30AF\u30C8+", availableCustomizations: "40,48,63", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 29, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=14; fullPowerCharge+=3", limit: 1, effects: "" }, { id: 410, name: "\u59CB\u307E\u308A\u306E\u7B11\u9854", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 34, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "setStance(strength); score+=6; halfCostTurns+=2; at:turn { drawCard; limit:1 }", limit: "", effects: "" }, { id: 411, name: "\u59CB\u307E\u308A\u306E\u7B11\u9854+", availableCustomizations: "48,58,40", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 34, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=1", actions: "setStance(strength); score+=8; halfCostTurns+=2; at:turn { drawCard; limit:1 }", limit: "", effects: "" }, { id: 412, name: "\u7406\u60F3\u306E\u30C6\u30F3\u30DD", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 52, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=6; score+=6; if:!isPreservation { cardUsesRemaining+=1 }", limit: 1, effects: "at:stanceChanged { if:isDirectEffect { target:this { g.score+=5 } } }" }, { id: 413, name: "\u7406\u60F3\u306E\u30C6\u30F3\u30DD+", availableCustomizations: "29,47,28", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 52, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=6; score+=6; if:!isPreservation { cardUsesRemaining+=1 }", limit: 1, effects: "at:stanceChanged { if:isDirectEffect { target:this { g.score+=7 } } }" }, { id: 414, name: "\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u306E\u6210\u679C", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 58, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=3; score+=28+cumulativeFullPowerCharge; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { setStance(preservation2) }; limit:1 }", limit: 1, effects: "" }, { id: 415, name: "\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u306E\u6210\u679C+", availableCustomizations: "48,60,29", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 58, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=4; score+=28+cumulativeFullPowerCharge*2; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { setStance(preservation2) }; limit:1 }", limit: 1, effects: "" }, { id: 416, name: "\u6F5C\u5728\u80FD\u529B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=10; fullPowerCharge+=3; holdSelected[hand]", limit: 1, effects: "" }, { id: 417, name: "\u6F5C\u5728\u80FD\u529B+", availableCustomizations: "59,37,61", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=15; fullPowerCharge+=4; holdSelected[hand]", limit: 1, effects: "" }, { id: 418, name: "\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=8", limit: 1, effects: "" }, { id: 419, name: "\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3+", availableCustomizations: "59,61,41", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=13", limit: 1, effects: "" }, { id: 420, name: "\u30D7\u30E9\u30A4\u30C9", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 20, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=4", actions: "setStance(preservation); genki+=5; fullPowerCharge+=2", limit: 1, effects: "" }, { id: 421, name: "\u30D7\u30E9\u30A4\u30C9+", availableCustomizations: "29,62,57", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 20, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=4", actions: "setStance(preservation); genki+=8; fullPowerCharge+=3", limit: 1, effects: "" }, { id: 422, name: "\u5FCD\u8010\u529B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 28, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=5; fullPowerCharge+=2", limit: 1, effects: "" }, { id: 423, name: "\u5FCD\u8010\u529B+", availableCustomizations: "61,59,29", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 28, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation2); genki+=5; fullPowerCharge+=3", limit: 1, effects: "" }, { id: 424, name: "\u5207\u78CB\u7422\u78E8", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 32, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "fullPowerCharge+=2; holdSelected[deck | discarded]; cardUsesRemaining+=1; lockStanceTurns+=1", limit: "", effects: "" }, { id: 425, name: "\u5207\u78CB\u7422\u78E8+", availableCustomizations: "44,45", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 32, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "fullPowerCharge+=3; holdSelected[deck | discarded]; cardUsesRemaining+=1; lockStanceTurns+=1", limit: "", effects: "" }, { id: 426, name: "\u30AD\u30BB\u30AD\u306E\u9B54\u6CD5", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 59, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=10", cost: "stamina-=4", actions: "score+=goodImpressionTurns*4; if:countCards[T & !removed]>=2 { score+=goodImpressionTurns*4 }", limit: 1, effects: "" }, { id: 427, name: "\u30AD\u30BB\u30AD\u306E\u9B54\u6CD5+", availableCustomizations: "6,30", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 59, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=10", cost: "stamina-=4", actions: "score+=goodImpressionTurns*5; if:countCards[T & !removed]>=2 { score+=goodImpressionTurns*5 }", limit: 1, effects: "" }, { id: 428, name: "\u7FD4\u3073\u7ACB\u3066\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 11, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "fullPowerCharge+=3; score+=10+cumulativeFullPowerCharge", limit: 1, effects: "at:stanceChanged { if:stance==fullPower { target:this { g.score+=20 } }; limit:1 }" }, { id: 429, name: "\u7FD4\u3073\u7ACB\u3066\uFF01+", availableCustomizations: "42,4", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 11, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=4; score+=10+cumulativeFullPowerCharge*1.5", limit: 1, effects: "at:stanceChanged { if:stance==fullPower { target:this { g.score+=30 } }; limit:1 }" }, { id: 430, name: "\u7DCF\u5408\u82B8\u8853", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 12, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stance!=none", cost: "cost-=7", actions: "setStance(strength); score+=7", limit: "", effects: "at:stanceChanged { if:isDirectEffect { target:this { g.score+=15 } }; limit:4 }" }, { id: 431, name: "\u7DCF\u5408\u82B8\u8853+", availableCustomizations: "29,2", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 12, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stance!=none", cost: "cost-=7", actions: "setStance(strength); score+=10", limit: "", effects: "at:stanceChanged { if:isDirectEffect { target:this { g.score+=20 } }; limit:4 }" }, { id: 432, name: "\u5FC3\u30FB\u6280\u30FB\u4F53", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 30, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "setStance(strength2); score+=7; fullPowerCharge+=3; halfCostTurns+=2", limit: 1, effects: "" }, { id: 433, name: "\u5FC3\u30FB\u6280\u30FB\u4F53+", availableCustomizations: "2,29", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 30, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "setStance(strength2); score+=16; fullPowerCharge+=4; halfCostTurns+=4", limit: 1, effects: "" }, { id: 434, name: "\u8F1D\u3051\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 41, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=3; at:turn { setStance(preservation); limit:1 }; if:isFullPower { score+=20; score+=20 }", limit: 1, effects: "" }, { id: 435, name: "\u8F1D\u3051\uFF01+", availableCustomizations: "81,37", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 41, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=4; at:turn { setStance(preservation2); limit:1 }; if:isFullPower { score+=25; score+=25 }", limit: 1, effects: "" }, { id: 436, name: "\u30AF\u30E9\u30A4\u30DE\u30C3\u30AF\u30B9", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 43, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "setStance(strength); score+=14; score+=14; at:turn { setStance(preservation); limit:1 }", limit: 1, effects: "" }, { id: 437, name: "\u30AF\u30E9\u30A4\u30DE\u30C3\u30AF\u30B9+", availableCustomizations: "1,29", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 43, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "setStance(strength2); score+=19; score+=19; at:turn { setStance(preservation2); limit:1 }", limit: 1, effects: "" }, { id: 438, name: "\u5168\u8EAB\u5168\u970A", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 50, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "setStance(strength); nullifyCostCards+=2; cardUsesRemaining+=1; drawCard(3)", limit: 1, effects: "" }, { id: 439, name: "\u5168\u8EAB\u5168\u970A+", availableCustomizations: "29,28", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 50, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "setStance(strength); nullifyCostCards+=2; cardUsesRemaining+=2; drawCard(3)", limit: 1, effects: "" }, { id: 440, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u306A\u308A\u307E\u3059", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 25, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=3", actions: "cardUsesRemaining+=1; target:hand { g.scoreTimes+=1 }", limit: 1, effects: "" }, { id: 441, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u306A\u308A\u307E\u3059+", availableCustomizations: "35,26", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 25, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=3", actions: "genki+=4; setStance(preservation); cardUsesRemaining+=1; target:hand { g.scoreTimes+=1 }", limit: 1, effects: "" }, { id: 442, name: "\u9802\u70B9\u3078", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 45, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=9", actions: "at:startOfTurn { if:stance!=none { target:all { g.score+=4 } } }", limit: 1, effects: "" }, { id: 443, name: "\u9802\u70B9\u3078+", availableCustomizations: "29,3", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 45, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=9", actions: "target:all { g.score+=6 }; at:startOfTurn { if:stance!=none { target:all { g.score+=4 } } }", limit: 1, effects: "" }, { id: 444, name: "\u899A\u609F", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 54, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "genki+=8; fullPowerCharge+=5; holdSelected[deck | discarded]", limit: 1, effects: "" }, { id: 445, name: "\u899A\u609F+", availableCustomizations: "44,30", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 54, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=8; fullPowerCharge+=7; holdSelected[deck | discarded]", limit: 1, effects: "" }, { id: 446, name: "\u5B66\u5712\u4E00\u306E\u30A2\u30A4\u30C9\u30EB", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 59, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=2; score+=2", limit: 1, effects: "" }, { id: 447, name: "\u5B66\u5712\u4E00\u306E\u30A2\u30A4\u30C9\u30EB+", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 59, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=4; score+=4", limit: 1, effects: "" }, { id: 448, name: "\u738B\u8005\u306E\u5FA1\u51FA\u307E\u3057", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 60, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=4; halfCostTurns+=2", limit: 1, effects: "" }, { id: 449, name: "\u738B\u8005\u306E\u5FA1\u51FA\u307E\u3057+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 60, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=5; halfCostTurns+=3", limit: 1, effects: "" }, { id: 450, name: "\u4E00\u756A\u9AD8\u3044\u661F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 61, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=3; score+=3", limit: 1, effects: "at:afterCardUsed { if:cardHasEffect(strength) { target:this { g.score+=10; g.cost-=1 } }; limit:2 }" }, { id: 451, name: "\u4E00\u756A\u9AD8\u3044\u661F+", availableCustomizations: "107,38", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 61, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=6; score+=6", limit: 1, effects: "@grow at:afterCardUsed { if:cardHasEffect(strength) { target:this { g.score+=15; g.cost-=1 } }; limit:2 }" }, { id: 452, name: "\u7D05\u8449\u30E9\u30F3\u30CB\u30F3\u30B0", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "nullifyDebuff+=1; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 453, name: "\u7D05\u8449\u30E9\u30F3\u30CB\u30F3\u30B0+", availableCustomizations: "3,27", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "nullifyDebuff+=1; drawCard(2); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 454, name: "\u96E8\u5BBF\u308A\u306E\u30D0\u30B9\u505C", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(preservation); fullPowerCharge+=3; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 455, name: "\u96E8\u5BBF\u308A\u306E\u30D0\u30B9\u505C+", availableCustomizations: "3,82", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(preservation2); fullPowerCharge+=4; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 456, name: "\u65EC\u306E\u5473\u308F\u3044", availableCustomizations: "", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=4; score+=4; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 457, name: "\u65EC\u306E\u5473\u308F\u3044+", availableCustomizations: "47,29,27", rarity: "SR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; score+=6; at:turn { upgradeHand; limit:1 }", limit: 1, effects: "" }, { id: 458, name: "\u30E1\u30EA\u30AF\u30EA\u3067\uFF5E\u3059\u266A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 62, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=3; at:cardUsed[mental] { motivation+=1 }", limit: 1, effects: "" }, { id: 459, name: "\u30E1\u30EA\u30AF\u30EA\u3067\uFF5E\u3059\u266A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 62, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=5; at:cardUsed[mental] { motivation+=1 }", limit: 1, effects: "" }, { id: 460, name: "\u304A\u3059\u305D\u308F\u3051\u3067\u3059\u3063\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 63, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "concentration+=1; at:startOfTurn { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 461, name: "\u304A\u3059\u305D\u308F\u3051\u3067\u3059\u3063\uFF01+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 63, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "concentration+=3; at:startOfTurn { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 462, name: "\u5149\u306E\u591C", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "perfectConditionTurns+=2; fixedStamina+=2", limit: 1, effects: "" }, { id: 463, name: "\u5149\u306E\u591C+", availableCustomizations: "15,14", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "perfectConditionTurns+=3; fixedStamina+=4", limit: 1, effects: "" }, { id: 464, name: "\u611B\u3092\u8FBC\u3081\u3066", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 64, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "motivationMultiplier=1.8; genki+=4; score+=motivation*3", limit: 1, effects: "" }, { id: 465, name: "\u611B\u3092\u8FBC\u3081\u3066+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 64, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "motivationMultiplier=2; genki+=6; score+=motivation*4", limit: 1, effects: "" }, { id: 466, name: "\u8E0F\u5207\u306E\u5148\u306B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 65, forceInitialHand: false, conditions: "if:isFullPower", cost: "cost-=3", actions: "score+=10; score+=10; score+=10; at:turn { setStance(preservation2); limit:1 }", limit: 1, effects: "" }, { id: 467, name: "\u8E0F\u5207\u306E\u5148\u306B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 65, forceInitialHand: false, conditions: "if:isFullPower", cost: "cost-=3", actions: "score+=16; score+=16; score+=16; at:turn { setStance(preservation2); limit:1 }", limit: 1, effects: "" }, { id: 468, name: "\u3053\u308C\u307E\u3067\u3082\u3053\u308C\u304B\u3089\u3082", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 66, forceInitialHand: false, conditions: "if:goodConditionTurns>=4", cost: "cost-=6", actions: "goodConditionTurnsMultiplier=2.5; score+=40", limit: 1, effects: "" }, { id: 469, name: "\u3053\u308C\u307E\u3067\u3082\u3053\u308C\u304B\u3089\u3082+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 66, forceInitialHand: false, conditions: "if:goodConditionTurns>=4", cost: "cost-=6", actions: "goodConditionTurnsMultiplier=3; score+=55", limit: 1, effects: "" }, { id: 470, name: "\u5ACC\u3044\u306A\u81EA\u5206\u306B\u30D0\u30A4\u30D0\u30A4", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 67, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=5; at:endOfTurn { if:turnsRemaining==1 { concentrationMultiplier=2.5; score+=15 } }", limit: 1, effects: "" }, { id: 471, name: "\u5ACC\u3044\u306A\u81EA\u5206\u306B\u30D0\u30A4\u30D0\u30A4+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 67, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=7; at:endOfTurn { if:turnsRemaining==1 { concentrationMultiplier=2.5; score+=15 } }", limit: 1, effects: "" }, { id: 472, name: "\u81EA\u6162\u306E\u304A\u59C9\u3061\u3083\u3093\u3060\u305E", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 68, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "at:endOfTurn { if:turnsRemaining<=3 { score+=goodImpressionTurns*1.4 } }", limit: 1, effects: "" }, { id: 473, name: "\u81EA\u6162\u306E\u304A\u59C9\u3061\u3083\u3093\u3060\u305E+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 68, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "at:endOfTurn { if:turnsRemaining<=3 { score+=goodImpressionTurns*1.8 } }", limit: 1, effects: "" }, { id: 474, name: "\u7DF4\u7FD2\u518D\u958B\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=1; exchangeHand; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 475, name: "\u7DF4\u7FD2\u518D\u958B\uFF01+", availableCustomizations: "29,13", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=3; exchangeHand; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 476, name: "\u624B\u306B\u3057\u305F\u7B54\u3048", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 69, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "target:382 { g.scoreTimes+=1 }; moveRandomToHand[id(383) & (deck | discarded)]; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 477, name: "\u624B\u306B\u3057\u305F\u7B54\u3048+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 69, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(preservation2); target:382 { g.scoreTimes+=1 }; moveRandomToHand[id(383) & (deck | discarded)]; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 478, name: "\u5922\u306F\u307E\u3060\u7D9A\u304F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 70, forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=4", actions: "score+=goodConditionTurns; goodConditionTurns+=1; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 479, name: "\u5922\u306F\u307E\u3060\u7D9A\u304F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 70, forceInitialHand: false, conditions: "if:goodConditionTurns>=1", cost: "cost-=4", actions: "score+=goodConditionTurns*1.5; goodConditionTurns+=3; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 480, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u3057\u3066\u304F\u308C\u305F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 71, forceInitialHand: false, conditions: "if:fullPowerTimes>=1", cost: "cost-=3", actions: "score+=20", limit: 1, effects: "at:stanceChanged { if:isFullPower { target:this { g.scoreTimes+=1 } }; limit:4 }" }, { id: 481, name: "\u30A2\u30A4\u30C9\u30EB\u306B\u3057\u3066\u304F\u308C\u305F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 71, forceInitialHand: false, conditions: "if:fullPowerTimes>=1", cost: "cost-=2", actions: "score+=25", limit: 1, effects: "at:stanceChanged { if:isFullPower { target:this { g.scoreTimes+=1 } }; limit:4 }" }, { id: 482, name: "\u5E83\u304C\u308A\u7D9A\u3051\u308B\u4E16\u754C", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 72, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "motivation+=4; at:turn { genki+=5; limit:1 }; at:endOfTurn { if:turnsRemaining<=1 { score+=genki*1.3 } }", limit: 1, effects: "" }, { id: 483, name: "\u5E83\u304C\u308A\u7D9A\u3051\u308B\u4E16\u754C+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 72, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "motivation+=6; at:turn { genki+=8; limit:1 }; at:endOfTurn { if:turnsRemaining<=1 { score+=genki*1.3 } }", limit: 1, effects: "" }, { id: 484, name: "\u30A8\u30A6\u30EC\u30AB\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 73, forceInitialHand: false, conditions: "", cost: "cost-=12", actions: "cardUsesRemaining+=1; at:startOfTurn { if:stamina<=maxStamina*0.5 { score+=genki*0.3; fixedStamina+=maxStamina*0.05 } }", limit: 1, effects: "" }, { id: 485, name: "\u30A8\u30A6\u30EC\u30AB\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 73, forceInitialHand: false, conditions: "", cost: "cost-=12", actions: "cardUsesRemaining+=1; at:startOfTurn { if:stamina<=maxStamina*0.5 { score+=genki*0.4; fixedStamina+=maxStamina*0.1 } }", limit: 1, effects: "" }, { id: 486, name: "\u65B0\u305F\u306A\u30B9\u30C6\u30FC\u30B8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 74, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "holdSelected[deck | discarded]; fullPowerCharge+=1; cardUsesRemaining+=1", limit: "", effects: "" }, { id: 487, name: "\u65B0\u305F\u306A\u30B9\u30C6\u30FC\u30B8+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 74, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "holdSelected[deck | discarded]; fullPowerCharge+=2; cardUsesRemaining+=1; target:held { g.score+=5 }", limit: "", effects: "" }, { id: 488, name: "\u3044\u3064\u304B\u898B\u305F\u666F\u8272", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 75, forceInitialHand: false, conditions: "if:concentration>=6", cost: "cost-=6", actions: "concentration*=1.3; at:turn { concentrationMultiplier=1.5; score+=9; score+=9; score+=9; limit:1 }", limit: 1, effects: "" }, { id: 489, name: "\u3044\u3064\u304B\u898B\u305F\u666F\u8272+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 75, forceInitialHand: false, conditions: "if:concentration>=6", cost: "cost-=5", actions: "concentration*=1.5; at:turn { concentrationMultiplier=1.5; score+=9; score+=9; score+=9; limit:1 }", limit: 1, effects: "" }, { id: 490, name: "\u307E\u305F\u3001\u98DB\u3079\u308B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 76, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=1; goodImpressionTurns+=3; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 491, name: "\u307E\u305F\u3001\u98DB\u3079\u308B+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 76, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=2; goodImpressionTurns+=5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 492, name: "\u304C\u3093\u3070\u3063\u305F\u3001\u3088", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 77, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=4; holdSelected[deck | discarded]; at:startOfTurn { if:isFullPower { target:all { g.score+=2 } } }", limit: 1, effects: "" }, { id: 493, name: "\u304C\u3093\u3070\u3063\u305F\u3001\u3088+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 77, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=5; holdSelected[deck | discarded]; at:startOfTurn { if:isFullPower { target:all { g.score+=2 } } }", limit: 1, effects: "" }, { id: 494, name: "\u53D7\u3051\u53D6\u3063\u3066\u304F\u308C\u308B?", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 78, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation); at:afterCardUsed { if:cardHasEffect(strength) { target:effect(strength) { g.score+=2 } } }", limit: 1, effects: "" }, { id: 495, name: "\u53D7\u3051\u53D6\u3063\u3066\u304F\u308C\u308B?+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 78, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation); at:afterCardUsed { if:cardHasEffect(strength) { target:effect(strength) { g.score+=3 } } }", limit: 1, effects: "" }, { id: 496, name: "\u30D0\u30EC\u30F3\u30BF\u30A4\u30F3\u5927\u4F5C\u6226\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=4; setStance(preservation); at:startOfTurn { setStance(preservation); limit:2 }", limit: 1, effects: "" }, { id: 497, name: "\u30D0\u30EC\u30F3\u30BF\u30A4\u30F3\u5927\u4F5C\u6226\uFF01+", availableCustomizations: "30,26", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "genki+=8; setStance(preservation); at:startOfTurn { setStance(preservation); limit:2 }", limit: 1, effects: "" }, { id: 498, name: "\u611B\u60C5\u30EC\u30A4\u30F3\u30DC\u30FC", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=0", actions: "fullPowerCharge+=2; fixedStamina+=2; holdSelected[deck]", limit: 1, effects: "" }, { id: 499, name: "\u611B\u60C5\u30EC\u30A4\u30F3\u30DC\u30FC+", availableCustomizations: "57,42,83", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=0", actions: "fullPowerCharge+=3; fixedStamina+=3; holdSelected[deck]", limit: 1, effects: "" }, { id: 500, name: "\u3042\u306A\u305F\u306B\u3042\u3052\u308B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 79, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "at:endOfTurn { score+=genki*0.6; limit:4 }", limit: 1, effects: "" }, { id: 501, name: "\u3042\u306A\u305F\u306B\u3042\u3052\u308B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 79, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "at:endOfTurn { score+=genki*0.8; limit:4 }", limit: 1, effects: "" }, { id: 502, name: "\u30C7\u30A3\u30C6\u30FC\u30EB\u304C\u809D\u5FC3", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=4; score+=motivation*2.7", limit: 1, effects: "" }, { id: 503, name: "\u30C7\u30A3\u30C6\u30FC\u30EB\u304C\u809D\u5FC3+", availableCustomizations: "30,59,84", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=7; score+=motivation*3.4", limit: 1, effects: "" }, { id: 504, name: "\u304A\u3066\u3064\u304D\u6CE8\u610F!", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 80, forceInitialHand: true, conditions: "", cost: "cost-=8", actions: "at:startOfTurn { if:!isStrength { setStance(strength) }; ttl:5 }", limit: 1, effects: "" }, { id: 505, name: "\u304A\u3066\u3064\u304D\u6CE8\u610F!+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 80, forceInitialHand: true, conditions: "", cost: "cost-=8", actions: "at:startOfTurn { if:!isStrength { setStance(strength) }; ttl:5 }; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 506, name: "\u3061\u3044\u3055\u306A\u304A\u3072\u3055\u307E", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 81, forceInitialHand: false, conditions: "", cost: "motivation-=1", actions: "goodImpressionTurns+=3; at:turn { drawCard; limit:1 }; if:goodImpressionTurns>=10 { score+=goodImpressionTurns*1.4 }", limit: "", effects: "" }, { id: 507, name: "\u3061\u3044\u3055\u306A\u304A\u3072\u3055\u307E+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 81, forceInitialHand: false, conditions: "", cost: "motivation-=1", actions: "goodImpressionTurns+=3; at:turn { drawCard; limit:1 }; if:goodImpressionTurns>=10 { score+=goodImpressionTurns*2.2 }", limit: "", effects: "" }, { id: 508, name: "\u8349\u7B1B\u30CF\u30FC\u30E2\u30CB\u30FC", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=2; fixedStamina+=1; if:goodImpressionTurns>=10 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 509, name: "\u8349\u7B1B\u30CF\u30FC\u30E2\u30CB\u30FC+", availableCustomizations: "19,7", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=2; fixedStamina+=3; if:goodImpressionTurns>=10 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 510, name: "\u982C\u5F35\u308B3\u8272", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 82, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "setStance(strength); fullPowerCharge+=5; target:effect(fullPowerCharge) & active { g.score+=2 }; at:turn { setStance(preservation) limit:1 }", limit: 1, effects: "" }, { id: 511, name: "\u982C\u5F35\u308B3\u8272+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 82, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); fullPowerCharge+=5; target:effect(fullPowerCharge) & active { g.score+=4 }; at:turn { setStance(preservation) limit:1 }", limit: 1, effects: "" }, { id: 512, name: "\u5C0F\u3055\u306A\u304A\u5BA2\u3055\u3093", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "at:turn { setStance(preservation); fullPowerCharge+=2; limit:1 }; if:isFullPower { score+=24 }", limit: 1, effects: "" }, { id: 513, name: "\u5C0F\u3055\u306A\u304A\u5BA2\u3055\u3093+", availableCustomizations: "29,48,83", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "at:turn { setStance(preservation); fullPowerCharge+=3; limit:1 }; if:isFullPower { score+=24 }", limit: 1, effects: "" }, { id: 514, name: "\u304D\u3089\u304D\u3089\u30D7\u30EA\u30BA\u30E0", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 83, forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=6", actions: "setStance(strength2); at:cardUsed[mental] { if:stance==strength2 { target:effect(strength) { g.score+=7 } } }", limit: 1, effects: "" }, { id: 515, name: "\u304D\u3089\u304D\u3089\u30D7\u30EA\u30BA\u30E0+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 83, forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=4", actions: "setStance(strength2); at:cardUsed[mental] { if:stance==strength2 { target:effect(strength) { g.score+=8 } } }", limit: 1, effects: "" }, { id: 516, name: "\u30C7\u30A4\u30C9\u30EA\u30FC\u30DF\u30F3\u30B0", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 62, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:genki>=30", cost: "stamina-=3", actions: "genki+=3; at:startOfTurn { score+=genki*0.6; limit:3 }", limit: 1, effects: "" }, { id: 517, name: "\u30C7\u30A4\u30C9\u30EA\u30FC\u30DF\u30F3\u30B0+", availableCustomizations: "30,85,86", rarity: "R", type: "active", plan: "logic", unlockPlv: 62, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "@usable if:genki>=30", cost: "stamina-=3", actions: "genki+=6; @trigger at:startOfTurn { score+=genki*0.6; limit:4 }", limit: 1, effects: "" }, { id: 518, name: "\u30BF\u30D5\u30CD\u30B9", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 63, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:preservationTimes>=2", cost: "cost-=5", actions: "setStance(preservation); cardUsesRemaining+=1; target:active { g.score+=14; g.cost-=1 }", limit: 1, effects: "" }, { id: 519, name: "\u30BF\u30D5\u30CD\u30B9+", availableCustomizations: "41,87", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 63, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "@usable if:preservationTimes>=2", cost: "cost-=4", actions: "setStance(preservation); cardUsesRemaining+=1; target:active { g.score+=18; g.cost-=1 }", limit: 1, effects: "" }, { id: 520, name: "\u5922\u8272\u30EA\u30C3\u30D7", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 64, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=2; motivation+=4; setScoreBuff(0.1); if:goodImpressionTurns>=15 { at:startOfTurn { goodImpressionTurns*=1.1; limit:3 } }", limit: 1, effects: "" }, { id: 521, name: "\u5922\u8272\u30EA\u30C3\u30D7+", availableCustomizations: "88,27", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 64, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=2; motivation+=5; setScoreBuff(0.2); @trigger if:goodImpressionTurns>=15 { at:startOfTurn { goodImpressionTurns*=1.1; limit:4 } }", limit: 1, effects: "" }, { id: 522, name: "\u653E\u8AB2\u5F8C\u304A\u3057\u3083\u3079\u308A", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 84, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=2; at:turn { score+=8+cumulativeFullPowerCharge*3; limit:1 }", limit: 1, effects: "" }, { id: 523, name: "\u653E\u8AB2\u5F8C\u304A\u3057\u3083\u3079\u308A+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 84, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "fullPowerCharge+=5; at:turn { score+=8+cumulativeFullPowerCharge*3; limit:1 }", limit: 1, effects: "" }, { id: 524, name: "\u30D2\u30FC\u30ED\u30FC\u3068\u306E\u51FA\u4F1A\u3044", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 85, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodConditionTurns+=4; concentration+=1; if:goodConditionTurns>=4 { at:turn { cardUsesRemaining+=1; limit:1 } }; if:goodConditionTurns>=12 { at:turn { cardUsesRemaining+=1; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 525, name: "\u30D2\u30FC\u30ED\u30FC\u3068\u306E\u51FA\u4F1A\u3044+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 85, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=4; concentration+=2; if:goodConditionTurns>=4 { at:turn { cardUsesRemaining+=1; limit:1 } }; if:goodConditionTurns>=12 { at:turn { cardUsesRemaining+=1; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 526, name: "\u3042\u306E\u65E5\u3001\u3053\u306E\u5834\u6240\u3067", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 86, forceInitialHand: false, conditions: "", cost: "stamina-=6", actions: "fullPowerCharge+=10; holdSelected[deck | discarded]", limit: 1, effects: "" }, { id: 527, name: "\u3042\u306E\u65E5\u3001\u3053\u306E\u5834\u6240\u3067+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 86, forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "fullPowerCharge+=10; holdSelected[deck | discarded](2)", limit: 1, effects: "" }, { id: 528, name: "\u5BFE\u6226\u304A\u9858\u3044\u3057\u307E\u3059\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "holdSelected[deck | discarded]; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 529, name: "\u5BFE\u6226\u304A\u9858\u3044\u3057\u307E\u3059\uFF01+", availableCustomizations: "23,89", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "holdSelected[deck | discarded]; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 530, name: "\u52DD\u8CA0\u306F\u3053\u308C\u304B\u3089\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=2; genki+=2; halfCostTurns+=3; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 531, name: "\u52DD\u8CA0\u306F\u3053\u308C\u304B\u3089\uFF01+", availableCustomizations: "2,26", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=5; genki+=5; halfCostTurns+=3; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 532, name: "\u6E67\u304D\u4E0A\u304C\u308B\u6C17\u6301\u3061", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 87, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setGoodImpressionTurnsBuff(1,3)", limit: 1, effects: "" }, { id: 533, name: "\u6E67\u304D\u4E0A\u304C\u308B\u6C17\u6301\u3061+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 87, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setGoodImpressionTurnsBuff(1,3)", limit: 1, effects: "" }, { id: 534, name: "\u308F\u305F\u3057\u3089\u3057\u3044\u8272", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 88, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "motivation*=1.5; removeDebuffs(1); at:turn { genki+=4; limit:1 }", limit: 1, effects: "" }, { id: 535, name: "\u308F\u305F\u3057\u3089\u3057\u3044\u8272+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 88, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "motivation*=1.5; removeDebuffs(2); at:turn { genki+=8; limit:1 }", limit: 1, effects: "" }, { id: 536, name: "\u5E0C\u671B\u304C\u5C4A\u304F\u307E\u3067", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 89, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "at:cardRemoved { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 537, name: "\u5E0C\u671B\u304C\u5C4A\u304F\u307E\u3067+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 89, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "at:cardRemoved { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 538, name: "\u3042\u305F\u3089\u3057\u3044\u5149", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 90, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(preservation2); setEnthusiasmBonus(5)", limit: 1, effects: "" }, { id: 539, name: "\u3042\u305F\u3089\u3057\u3044\u5149+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 90, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(preservation2); setEnthusiasmBonus(8)", limit: 1, effects: "" }, { id: 540, name: "\u306E\u3093\u3073\u308A\u5C4B\u3055\u3093", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 91, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=1; at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 541, name: "\u306E\u3093\u3073\u308A\u5C4B\u3055\u3093+", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 91, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=3; at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 542, name: "\u4F11\u307F\u4F11\u307F\u3001\u524D\u3078", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 92, forceInitialHand: true, conditions: "", cost: "cost-=6", actions: "setStance(preservation); at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 543, name: "\u4F11\u307F\u4F11\u307F\u3001\u524D\u3078+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 92, forceInitialHand: true, conditions: "", cost: "cost-=3", actions: "setStance(preservation); at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 544, name: "\u5C4B\u4E0A\u304B\u3089\u306E\u666F\u8272", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 93, forceInitialHand: true, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=2; target:effect(fullPowerCharge) { g.score+=4 }; at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 545, name: "\u5C4B\u4E0A\u304B\u3089\u306E\u666F\u8272+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 93, forceInitialHand: true, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=3; target:effect(fullPowerCharge) { g.score+=9 }; at:afterStartOfTurn { if:isPreservation { setStance(leisure) } }", limit: 1, effects: "" }, { id: 546, name: "\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 47, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:fullPowerCharge>=5", cost: "cost-=3", actions: "fullPowerCharge+=5; at:turn { target:hand { g.score+=8 }; limit:1 }", limit: 1, effects: "" }, { id: 547, name: "\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0+", availableCustomizations: "73,43,28", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 47, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:fullPowerCharge>=5", cost: "cost-=0", actions: "fullPowerCharge+=5; at:turn { target:hand { g.score+=8 }; limit:1 }", limit: 1, effects: "" }, { id: 548, name: "\u7B2C\u4E00\u5370\u8C61", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 18, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); at:cardUsed { if:cardHasEffect(strength) { target:all { g.score+=2 } } }", limit: 1, effects: "" }, { id: 549, name: "\u7B2C\u4E00\u5370\u8C61+", availableCustomizations: "40,60,36", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 18, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); at:cardUsed { if:cardHasEffect(strength) { target:all { g.score+=3 } } }", limit: 1, effects: "" }, { id: 550, name: "\u30C8\u30EC\u30F3\u30C9\u30EA\u30FC\u30C0\u30FC", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 36, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "holdThisCard; if:stance!=fullPower { cardUsesRemaining+=1 }; if:isFullPower { score+=3+cumulativeFullPowerCharge*0.5; score+=3+cumulativeFullPowerCharge*0.5 }", limit: "", effects: "at:afterCardUsed { if:usedCardBaseId==550 & isFullPower { target:this { g.score+=5; g.typedCost-=1 } }; limit:4 }" }, { id: 551, name: "\u30C8\u30EC\u30F3\u30C9\u30EA\u30FC\u30C0\u30FC+", availableCustomizations: "35,28", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 36, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "holdThisCard; if:stance!=fullPower { cardUsesRemaining+=1 }; if:isFullPower { score+=10+cumulativeFullPowerCharge; score+=10+cumulativeFullPowerCharge }", limit: "", effects: "at:afterCardUsed { if:usedCardBaseId==550 & isFullPower { target:this { g.score+=5; g.typedCost-=1 } }; limit:4 }" }, { id: 552, name: "\u30E2\u30C1\u30D9", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 17, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "fullPowerCharge+=2; at:cardUsed { if:cardHasEffect(fullPowerCharge) { fullPowerCharge+=1 } }", limit: 1, effects: "" }, { id: 553, name: "\u30E2\u30C1\u30D9+", availableCustomizations: "57,43,36", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 17, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "fullPowerCharge+=2; at:cardUsed { if:cardHasEffect(fullPowerCharge) { fullPowerCharge+=1 } }", limit: 1, effects: "" }, { id: 554, name: "\u76DB\u308A\u4E0A\u3052\u4E0A\u624B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 22, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "target:active { g.score+=13; g.cost-=1 }; at:turn { drawCard; limit:1 }", limit: 1, effects: "" }, { id: 555, name: "\u76DB\u308A\u4E0A\u3052\u4E0A\u624B+", availableCustomizations: "93,42,43", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 22, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "target:active { g.score+=16; g.cost-=1 }; at:turn { drawCard(2); limit:1 }", limit: 1, effects: "" }, { id: 556, name: "\u30A4\u30F3\u30D5\u30EB\u30A8\u30F3\u30B5\u30FC", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 24, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "target:mental { g.genki+=5; g.cost-=1 }; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 557, name: "\u30A4\u30F3\u30D5\u30EB\u30A8\u30F3\u30B5\u30FC+", availableCustomizations: "93,42", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 24, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "target:mental { g.genki+=6; g.cost-=1 }; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 558, name: "\u4E00\u5FC3\u4E0D\u4E71", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 38, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:isStrength", cost: "cost-=3", actions: "setStance(preservation); target:effect(strength) { g.score+=37; g.cost-=7 }", limit: 1, effects: "" }, { id: 559, name: "\u4E00\u5FC3\u4E0D\u4E71+", availableCustomizations: "41,28", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 38, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:isStrength", cost: "cost-=3", actions: "setStance(preservation); target:effect(strength) { g.score+=45; g.cost-=7 }", limit: 1, effects: "" }, { id: 560, name: "\u6B21\u3053\u305D\u306F\u3001\u5FC5\u305A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 94, forceInitialHand: true, conditions: "", cost: "stamina-=6", actions: "setStance(preservation); target:mental { g.genki+=8 }", limit: 1, effects: "" }, { id: 561, name: "\u6B21\u3053\u305D\u306F\u3001\u5FC5\u305A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 94, forceInitialHand: true, conditions: "", cost: "stamina-=6", actions: "setStance(preservation); target:mental { g.genki+=11 }", limit: 1, effects: "" }, { id: 562, name: "\u3069\u3093\u306A\u4E16\u754C\u3067\u3082", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 95, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=2; score+=7; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 563, name: "\u3069\u3093\u306A\u4E16\u754C\u3067\u3082+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 95, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=2; score+=17; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 564, name: "\u6226\u3046\u7406\u7531", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 96, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=2; goodImpressionTurns+=3; goodImpressionTurns*=1.1", limit: "", effects: "" }, { id: 565, name: "\u6226\u3046\u7406\u7531+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 96, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=3; goodImpressionTurns+=4; goodImpressionTurns*=1.1", limit: "", effects: "" }, { id: 566, name: "\u3082\u3046\u305F\u3081\u3089\u308F\u306A\u3044", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 97, forceInitialHand: false, conditions: "", cost: "stamina-=6", actions: "at:concentrationIncreased { if:isDirectEffect & concentrationDelta>=7 { concentrationMultiplier=1.5; score+=12 } }", limit: 1, effects: "" }, { id: 567, name: "\u3082\u3046\u305F\u3081\u3089\u308F\u306A\u3044+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 97, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "at:concentrationIncreased { if:isDirectEffect & concentrationDelta>=7 { concentrationMultiplier=1.5; score+=12 } }", limit: 1, effects: "" }, { id: 568, name: "\u61A7\u308C\u306E\u30A2\u30A4\u30C9\u30EB", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 98, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "motivation+=2; at:turn { genki+=3; limit:1 }; at:genkiIncreased { if:isDirectEffect & genkiDelta>=30 { score+=genki*0.2 } }", limit: 1, effects: "" }, { id: 569, name: "\u61A7\u308C\u306E\u30A2\u30A4\u30C9\u30EB+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 98, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "motivation+=3; at:turn { genki+=3; limit:1 }; at:genkiIncreased { if:isDirectEffect & genkiDelta>=30 { score+=genki*0.3 } }", limit: 1, effects: "" }, { id: 570, name: "\u521D\u3081\u3066\u306E\u91CE\u671B", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 99, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "at:endOfTurn { score+=genki*0.5; limit:3 }", limit: 1, effects: "" }, { id: 571, name: "\u521D\u3081\u3066\u306E\u91CE\u671B+", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 99, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "at:endOfTurn { score+=genki*0.5; limit:4 }", limit: 1, effects: "" }, { id: 572, name: "\u521D\u3081\u3066\u306E\u606F", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 100, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; motivation+=2", limit: 1, effects: "" }, { id: 573, name: "\u521D\u3081\u3066\u306E\u606F+", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 100, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=7; motivation+=3", limit: 1, effects: "" }, { id: 574, name: "\u521D\u3081\u3066\u306E\u795E\u964D\u81E8", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 101, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "concentration+=2; goodConditionTurns+=2", limit: 1, effects: "" }, { id: 575, name: "\u521D\u3081\u3066\u306E\u795E\u964D\u81E8+", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 101, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "concentration+=2; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 576, name: "\u65E5\u304C\u5DEE\u3059\u65B9\u3078", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 102, forceInitialHand: false, conditions: "if:isStrength", cost: "stamina-=1", actions: "setStance(preservation); genki+=5; setEnthusiasmBonus(8); target:mental { g.cost-=1 }", limit: "", effects: "" }, { id: 577, name: "\u65E5\u304C\u5DEE\u3059\u65B9\u3078+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 102, forceInitialHand: false, conditions: "if:isStrength", cost: "stamina-=1", actions: "setStance(preservation); genki+=8; setEnthusiasmBonus(10); target:mental { g.cost-=1 }", limit: "", effects: "" }, { id: 578, name: "\u3064\u304B\u307F\u53D6\u3063\u305F\u672A\u6765", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 103, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "genki+=2+cardsUsed*5; goodImpressionTurns+=2", limit: 1, effects: "" }, { id: 579, name: "\u3064\u304B\u307F\u53D6\u3063\u305F\u672A\u6765+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 103, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "genki+=2+cardsUsed*8; goodImpressionTurns+=2", limit: 1, effects: "" }, { id: 580, name: "\u671D\u304C\u6E80\u305F\u3059\u307E\u3067", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 104, forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=3; at:turn { goodConditionTurns+=5; limit:1; delay:2 }; at:turn { cardUsesRemaining+=1; limit:1; delay:3 }", limit: 1, effects: "" }, { id: 581, name: "\u671D\u304C\u6E80\u305F\u3059\u307E\u3067+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 104, forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=5; at:turn { goodConditionTurns+=7; limit:1; delay:2 }; at:turn { cardUsesRemaining+=1; limit:1; delay:3 }", limit: 1, effects: "" }, { id: 582, name: "\u5F85\u3061\u671B\u3093\u3060\u77AC\u9593", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 105, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(preservation2); at:fullPowerChargeIncreased { if:isDirectEffect & isPreservation { fullPowerCharge+=1 } }", limit: 1, effects: "" }, { id: 583, name: "\u5F85\u3061\u671B\u3093\u3060\u77AC\u9593+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 105, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "setStance(preservation2); at:fullPowerChargeIncreased { if:isDirectEffect & isPreservation { fullPowerCharge+=1 } }", limit: 1, effects: "" }, { id: 584, name: "\u590F\u591C\u306B\u54B2\u304F\u601D\u3044\u51FA", availableCustomizations: "", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "removeRandom[trouble & (deck | discarded)]; cardUsesRemaining+=1; at:cardUsed { effectCounter+=1; if:effectCounter%5==4 { score+=4 } }", limit: 1, effects: "" }, { id: 585, name: "\u590F\u591C\u306B\u54B2\u304F\u601D\u3044\u51FA+", availableCustomizations: "29,83", rarity: "SSR", type: "active", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "removeRandom[trouble & (deck | discarded)]; cardUsesRemaining+=1; at:cardUsed { effectCounter+=1; if:effectCounter%5==4 { score+=4 } }", limit: 1, effects: "" }, { id: 586, name: "\u6708\u660E\u304B\u308A\u306B\u5305\u307E\u308C\u3066", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "costReduction+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 587, name: "\u6708\u660E\u304B\u308A\u306B\u5305\u307E\u308C\u3066+", availableCustomizations: "29,27", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "costReduction+=1; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 588, name: "\u81EA\u5DF1\u80AF\u5B9A\u611F\u7206\u4E0A\u3052\u2191\u2191", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 106, forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "at:cardUsed[mental] { concentration+=2 }", limit: 1, effects: "" }, { id: 589, name: "\u81EA\u5DF1\u80AF\u5B9A\u611F\u7206\u4E0A\u3052\u2191\u2191+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 106, forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "concentration+=1; at:cardUsed[mental] { concentration+=2 }", limit: 1, effects: "" }, { id: 590, name: "\u5DFB\u304D\u8FD4\u3057", availableCustomizations: "", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 66, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=1", actions: "setStance(preservation); setEnthusiasmBonus(3); target:all { g.cost+=1 }", limit: 1, effects: "" }, { id: 591, name: "\u5DFB\u304D\u8FD4\u3057+", availableCustomizations: "35,37,78", rarity: "R", type: "mental", plan: "anomaly", unlockPlv: 66, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=1", actions: "setStance(preservation); setEnthusiasmBonus(6); target:all { g.cost+=1 }", limit: 1, effects: "" }, { id: 592, name: "\u30DA\u30FC\u30B9\u914D\u5206", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 67, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:perfectConditionTurns>=1", cost: "cost-=4", actions: "score+=3; concentration+=3; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 593, name: "\u30DA\u30FC\u30B9\u914D\u5206+", availableCustomizations: "70,68,28", rarity: "R", type: "active", plan: "sense", unlockPlv: 67, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:perfectConditionTurns>=1", cost: "cost-=4", actions: "score+=5; concentration+=4; goodConditionTurns+=4", limit: 1, effects: "" }, { id: 594, name: "\u9054\u6210\u611F", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 68, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(preservation); cardUsesRemaining+=1; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { setStance(preservation) }; limit:3 }", limit: 1, effects: "" }, { id: 595, name: "\u9054\u6210\u611F+", availableCustomizations: "29,41", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 68, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation); cardUsesRemaining+=1; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { setStance(preservation) }; limit:3 }", limit: 1, effects: "" }, { id: 596, name: "\u7834\u7AF9\u306E\u52E2\u3044", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 69, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "cost-=2", actions: "concentration+=5; at:startOfTurn { score+=5; limit:3 }", limit: 1, effects: "" }, { id: 597, name: "\u7834\u7AF9\u306E\u52E2\u3044+", availableCustomizations: "97,54,14", rarity: "SR", type: "active", plan: "sense", unlockPlv: 69, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "@usable if:goodConditionTurns>=8", cost: "cost-=2", actions: "concentration+=7; at:startOfTurn { score+=5; limit:4 }", limit: 1, effects: "" }, { id: 598, name: "\u5929\u8CE6\u306E\u624D", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 70, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "goodConditionTurns+=3; concentration+=2; moveRandomToTopOfDeck[SSR & (deck | discarded)](3); at:turn { cardUsesRemaining+=1; limit:1 }", limit: 1, effects: "" }, { id: 599, name: "\u5929\u8CE6\u306E\u624D+", availableCustomizations: "17,13", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 70, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=4", actions: "goodConditionTurns+=4; concentration+=3; moveRandomToTopOfDeck[SSR & (deck | discarded)](3); at:turn { cardUsesRemaining+=1; limit:1 }", limit: 1, effects: "" }, { id: 600, name: "\u30C9\u30E9\u30DE\u30C1\u30C3\u30AF\u30DB\u30EA\u30C7\u30FC", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 107, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "at:cardUsed[active] { if:motivation>=6 { effectCounter+=1; if:effectCounter%2==1 { genki+=7 } } }", limit: 1, effects: "" }, { id: 601, name: "\u30C9\u30E9\u30DE\u30C1\u30C3\u30AF\u30DB\u30EA\u30C7\u30FC+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 107, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "motivation+=3; at:cardUsed[active] { if:motivation>=6 { effectCounter+=1; if:effectCounter%2==1 { genki+=8 } } }", limit: 1, effects: "" }, { id: 602, name: "\u7206\u76DB\u308C\u6700\u5F37\u30EB\u30C3\u30AF\u266A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 108, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=3; goodImpressionTurns+=4; motivation+=3", limit: 1, effects: "" }, { id: 603, name: "\u7206\u76DB\u308C\u6700\u5F37\u30EB\u30C3\u30AF\u266A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 108, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=3; goodImpressionTurns+=6; motivation+=3", limit: 1, effects: "" }, { id: 604, name: "\u3067\u3053\u308C\u30FC\u3068\u307E\u3058\u3063\u304F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 109, forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "fullPowerCharge+=2; genki+=6; score+=cumulativeFullPowerCharge", limit: 1, effects: "" }, { id: 605, name: "\u3067\u3053\u308C\u30FC\u3068\u307E\u3058\u3063\u304F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 109, forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "fullPowerCharge+=2; genki+=9; score+=cumulativeFullPowerCharge*1.5", limit: 1, effects: "" }, { id: 606, name: "\u5FAE\u71B1\u30CE\u30B9\u30BF\u30EB\u30B8\u30FC", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 110, forceInitialHand: false, conditions: "if:goodImpressionTurns>=10", cost: "stamina-=7", actions: "genki+=2; motivation+=2; goodImpressionTurns+=2*countCards[deck | discarded]; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 607, name: "\u5FAE\u71B1\u30CE\u30B9\u30BF\u30EB\u30B8\u30FC+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 110, forceInitialHand: false, conditions: "if:goodImpressionTurns>=10", cost: "stamina-=5", actions: "genki+=6; motivation+=4; goodImpressionTurns+=2*countCards[deck | discarded]; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 608, name: "\u52DD\u5229\u3092\u3064\u304B\u3081\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "nullifyCostCards+=1; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 609, name: "\u52DD\u5229\u3092\u3064\u304B\u3081\uFF01+", availableCustomizations: "36,39", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "nullifyCostCards+=1; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 610, name: "\u304B\u307E\u3057\u3061\u3083\u3048\u266A", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 111, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=2; perfectConditionTurns+=1; if:perfectConditionTurns>=5 { score+=goodConditionTurns*3.5 }", limit: "", effects: "" }, { id: 611, name: "\u304B\u307E\u3057\u3061\u3083\u3048\u266A+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 111, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=3; perfectConditionTurns+=2; if:perfectConditionTurns>=5 { score+=goodConditionTurns*3.5 }", limit: "", effects: "" }, { id: 612, name: "\u6CE5\u81ED\u304F\u3042\u308C\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 112, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "setStance(strength); score+=10; genki+=5; at:turn { setStance(preservation); limit:1 }", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=4 } }; limit:4 }" }, { id: 613, name: "\u6CE5\u81ED\u304F\u3042\u308C\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 112, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=10; genki+=10; at:turn { setStance(preservation); limit:1 }", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=4 } }; limit:4 }" }, { id: 614, name: "\u7A7A\u307E\u3067\u4E00\u76F4\u7DDA", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 113, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "goodImpressionTurns+=3; setGoodImpressionTurnsEffectBuff(0.2); cardUsesRemaining+=1; doubleCostTurns+=1", limit: "", effects: "" }, { id: 615, name: "\u7A7A\u307E\u3067\u4E00\u76F4\u7DDA+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 113, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=4; setGoodImpressionTurnsEffectBuff(0.2); cardUsesRemaining+=1; doubleCostTurns+=1", limit: "", effects: "" }, { id: 616, name: "\u5BFE\u8C61\u3001\u30ED\u30C3\u30AF\u30AA\u30F3", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=6; setGoodImpressionTurnsEffectBuff(1,3); if:goodImpressionTurns>=10 { at:afterStartOfTurn { drawCard; limit:3 } }", limit: 1, effects: "" }, { id: 617, name: "\u5BFE\u8C61\u3001\u30ED\u30C3\u30AF\u30AA\u30F3+", availableCustomizations: "29,20", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; setGoodImpressionTurnsEffectBuff(1,3); if:goodImpressionTurns>=10 { at:afterStartOfTurn { drawCard; limit:3 } }", limit: 1, effects: "" }, { id: 618, name: "\u4E16\u754C\u4E00\u306E\u52C7\u6C17", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 114, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=goodConditionTurns*11; goodConditionTurns=0", limit: 1, effects: "" }, { id: 619, name: "\u4E16\u754C\u4E00\u306E\u52C7\u6C17+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 114, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=goodConditionTurns*11; goodConditionTurns=0", limit: 1, effects: "" }, { id: 620, name: "\u307B\u3050\u308C\u308B\u3072\u3068\u3068\u304D", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "goodConditionTurns-=1", actions: "setConcentrationBuff(0.5,3); if:goodConditionTurns>=1 { at:turn { concentration+=4; limit:1 } }", limit: 1, effects: "" }, { id: 621, name: "\u307B\u3050\u308C\u308B\u3072\u3068\u3068\u304D+", availableCustomizations: "31,14", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "goodConditionTurns-=1", actions: "setConcentrationBuff(0.5,3); if:goodConditionTurns>=1 { at:turn { concentration+=6; limit:1 } }", limit: 1, effects: "" }, { id: 622, name: "\u898B\u3064\u3051\u305F\u4E16\u754C\u3067", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 115, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=goodConditionTurns", limit: 1, effects: "" }, { id: 623, name: "\u898B\u3064\u3051\u305F\u4E16\u754C\u3067+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 115, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "concentration+=goodConditionTurns", limit: 1, effects: "" }, { id: 624, name: "\u5965\u7FA9\u3001\u53D7\u3051\u6D41\u3057\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=4; if:concentration>=15 { at:turn { goodConditionTurnsMultiplier=2; score+=4; limit:1 } }; if:goodConditionTurns>=12 { at:turn { concentrationMultiplier=2; score+=4; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 625, name: "\u5965\u7FA9\u3001\u53D7\u3051\u6D41\u3057\uFF01+", availableCustomizations: "101,100", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=8; @concLine if:concentration>=15 { at:turn { goodConditionTurnsMultiplier=2; score+=8; limit:1 } }; @goodLine if:goodConditionTurns>=12 { at:turn { concentrationMultiplier=2; score+=8; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 626, name: "\u57F7\u5FF5\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "fixedGenki+=5; if:stamina>=maxStamina*0.5 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 627, name: "\u57F7\u5FF5\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC+", availableCustomizations: "30,83", rarity: "SSR", type: "mental", plan: "free", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=1", actions: "fixedGenki+=10; if:stamina>=maxStamina*0.5 { cardUsesRemaining+=1 }", limit: 1, effects: "" }, { id: 628, name: "\u30D7\u30E9\u30A4\u30C9\u306E\u584A", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 116, forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=4", actions: "setStance(strength); score+=5; score+=5", limit: 1, effects: "" }, { id: 629, name: "\u30D7\u30E9\u30A4\u30C9\u306E\u584A+", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 116, forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=4", actions: "setStance(strength); score+=8; score+=8", limit: 1, effects: "" }, { id: 630, name: "\u7D2B\u96FB\u4E00\u9583", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 117, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "goodImpressionTurns+=2; at:endOfTurn { if:motivation>=6 { score+=goodImpressionTurns*0.8 }; limit:4 }", limit: 1, effects: "" }, { id: 631, name: "\u7D2B\u96FB\u4E00\u9583+", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 117, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=4; at:endOfTurn { if:motivation>=6 { score+=goodImpressionTurns*0.8 }; limit:4 }", limit: 1, effects: "" }, { id: 632, name: "\u79C1\u306F\u3001\u6C7A\u3057\u3066", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 118, forceInitialHand: false, conditions: "if:motivation>=9", cost: "cost-=6", actions: "prideTurns+=5; cardUsesRemaining+=1; goodImpressionTurns+=8; drawCard", limit: 1, effects: "" }, { id: 633, name: "\u79C1\u306F\u3001\u6C7A\u3057\u3066+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 118, forceInitialHand: false, conditions: "if:motivation>=9", cost: "cost-=4", actions: "prideTurns+=5; cardUsesRemaining+=1; goodImpressionTurns+=9; drawCard", limit: 1, effects: "" }, { id: 634, name: "\u30B0\u30FC\u30C1\u30E7\u30AD\u30D1\u30FC\u30C7\u30DD\u30F3", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 119, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=8", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=5 } } }" }, { id: 635, name: "\u30B0\u30FC\u30C1\u30E7\u30AD\u30D1\u30FC\u30C7\u30DD\u30F3+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 119, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=10", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=5 } } }" }, { id: 636, name: "\u3044\u305F\u305A\u3089\u30B5\u30F3\u30BF\u3055\u3093", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(preservation2); setEnthusiasmBuff(0.5,3); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 637, name: "\u3044\u305F\u305A\u3089\u30B5\u30F3\u30BF\u3055\u3093+", availableCustomizations: "29,28", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation2); setEnthusiasmBuff(0.5,3); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 638, name: "\u3042\u3075\u308C\u51FA\u308B\u60F3\u3044", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 120, forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=6", actions: "cardUsesRemaining+=1; at:turn { fullPowerCharge+=2; limit:1 }; at:endOfTurn { if:fullPowerCharge<=9 { score+=2+cumulativeFullPowerCharge }; limit:3 }", limit: "", effects: "" }, { id: 639, name: "\u3042\u3075\u308C\u51FA\u308B\u60F3\u3044+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 120, forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=4", actions: "cardUsesRemaining+=1; at:turn { fullPowerCharge+=3; limit:1 }; at:endOfTurn { if:fullPowerCharge<=9 { score+=2+cumulativeFullPowerCharge }; limit:3 }", limit: "", effects: "" }, { id: 640, name: "\u30C0\u30FC\u30AF\u30D2\u30FC\u30ED\u30FC\u306E\u8A95\u751F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 121, forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "setScoreBuff(0.1); at:endOfTurn { if:turnsRemaining==1 { goodConditionTurnsMultiplier=2; score+=30 } }", limit: 1, effects: "" }, { id: 641, name: "\u30C0\u30FC\u30AF\u30D2\u30FC\u30ED\u30FC\u306E\u8A95\u751F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 121, forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "setScoreBuff(0.1); at:endOfTurn { if:turnsRemaining==1 { goodConditionTurnsMultiplier=2; score+=50 } }", limit: 1, effects: "" }, { id: 642, name: "\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=2", cost: "cost-=2", actions: "goodConditionTurnsMultiplier=2; score+=10", limit: 1, effects: "" }, { id: 643, name: "\u30B9\u30C6\u30FC\u30B8\u30F3\u30B0\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=2", cost: "cost-=2", actions: "goodConditionTurnsMultiplier=2; score+=15", limit: 1, effects: "" }, { id: 644, name: "\u30B9\u30C6\u30C3\u30D7\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=6; goodConditionTurns+=2", limit: 1, effects: "" }, { id: 645, name: "\u30B9\u30C6\u30C3\u30D7\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=8; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 646, name: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=6; concentration+=2", limit: 1, effects: "" }, { id: 647, name: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=8; concentration+=3", limit: 1, effects: "" }, { id: 648, name: "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:concentration>=3", cost: "cost-=2", actions: "score+=5; score+=5", limit: 1, effects: "" }, { id: 649, name: "\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:concentration>=3", cost: "cost-=2", actions: "score+=9; score+=9", limit: 1, effects: "" }, { id: 650, name: "\u30D5\u30A1\u30F3\u30B5\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=goodImpressionTurns", limit: 1, effects: "" }, { id: 651, name: "\u30D5\u30A1\u30F3\u30B5\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=goodImpressionTurns*1.3", limit: 1, effects: "" }, { id: 652, name: "\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=3", cost: "stamina-=3", actions: "score+=genki", limit: 1, effects: "" }, { id: 653, name: "\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=3", cost: "stamina-=2", actions: "score+=genki*1.2", limit: 1, effects: "" }, { id: 654, name: "\u4ED5\u8349\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=3; score+=motivation*1.2", limit: 1, effects: "" }, { id: 655, name: "\u4ED5\u8349\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; score+=motivation*1.5", limit: 1, effects: "" }, { id: 656, name: "\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:stanceChangedTimes>=3", cost: "cost-=4", actions: "setStance(strength2); score+=12", limit: 1, effects: "" }, { id: 657, name: "\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:stanceChangedTimes>=3", cost: "cost-=3", actions: "setStance(strength2); score+=21", limit: 1, effects: "" }, { id: 658, name: "\u9B45\u305B\u65B9\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=8", limit: 1, effects: "" }, { id: 659, name: "\u9B45\u305B\u65B9\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=12", limit: 1, effects: "" }, { id: 660, name: "\u30A2\u30C9\u30EA\u30D6\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:fullPowerCharge>=3", cost: "cost-=2", actions: "fullPowerCharge+=3; at:afterStartOfTurn { if:isFullPower { score+=15 }; limit:1 }", limit: 1, effects: "" }, { id: 661, name: "\u30A2\u30C9\u30EA\u30D6\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:fullPowerCharge>=3", cost: "cost-=2", actions: "fullPowerCharge+=4; at:afterStartOfTurn { if:isFullPower { score+=20 }; limit:1 }", limit: 1, effects: "" }, { id: 662, name: "\u30B9\u30D4\u30FC\u30C1\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=5; fullPowerCharge+=1", limit: 1, effects: "" }, { id: 663, name: "\u30B9\u30D4\u30FC\u30C1\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=6; fullPowerCharge+=2", limit: 1, effects: "" }, { id: 664, name: "\u8996\u7DDA\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; goodConditionTurns+=2", limit: 1, effects: "" }, { id: 665, name: "\u8996\u7DDA\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; goodConditionTurns+=3", limit: 1, effects: "" }, { id: 666, name: "\u601D\u8003\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=2; concentration+=2", limit: 1, effects: "" }, { id: 667, name: "\u601D\u8003\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=3; concentration+=3", limit: 1, effects: "" }, { id: 668, name: "\u843D\u3061\u7740\u304D\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=5; concentration+=2", limit: 1, effects: "" }, { id: 669, name: "\u843D\u3061\u7740\u304D\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; concentration+=3", limit: 1, effects: "" }, { id: 670, name: "\u30BF\u30A4\u30DF\u30F3\u30B0\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=5; perfectConditionTurns+=1", limit: 1, effects: "" }, { id: 671, name: "\u30BF\u30A4\u30DF\u30F3\u30B0\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=6; perfectConditionTurns+=2", limit: 1, effects: "" }, { id: 672, name: "\u7B11\u9854\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=4; goodImpressionTurns+=2", limit: 1, effects: "" }, { id: 673, name: "\u7B11\u9854\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; goodImpressionTurns+=3", limit: 1, effects: "" }, { id: 674, name: "\u76DB\u308A\u4E0A\u3052\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=1", cost: "cost-=2", actions: "goodImpressionTurns+=4", limit: 1, effects: "" }, { id: 675, name: "\u76DB\u308A\u4E0A\u3052\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=1", cost: "cost-=1", actions: "goodImpressionTurns+=5", limit: 1, effects: "" }, { id: 676, name: "\u30BB\u30EA\u30D5\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=2; goodImpressionTurns+=2; motivation+=2", limit: 1, effects: "" }, { id: 677, name: "\u30BB\u30EA\u30D5\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; goodImpressionTurns+=3; motivation+=2", limit: 1, effects: "" }, { id: 678, name: "\u8DDD\u96E2\u611F\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=4; motivation+=2", limit: 1, effects: "" }, { id: 679, name: "\u8DDD\u96E2\u611F\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; motivation+=3", limit: 1, effects: "" }, { id: 680, name: "\u30BB\u30EB\u30D5\u30B1\u30A2\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "genki+=2; goodImpressionTurns+=2; motivation+=2", limit: 1, effects: "" }, { id: 681, name: "\u30BB\u30EB\u30D5\u30B1\u30A2\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; goodImpressionTurns+=2; motivation+=3", limit: 1, effects: "" }, { id: 682, name: "\u7ACB\u3061\u56DE\u308A\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); genki+=5", limit: 1, effects: "" }, { id: 683, name: "\u7ACB\u3061\u56DE\u308A\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "setStance(preservation); genki+=7", limit: 1, effects: "" }, { id: 684, name: "\u30A6\u30A9\u30FC\u30E0\u30A2\u30C3\u30D7\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation2); fullPowerCharge+=1", limit: 1, effects: "" }, { id: 685, name: "\u30A6\u30A9\u30FC\u30E0\u30A2\u30C3\u30D7\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation2); fullPowerCharge+=2", limit: 1, effects: "" }, { id: 686, name: "\u81EA\u5DF1\u7BA1\u7406\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(preservation); fullPowerCharge+=2", limit: 1, effects: "" }, { id: 687, name: "\u81EA\u5DF1\u7BA1\u7406\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); fullPowerCharge+=3", limit: 1, effects: "" }, { id: 688, name: "\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u57FA\u672C", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=4; fullPowerCharge+=2; holdSelected[hand]", limit: 1, effects: "" }, { id: 689, name: "\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u57FA\u672C+", availableCustomizations: "", rarity: "N", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: false, sourceType: "default", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=6; fullPowerCharge+=3; holdSelected[hand]", limit: 1, effects: "" }, { id: 690, name: "\u8ECC\u9053\u4FEE\u6B63", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 51, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; concentration+=2; if:countCards[!removed & T]>=2 { score+=3 }", limit: 1, effects: "" }, { id: 691, name: "\u8ECC\u9053\u4FEE\u6B63+", availableCustomizations: "14,70,28", rarity: "R", type: "active", plan: "sense", unlockPlv: 51, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=6; concentration+=3; if:countCards[!removed & T]>=2 { score+=3 }", limit: 1, effects: "" }, { id: 692, name: "\u30D1\u30F3\u30D7\u30A2\u30C3\u30D7", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 52, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=6; goodConditionTurns+=2; if:countCards[!removed & T]>=2 { score+=4 }", limit: 1, effects: "" }, { id: 693, name: "\u30D1\u30F3\u30D7\u30A2\u30C3\u30D7+", availableCustomizations: "18,68,28", rarity: "R", type: "active", plan: "sense", unlockPlv: 52, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "score+=6; goodConditionTurns+=3; if:countCards[!removed & T]>=2 { score+=4 }", limit: 1, effects: "" }, { id: 694, name: "\u304A\u307E\u3082\u308A\u30DF\u30E9\u30AF\u30EB", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 51, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=2; score+=goodImpressionTurns*0.6; if:countCards[!removed & T]>=2 { score+=goodImpressionTurns*0.4 }", limit: 1, effects: "" }, { id: 695, name: "\u304A\u307E\u3082\u308A\u30DF\u30E9\u30AF\u30EB+", availableCustomizations: "22,71,27", rarity: "R", type: "active", plan: "logic", unlockPlv: 51, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=3; score+=goodImpressionTurns*0.8; if:countCards[!removed & T]>=2 { score+=goodImpressionTurns*0.4 }", limit: 1, effects: "" }, { id: 696, name: "\u304C\u3080\u3057\u3083\u3089", availableCustomizations: "", rarity: "R", type: "active", plan: "logic", unlockPlv: 52, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; motivation+=2; if:countCards[!removed & T]>=2 { score+=genki*0.5 }", limit: 1, effects: "" }, { id: 697, name: "\u304C\u3080\u3057\u3083\u3089+", availableCustomizations: "20,72,75", rarity: "R", type: "active", plan: "logic", unlockPlv: 52, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=2; motivation+=3; if:countCards[!removed & T]>=2 { score+=genki*0.5 }", limit: 1, effects: "" }, { id: 698, name: "\u5F62\u52E2\u9006\u8EE2", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 51, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=9; if:countCards[!removed & T]>=2 { drawCard }", limit: 1, effects: "" }, { id: 699, name: "\u5F62\u52E2\u9006\u8EE2+", availableCustomizations: "42,65,28", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 51, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=13; if:countCards[!removed & T]>=2 { drawCard(2) }", limit: 1, effects: "" }, { id: 700, name: "\u30CE\u30F3\u30B9\u30C8\u30C3\u30D7", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 52, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=2; at:startOfTurn { if:isFullPower { score+=20 }; limit:1 }; if:countCards[!removed & T]>=2 { holdSelected[hand] }", limit: 1, effects: "" }, { id: 701, name: "\u30CE\u30F3\u30B9\u30C8\u30C3\u30D7+", availableCustomizations: "42,73,28", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 52, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "fullPowerCharge+=3; at:startOfTurn { if:isFullPower { score+=20 }; limit:1 }; if:countCards[!removed & T]>=2 { holdSelected[hand] }", limit: 1, effects: "" }, { id: 702, name: "\u30AA\u30FC\u30D0\u30FC\u30C9\u30E9\u30A4\u30D6", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 58, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=4; fullPowerCharge+=2; cardUsesRemaining+=1; addCardToDeck(23); at:turn { setStance(preservation); limit:1 }", limit: "", effects: "" }, { id: 703, name: "\u30AA\u30FC\u30D0\u30FC\u30C9\u30E9\u30A4\u30D6+", availableCustomizations: "29,28", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 58, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); score+=4; score+=4; fullPowerCharge+=2; cardUsesRemaining+=1; addCardToDeck(23); at:turn { setStance(preservation); limit:1 }", limit: "", effects: "" }, { id: 704, name: "\u4E00\u767A\u52DD\u8CA0", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 53, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "concentration+=7; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 705, name: "\u4E00\u767A\u52DD\u8CA0+", availableCustomizations: "17,3", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 53, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=8; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 706, name: "\u30B9\u30EA\u30EA\u30F3\u30B0", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 54, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodConditionTurns+=5; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 707, name: "\u30B9\u30EA\u30EA\u30F3\u30B0+", availableCustomizations: "13,3", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 54, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodConditionTurns+=7; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 708, name: "\u5927\u80C6\u4E0D\u6575", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 56, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodConditionTurns+=3; concentration+=5; cardUsesRemaining+=1; addCardToDeck(23)", limit: "", effects: "" }, { id: 709, name: "\u5927\u80C6\u4E0D\u6575+", availableCustomizations: "29,28", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 56, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=3; concentration+=5; cardUsesRemaining+=1; addCardToDeck(23)", limit: "", effects: "" }, { id: 710, name: "\u5192\u967A\u5FC3", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 53, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=6; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 711, name: "\u5192\u967A\u5FC3+", availableCustomizations: "19,20", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 53, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodImpressionTurns+=7; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 712, name: "\u6C17\u307E\u3050\u308C\u30CF\u30FC\u30C8", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 54, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=3; motivation+=5; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 713, name: "\u6C17\u307E\u3050\u308C\u30CF\u30FC\u30C8+", availableCustomizations: "21,27", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 54, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=3; motivation+=6; cardUsesRemaining+=1; drawCard; addCardToDeck(23)", limit: 1, effects: "" }, { id: 714, name: "\u6210\u9577\u75DB", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 57, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=2; motivation+=3; goodImpressionTurns+=4; cardUsesRemaining+=1; addCardToDeck(23)", limit: "", effects: "" }, { id: 715, name: "\u6210\u9577\u75DB+", availableCustomizations: "29,26", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 57, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=3; motivation+=4; goodImpressionTurns+=5; cardUsesRemaining+=1; addCardToDeck(23)", limit: "", effects: "" }, { id: 716, name: "\u30D5\u30EB\u30B9\u30ED\u30C3\u30C8\u30EB", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 53, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); setEnthusiasmBuff(1,3); cardUsesRemaining+=1; drawCard(3); addCardToDeck(23)", limit: 1, effects: "" }, { id: 717, name: "\u30D5\u30EB\u30B9\u30ED\u30C3\u30C8\u30EB+", availableCustomizations: "42,28", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 53, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(preservation); setEnthusiasmBuff(1.5,3); cardUsesRemaining+=1; drawCard(3); addCardToDeck(23)", limit: 1, effects: "" }, { id: 718, name: "\u30EA\u30B9\u30AD\u30FC\u30C1\u30E3\u30F3\u30B9", availableCustomizations: "", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 54, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "fullPowerCharge+=3; setFullPowerChargeBuff(0.5,3); cardUsesRemaining+=1; drawCard(2); addCardToDeck(23)", limit: 1, effects: "" }, { id: 719, name: "\u30EA\u30B9\u30AD\u30FC\u30C1\u30E3\u30F3\u30B9+", availableCustomizations: "43,28", rarity: "SR", type: "mental", plan: "anomaly", unlockPlv: 54, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=3; setFullPowerChargeBuff(0.5,4); cardUsesRemaining+=1; drawCard(2); addCardToDeck(23)", limit: 1, effects: "" }, { id: 720, name: "\u6700\u9AD8\u5091\u4F5C", availableCustomizations: "", rarity: "L", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=5", actions: "concentrationMultiplier=3.5; score+=4; if:countCards[deck | discarded]>=9 { at:startOfTurn { goodConditionTurns+=1; concentration+=1; drawCard(2); cardUsesRemaining+=1; limit:3 } }", limit: "", effects: "" }, { id: 721, name: "\u30B9\u30FC\u30D1\u30FC\u30CE\u30F4\u30A1", availableCustomizations: "", rarity: "L", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stance==strength2", cost: "cost-=1", actions: "score+=1", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%2==1 { target:this { g.score+=20; g.scoreTimes+=1; g.cost-=1 } }; limit:12 }; at:cardMovedToHand { if:movedCardId==721 { drawCard } }" }, { id: 722, name: "\u5B8C\u5168\u7121\u6B20", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: true, conditions: "", cost: "cost-=6", actions: "setGoodConditionTurnsBuff(0.25); setConcentrationBuff(0.25); cardUsesRemaining+=1; drawCard(2)", limit: 1, effects: "" }, { id: 723, name: "\u738B\u8005\u306E\u98A8\u683C", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodConditionTurns+=3; concentration+=3; cardUsesRemaining+=1; at:turnSkipped { at:turn { setScoreBuff(1.1,1); cardUsesRemaining+=1; drawCard(2); limit:1 }; at:turn { noActiveTurns+=1; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 724, name: "\u30A8\u30AF\u30BB\u30EC\u30F3\u30C8\u266A", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "cardUsesRemaining+=1; at:afterStartOfTurn { drawCard; limit:5 }; at:afterStartOfTurn { useRandomFree[hand & R]; useRandomFree[hand & R] }", limit: 1, effects: "" }, { id: 725, name: "\u7A76\u6975\u30B9\u30DE\u30A4\u30EB", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=6", cost: "cost-=6", actions: "setGoodImpressionTurnsEffectBuff(1); target:all { g.goodImpressionTurns+=6 }; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 726, name: "\u6700\u5F37\u30D1\u30D5\u30A9\u30FC\u30DE\u30FC", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=9", cost: "cost-=8", actions: "cardUsesRemaining+=1; motivation+=5; at:staminaDecreased { if:parentPhase==processCost { motivationMultiplier=2.5; genki+=4 } }", limit: 1, effects: "" }, { id: 727, name: "\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:stanceChangedTimes>=4", cost: "cost-=3", actions: "target:held { g.score+=5 }; useAllFree[held]; cardUsesRemaining+=1; at:turn { setStance(preservation); limit:1 }", limit: "", effects: "at:cardMovedToHand { if:movedCardId==727 { holdSelected[deck | discarded] } }" }, { id: 728, name: "\u30EC\u30B8\u30A7\u30F3\u30C9\u30B9\u30BF\u30FC", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "cardUsesRemaining+=1; drawCard(2); if:preservationTimes>=2 { turnsRemaining+=1 }; if:strengthTimes>=2 { turnsRemaining+=1 }; if:fullPowerTimes>=2 { turnsRemaining+=1 }; at:stanceChanged { if:isFullPower & turnsRemaining<=3 { setScoreBuff(1.5,1) }; limit:3 }", limit: 1, effects: "" }, { id: 729, name: "\u5922\u3068\u73FE\u306E\u5883\u754C\u7DDA", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 122, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "cardUsesRemaining+=1; if:motivation<=8 { goodImpressionTurns*=1.1 }; if:motivation>=9 { score+=goodImpressionTurns*1.4 }", limit: "", effects: "" }, { id: 730, name: "\u5922\u3068\u73FE\u306E\u5883\u754C\u7DDA+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 122, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "cardUsesRemaining+=1; if:motivation<=8 { goodImpressionTurns*=1.1 }; if:motivation>=9 { score+=goodImpressionTurns*2.5 }", limit: "", effects: "" }, { id: 731, name: "\u3042\u3053\u304C\u308C\u4E0D\u826F\u30E0\u30FC\u30D6", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=3", actions: "goodImpressionTurns+=3; cardUsesRemaining+=1; at:turn { drawCard; limit:1 }; if:motivation>=6 { drawCard(2) }", limit: 1, effects: "" }, { id: 732, name: "\u3042\u3053\u304C\u308C\u4E0D\u826F\u30E0\u30FC\u30D6+", availableCustomizations: "19,34", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "goodImpressionTurns+=4; cardUsesRemaining+=1; at:turn { drawCard; limit:1 }; if:motivation>=6 { drawCard(2) }", limit: 1, effects: "" }, { id: 733, name: "\u5473\u898B\u306F\u3044\u304B\u304C", availableCustomizations: "", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "removeRandom[trouble & (deck | discarded)]; goodImpressionTurns+=4; motivation+=3", limit: 1, effects: "" }, { id: 734, name: "\u5473\u898B\u306F\u3044\u304B\u304C+", availableCustomizations: "55,56,83", rarity: "SR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "removeRandom[trouble & (deck | discarded)]; goodImpressionTurns+=4; motivation+=3", limit: 1, effects: "" }, { id: 735, name: "\u7F6E\u304D\u53BB\u308A\u306A\u81EA\u5206", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 123, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(preservation); fullPowerCharge+=2; target:active & effect(fullPowerCharge) { g.score+=40; g.cost-=8 }", limit: 1, effects: "" }, { id: 736, name: "\u7F6E\u304D\u53BB\u308A\u306A\u81EA\u5206+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 123, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(preservation); fullPowerCharge+=2; target:active & effect(fullPowerCharge) { g.score+=50; g.cost-=8 }", limit: 1, effects: "" }, { id: 737, name: "\u5BD2\u7A7A\u30EA\u30B5\u30A4\u30BF\u30EB", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=7; fullPowerCharge+=1; at:cardUsed[mental] { if:stance!=fullPower { fullPowerCharge+=2 }; limit:3 }", limit: 1, effects: "" }, { id: 738, name: "\u5BD2\u7A7A\u30EA\u30B5\u30A4\u30BF\u30EB+", availableCustomizations: "26,103", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=7; fullPowerCharge+=2; at:cardUsed[mental] { if:stance!=fullPower { fullPowerCharge+=2 }; limit:3 }", limit: 1, effects: "" }, { id: 739, name: "\u3069\u304D\u3069\u304D\u306F\u305D\u306E\u307E\u307E", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 124, forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=2; if:concentration>=10 { concentrationMultiplier=5; score+=40 }", limit: "", effects: "" }, { id: 740, name: "\u3069\u304D\u3069\u304D\u306F\u305D\u306E\u307E\u307E+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 124, forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=2; if:concentration>=10 { concentrationMultiplier=5.5; score+=67 }", limit: "", effects: "" }, { id: 741, name: "\u5FC3\u304C\u8DF3\u306D\u308B\u307E\u307E\u306B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 125, forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "goodImpressionTurns+=1; at:turn { drawCard(2); limit:1 }; if:stamina>=maxStamina*0.5 { goodImpressionTurns+=1 }; if:stamina>=maxStamina*0.8 { goodImpressionTurns+=2 }; if:stamina==maxStamina { score+=goodImpressionTurns*2.2 }", limit: "", effects: "" }, { id: 742, name: "\u5FC3\u304C\u8DF3\u306D\u308B\u307E\u307E\u306B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 125, forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "goodImpressionTurns+=1; at:turn { drawCard(2); limit:1 }; if:stamina>=maxStamina*0.5 { goodImpressionTurns+=1 }; if:stamina>=maxStamina*0.8 { goodImpressionTurns+=2 }; if:stamina==maxStamina { score+=goodImpressionTurns*3.2 }", limit: "", effects: "" }, { id: 743, name: "\u3075\u308C\u3093\u3069\u3081\u3082\u308A\u30FC\u305A", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "at:turn { score+=goodImpressionTurns*1.2; delay:3; limit:1 }; if:motivation>=3 { at:endOfTurn { goodImpressionTurns+=2; limit:4 } }", limit: 1, effects: "" }, { id: 744, name: "\u3075\u308C\u3093\u3069\u3081\u3082\u308A\u30FC\u305A+", availableCustomizations: "20,34", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=2", actions: "at:turn { score+=goodImpressionTurns*1.2; delay:3; limit:1 }; if:motivation>=3 { at:endOfTurn { goodImpressionTurns+=3; limit:4 } }", limit: 1, effects: "" }, { id: 745, name: "\u30CF\u30C3\u30B9\u30EB", availableCustomizations: "", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 71, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); fullPowerCharge+=2; target:active { g.score+=4 }", limit: 1, effects: "" }, { id: 746, name: "\u30CF\u30C3\u30B9\u30EB+", availableCustomizations: "40,73,43", rarity: "R", type: "active", plan: "anomaly", unlockPlv: 71, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); fullPowerCharge+=3; target:active { g.score+=6 }", limit: 1, effects: "" }, { id: 747, name: "\u30A4\u30E1\u30C1\u30A7\u30F3", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 72, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=1", actions: "goodImpressionTurns+=4; setGoodImpressionTurnsEffectBuff(0.1)", limit: 1, effects: "" }, { id: 748, name: "\u30A4\u30E1\u30C1\u30A7\u30F3+", availableCustomizations: "34,71,37", rarity: "R", type: "mental", plan: "logic", unlockPlv: 72, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "motivation-=1", actions: "goodImpressionTurns+=5; setGoodImpressionTurnsEffectBuff(0.1)", limit: 1, effects: "" }, { id: 749, name: "\u30A2\u30F3\u30C0\u30F3\u30C6", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 73, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "setStance(strength); score+=10; setEnthusiasmBuff(0.1)", limit: 1, effects: "" }, { id: 750, name: "\u30A2\u30F3\u30C0\u30F3\u30C6+", availableCustomizations: "35,40,37", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 73, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "setStance(strength); score+=18; setEnthusiasmBuff(0.1)", limit: 1, effects: "" }, { id: 751, name: "\u7CBE\u795E\u7D71\u4E00", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 74, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=6; concentration+=5; at:afterStartOfTurn { drawCard; limit:3 }; if:goodConditionTurns<=15 { setConcentrationEffectBuff(0.2,3) }", limit: "", effects: "" }, { id: 752, name: "\u7CBE\u795E\u7D71\u4E00+", availableCustomizations: "3,54,59", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 74, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=8; concentration+=6; at:afterStartOfTurn { drawCard; limit:3 }; if:goodConditionTurns<=15 { setConcentrationEffectBuff(0.2,3) }", limit: "", effects: "" }, { id: 753, name: "\u672C\u9818\u767A\u63EE", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 75, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "holdSelectedUpto[deck | discarded](2); target:held { g.scoreTimes+=1; g.cost-=6 }; at:turn { fullPowerCharge+=5; limit:1 }", limit: 1, effects: "" }, { id: 754, name: "\u672C\u9818\u767A\u63EE+", availableCustomizations: "35,44", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 75, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "holdSelectedUpto[deck | discarded](2); target:held { g.scoreTimes+=1; g.cost-=2 }; at:turn { fullPowerCharge+=5; limit:1 }", limit: 1, effects: "" }, { id: 755, name: "\u79C1\u3092\u8D85\u3048\u3066", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 126, forceInitialHand: true, conditions: "", cost: "cost-=6", actions: "cardUsesRemaining+=1; at:cardUsed { if:cardHasEffect(genki) { effectCounter+=1; if:effectCounter%2==1 { addCardToTopOfDeck(757) } } }", limit: 1, effects: "" }, { id: 756, name: "\u79C1\u3092\u8D85\u3048\u3066+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 126, forceInitialHand: true, conditions: "", cost: "cost-=3", actions: "cardUsesRemaining+=1; at:cardUsed { if:cardHasEffect(genki) { effectCounter+=1; if:effectCounter%2==1 { addCardToTopOfDeck(757) } } }", limit: 1, effects: "" }, { id: 757, name: "\u79C1\u3092\u8D85\u3048\u3066(\u7FD4)", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: "", forceInitialHand: false, conditions: "if:genki>=15", cost: "stamina-=1", actions: "score+=genki*0.8; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 758, name: "\u79C1\u3092\u8D85\u3048\u3066(\u7FD4)+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: "", forceInitialHand: false, conditions: "if:genki>=15", cost: "stamina-=1", actions: "score+=genki*1.3; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 759, name: "\u304A\u59C9\u3061\u3083\u3093\u3001\u53C2\u6226\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=6", cost: "stamina-=3", actions: "genki+=3; score+=genki; at:turn { drawCard(2); limit:1 }", limit: 1, effects: "" }, { id: 760, name: "\u304A\u59C9\u3061\u3083\u3093\u3001\u53C2\u6226\uFF01+", availableCustomizations: "83,30", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=6", cost: "stamina-=2", actions: "genki+=3; score+=genki*1.3; at:turn { drawCard(2); limit:1 }", limit: 1, effects: "" }, { id: 761, name: "\u811A\u5149", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 75, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=7; cardUsesRemaining+=1; at:afterCardUsed { if:goodConditionTurns<=20 { effectCounter+=1; if:effectCounter>=2 & effectCounter%2==0 { concentrationMultiplier=3; score+=5; goodConditionTurns-=3 } } }", limit: 1, effects: "" }, { id: 762, name: "\u811A\u5149+", availableCustomizations: "31,17", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 75, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "goodConditionTurns-=2", actions: "concentration+=7; cardUsesRemaining+=1; at:afterCardUsed { if:goodConditionTurns<=20 { effectCounter+=1; if:effectCounter>=2 & effectCounter%2==0 { concentrationMultiplier=4; score+=6; goodConditionTurns-=3 } } }", limit: 1, effects: "" }, { id: 763, name: "\u72C2\u3044\u54B2\u3051\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 127, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=1; cardUsesRemaining+=1; if:countCards[removed]>=4 { score+=5 }", limit: "", effects: "" }, { id: 764, name: "\u72C2\u3044\u54B2\u3051\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 127, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=3; cardUsesRemaining+=1; if:countCards[removed]>=4 { score+=5 }", limit: "", effects: "" }, { id: 765, name: "\u865C\u306B\u306A\u3042\u308C", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 128, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=3; setGoodImpressionTurnsEffectBuff(0.5,5)", limit: 1, effects: "" }, { id: 766, name: "\u865C\u306B\u306A\u3042\u308C+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 128, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodImpressionTurns+=5; setGoodImpressionTurnsEffectBuff(0.5,5)", limit: 1, effects: "" }, { id: 767, name: "\u8E0A\u308A\u72C2\u3048\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 129, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=2; genki+=2; fullPowerCharge+=2", limit: "", effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=2; g.genki+=1 } } }" }, { id: 768, name: "\u8E0A\u308A\u72C2\u3048\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 129, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "setStance(strength); score+=2; score+=2; genki+=2; fullPowerCharge+=2", limit: "", effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:this { g.score+=2; g.genki+=1 } } }" }, { id: 769, name: "\u305B\u30FC\u306E\u3067\u3071\u304F\u3063\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); fullPowerCharge+=3; score+=3; score+=3; if:isPreservation { drawCard }", limit: 1, effects: "" }, { id: 770, name: "\u305B\u30FC\u306E\u3067\u3071\u304F\u3063\uFF01+", availableCustomizations: "103,40", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); fullPowerCharge+=3; score+=3; score+=3; if:isPreservation { drawCard(2) }", limit: 1, effects: "" }, { id: 771, name: "\u305B\u306E\u3073\u306E\u9B54\u6CD5", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 76, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "at:startOfTurn { genki+=2; limit:3 }; at:turn { score+=genki*1.8; delay:3; limit:1 }", limit: 1, effects: "" }, { id: 772, name: "\u305B\u306E\u3073\u306E\u9B54\u6CD5+", availableCustomizations: "27,22", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 76, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "at:startOfTurn { genki+=2; limit:3 }; at:turn { score+=genki*2.8; delay:3; limit:1 }", limit: 1, effects: "" }, { id: 773, name: "\u30A8\u30F3\u30BF\u30FC\u30C6\u30A4\u30CA\u30FC", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 77, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "setStance(strength); score+=10", limit: "", effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%3==2 { target:this { g.scoreTimes+=1; g.typedCost+=1 } }; limit:2 }" }, { id: 774, name: "\u30A8\u30F3\u30BF\u30FC\u30C6\u30A4\u30CA\u30FC+", availableCustomizations: "27,2", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 77, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "setStance(strength); score+=12", limit: "", effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%3==2 { target:this { g.scoreTimes+=1; g.typedCost+=1 } }; limit:3 }" }, { id: 775, name: "\u8A71\u984C\u6CB8\u9A30", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 78, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "perfectConditionTurns-=1", actions: "goodConditionTurnsMultiplier=2; score+=37; setScoreBuff(0.3,1)", limit: 1, effects: "" }, { id: 776, name: "\u8A71\u984C\u6CB8\u9A30+", availableCustomizations: "104,37", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 78, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "perfectConditionTurns-=1", actions: "goodConditionTurnsMultiplier=2.5; score+=50; setScoreBuff(0.3,1)", limit: 1, effects: "" }, { id: 777, name: "\u3073\u3057\u3063\u3068\u30AD\u30E1\u9854", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 79, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:goodImpressionTurns>=10", cost: "cost-=5", actions: "setGoodImpressionTurnsEffectBuff(2,3); at:goodImpressionTurnsIncreased { if:isDirectEffect { score+=goodImpressionTurns }; ttl:3 }", limit: 1, effects: "" }, { id: 778, name: "\u3073\u3057\u3063\u3068\u30AD\u30E1\u9854+", availableCustomizations: "105,106", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 79, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "@usable if:goodImpressionTurns>=10", cost: "cost-=5", actions: "setGoodImpressionTurnsEffectBuff(2,4); @trigger at:goodImpressionTurnsIncreased { if:isDirectEffect { score+=goodImpressionTurns }; ttl:4 }", limit: 1, effects: "" }, { id: 779, name: "\u7FBD\u3070\u305F\u3051\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 80, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=5", cost: "fullPowerCharge-=4", actions: "holdThisCard; at:turn { fullPowerCharge+=4; limit:1 }; if:isFullPower { score+=5; score+=5; score+=5; score+=5 }", limit: "", effects: "at:afterCardUsed { if:usedCardBaseId==779 & isFullPower { target:this { g.score+=4 } } }" }, { id: 780, name: "\u7FBD\u3070\u305F\u3051\uFF01+", availableCustomizations: "28,35", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 80, upgraded: true, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=5", cost: "fullPowerCharge-=4", actions: "holdThisCard; at:turn { fullPowerCharge+=4; limit:1 }; if:isFullPower { score+=5; score+=5; score+=5; score+=5; score+=5 }", limit: "", effects: "at:afterCardUsed { if:usedCardBaseId==779 & isFullPower { target:this { g.score+=6 } } }" }, { id: 781, name: "\u79C1\u304C\u6700\u5F37\uFF01", availableCustomizations: "", rarity: "L", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:motivation>=6", cost: "motivation-=5", actions: "goodImpressionTurns+=12; score+=goodImpressionTurns*2.5; cardUsesRemaining+=1; at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 782, name: "\u8F1D\u304D\u306E\u5230\u9054\u70B9", availableCustomizations: "", rarity: "L", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:turnsRemaining==1", cost: "cost-=1", actions: "score+=consumedGenki*4", limit: 1, effects: "at:cardMovedToHand { if:movedCardId==782 { genki+=5 } }" }, { id: 783, name: "\u9BAE\u3084\u304B\u306B\u54B2\u304F\u82B1", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 130, forceInitialHand: true, conditions: "", cost: "cost-=5", actions: "at:cardUsed { if:cardHasEffect(goodImpressionTurns) & goodImpressionTurns>=6 { effectCounter+=1; if:effectCounter%3==2 { setGoodImpressionTurnsTimesBuff(1,3) } } }", limit: 1, effects: "" }, { id: 784, name: "\u9BAE\u3084\u304B\u306B\u54B2\u304F\u82B1+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 130, forceInitialHand: true, conditions: "", cost: "cost-=2", actions: "at:cardUsed { if:cardHasEffect(goodImpressionTurns) & goodImpressionTurns>=6 { effectCounter+=1; if:effectCounter%3==2 { setGoodImpressionTurnsTimesBuff(1,3) } } }", limit: 1, effects: "" }, { id: 785, name: "\u821E\u53F0\u306E\u652F\u914D\u8005", availableCustomizations: "", rarity: "L", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "concentration-=5", actions: "score+=goodConditionTurns*4.5; if:concentration>=6 { goodConditionTurnsMultiplier=3; score+=40 }; if:concentration>=10 { at:turn { drawCard(2); limit:1 } }", limit: "", effects: "" }, { id: 786, name: "\u5929\u4E0B\u7121\u53CC", availableCustomizations: "", rarity: "L", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "perfectConditionTurns+=7; cardUsesRemaining+=1; at:afterCardUsed { if:perfectConditionTurns>=5 { concentrationMultiplier=2; score+=2; perfectConditionTurns-=1 } }", limit: 1, effects: "" }, { id: 787, name: "\u30B0\u30E9\u30F3\u30C9\u30D5\u30A3\u30CA\u30FC\u30EC", availableCustomizations: "", rarity: "L", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "score+=50+cumulativeFullPowerCharge*3.5; fixedStamina-=maxStamina", limit: 1, effects: "at:cardMovedToHeld { if:movedCardId==787 { target:held { g.scoreTimes+=1 } } }" }, { id: 788, name: "\u30C8\u30C3\u30D7\u30AF\u30AA\u30EA\u30C6\u30A3", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=6", actions: "cardUsesRemaining+=1; at:afterCardUsed[active] { if:isStrength { setEnthusiasmBonus(3) } }; at:afterCardUsed[mental] { if:isPreservation { setEnthusiasmBuff(0.5) } }", limit: 1, effects: "" }, { id: 789, name: "\u5148\u751F\u3067\u30A2\u30A4\u30C9\u30EB\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 131, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 790, name: "\u5148\u751F\u3067\u30A2\u30A4\u30C9\u30EB\uFF01+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 131, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 791, name: "\u3042\u3055\u308A\u63A8\u3057\u2661", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 132, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 792, name: "\u3042\u3055\u308A\u63A8\u3057\u2661+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 132, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 793, name: "NEO\u30A4\u30F3\u30D1\u30AF\u30C8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 133, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 794, name: "NEO\u30A4\u30F3\u30D1\u30AF\u30C8+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 133, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; doubleCardEffectCards+=1; useSelectedFree[deck | discarded]", limit: 1, effects: "" }, { id: 795, name: "\u3044\u3064\u304B\u3042\u306A\u305F\u306E\u96A3\u3067", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 134, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "goodConditionTurns+=7; at:turn { score+=goodConditionTurns; limit:1 }", limit: "", effects: "" }, { id: 796, name: "\u3044\u3064\u304B\u3042\u306A\u305F\u306E\u96A3\u3067+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 134, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "goodConditionTurns+=7; at:turn { score+=goodConditionTurns; limit:1 }", limit: "", effects: "" }, { id: 797, name: "\u3044\u3064\u3082\u3042\u306A\u305F\u306E\u96A3\u3067", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 135, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "setStance(strength); score+=7; genki+=7", limit: "", effects: "at:stanceChanged { if:isDirectEffect & isPreservation { target:this { g.score+=7 } }; limit:2 }" }, { id: 798, name: "\u3044\u3064\u3082\u3042\u306A\u305F\u306E\u96A3\u3067+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 135, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=7; genki+=7", limit: "", effects: "at:stanceChanged { if:isDirectEffect & isPreservation { target:this { g.score+=7 } }; limit:2 }" }, { id: 799, name: "\u3042\u305F\u3057\u304C\u3044\u308B\u3088", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 136, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "genki+=2; motivation+=1; at:startOfTurn { if:genki==0 { genki+=consumedGenki*0.8 }; limit:3 }", limit: 1, effects: "" }, { id: 800, name: "\u3042\u305F\u3057\u304C\u3044\u308B\u3088+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 136, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=2; motivation+=3; at:startOfTurn { if:genki==0 { genki+=consumedGenki*0.8 }; limit:3 }", limit: 1, effects: "" }, { id: 801, name: "\u982D\u4E0A\u306B\u6CE8\u610F\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "cost-=4", actions: "motivation+=3; setMotivationBuff(0.5,3); costReduction+=1", limit: 1, effects: "" }, { id: 802, name: "\u982D\u4E0A\u306B\u6CE8\u610F\uFF01+", availableCustomizations: "21,39", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "cost-=1", actions: "motivation+=3; setMotivationBuff(0.5,3); costReduction+=1", limit: 1, effects: "" }, { id: 803, name: "\u6559\u3048\u3066\u3042\u3052\u308B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 137, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength); score+=6; setEnthusiasmBonus(2,2); at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 804, name: "\u6559\u3048\u3066\u3042\u3052\u308B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 137, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "setStance(strength); score+=6; setEnthusiasmBonus(2,2); at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 805, name: "\u30AC\u30BF\u30B4\u30C8\u3059\u3084\u3059\u3084", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=1", actions: "setStance(strength); score+=11; exchangeHand", limit: 1, effects: "" }, { id: 806, name: "\u30AC\u30BF\u30B4\u30C8\u3059\u3084\u3059\u3084+", availableCustomizations: "40,42", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:isPreservation", cost: "cost-=1", actions: "setStance(strength); score+=16; exchangeHand", limit: 1, effects: "" }, { id: 807, name: "\u30AF\u30FC\u30EB\u3059\u304E\u308B\u30A2\u30A4\u30C9\u30EB", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 138, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "motivation+=4; moveRandomToTopOfDeck[baseId(809)]; doubleCostTurns+=1", limit: 1, effects: "at:afterCardUsed { if:usedCardBaseId == 809 & effectCounter==0 & countCards[baseId(807) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(807)] }; limit:2 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 808, name: "\u30AF\u30FC\u30EB\u3059\u304E\u308B\u30A2\u30A4\u30C9\u30EB+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 138, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "motivation+=5; moveRandomToTopOfDeck[baseId(809)]; doubleCostTurns+=1", limit: 1, effects: "at:afterCardUsed { if:usedCardBaseId == 809 & effectCounter==0 & countCards[baseId(807) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(807)] }; limit:2 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 809, name: "\u71C3\u3048\u76DB\u308B\u9752\u3044\u708E", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 138, forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "genki+=15; motivation+=5; at:endOfTurn { if:turnsRemaining==1 { score+=genki*1.5 }; limit:1 }", limit: 1, effects: "" }, { id: 810, name: "\u71C3\u3048\u76DB\u308B\u9752\u3044\u708E+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 138, forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "genki+=27; motivation+=5; at:endOfTurn { if:turnsRemaining==1 { score+=genki*1.5 }; limit:1 }", limit: 1, effects: "" }, { id: 811, name: "\u304A\u59C9\u3055\u3093\u306E\u611F\u899A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 139, forceInitialHand: false, conditions: "if:goodConditionTurns>=4", cost: "stamina-=6", actions: "goodConditionTurns+=4; fixedStamina+=maxStamina*0.1", limit: 1, effects: "at:afterCardUsed { if:countCards[baseId(813) & hand]>=1 & effectCounter==0 & countCards[baseId(811) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(811)] }; limit:4 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 812, name: "\u304A\u59C9\u3055\u3093\u306E\u611F\u899A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 139, forceInitialHand: false, conditions: "if:goodConditionTurns>=4", cost: "stamina-=6", actions: "goodConditionTurns+=6; fixedStamina+=maxStamina*0.1", limit: 1, effects: "at:afterCardUsed { if:countCards[baseId(813) & hand]>=1 & effectCounter==0 & countCards[baseId(811) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(811)] }; limit:4 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 813, name: "\u81EA\u7136\u4F53\u306E\u9B45\u529B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 139, forceInitialHand: false, conditions: "if:goodConditionTurns>=12", cost: "concentration-=5", actions: "fixedStamina+=maxStamina*0.1; score+=stamina*8; score+=2+cardsUsed*9", limit: 1, effects: "" }, { id: 814, name: "\u81EA\u7136\u4F53\u306E\u9B45\u529B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 139, forceInitialHand: false, conditions: "if:goodConditionTurns>=12", cost: "concentration-=5", actions: "fixedStamina+=maxStamina*0.2; score+=stamina*10; score+=2+cardsUsed*14", limit: 1, effects: "" }, { id: 815, name: "\u308F\u305F\u3057\u3060\u3051\u306E\u601D\u3044\u51FA", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 140, forceInitialHand: true, conditions: "", cost: "stamina-=5", actions: "drawCard; setConcentrationEffectBuff(0.05); at:endOfTurn { concentration+=2; ttl:2 }", limit: 1, effects: "at:everyTurn { if:countCards[baseId(815) & removed] > 0 { effectCounter+=1; if:effectCounter%2==1 & stamina>=maxStamina*0.8 { useRandomCardFree[baseId(815)]; limit:2 } } }" }, { id: 816, name: "\u308F\u305F\u3057\u3060\u3051\u306E\u601D\u3044\u51FA+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 140, forceInitialHand: true, conditions: "", cost: "stamina-=3", actions: "drawCard; setConcentrationEffectBuff(0.05); at:endOfTurn { concentration+=2; ttl:2 }", limit: 1, effects: "at:everyTurn { if:countCards[baseId(815) & removed] > 0 { effectCounter+=1; if:effectCounter%2==1 & stamina>=maxStamina*0.8 { useRandomCardFree[baseId(815)]; limit:2 } } }" }, { id: 817, name: "\u3042\u306A\u305F\u304C\u304F\u308C\u305F\u5922", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 140, forceInitialHand: true, conditions: "", cost: "stamina-=7", actions: "fixedStamina+=maxStamina*0.2; setConcentrationAdditionBuff(2,2); if:stamina>=maxStamina*0.8 { cardUsesRemaining+=1 }", limit: "", effects: "" }, { id: 818, name: "\u3042\u306A\u305F\u304C\u304F\u308C\u305F\u5922+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 140, forceInitialHand: true, conditions: "", cost: "stamina-=4", actions: "fixedStamina+=maxStamina*0.2; setConcentrationAdditionBuff(2,2); if:stamina>=maxStamina*0.8 { cardUsesRemaining+=1 }", limit: "", effects: "" }, { id: 819, name: "\u308F\u305F\u3057\u3092\u652F\u3048\u308B\u8A00\u8449", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 141, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "motivation+=3; setMotivationAdditionBuff(1,2); at:turn { drawCard; limit:1 } ", limit: 1, effects: "at:motivationIncreased { if:countCards[baseId(819) & removed] > 0 & isDirectEffect { effectCounter+=1; if:effectCounter%5==4  { useRandomCardFree[baseId(819)]; limit:2 } } }" }, { id: 820, name: "\u308F\u305F\u3057\u3092\u652F\u3048\u308B\u8A00\u8449+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 141, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "motivation+=3; setMotivationAdditionBuff(1,2); at:turn { drawCard; limit:1 } ", limit: 1, effects: "at:motivationIncreased { if:countCards[baseId(819) & removed] > 0 & isDirectEffect { effectCounter+=1; if:effectCounter%5==4  { useRandomCardFree[baseId(819)]; limit:2 } } }" }, { id: 821, name: "\u7406\u60F3\u306B\u624B\u304C\u5C4A\u304F\u65E5\u307E\u3067", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 141, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "motivation+=1; cardUsesRemaining+=1", limit: "", effects: "at:cardMovedToHand { if:movedCardBaseId==821 { motivation+=3 } }" }, { id: 822, name: "\u7406\u60F3\u306B\u624B\u304C\u5C4A\u304F\u65E5\u307E\u3067+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 141, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "motivation+=3; cardUsesRemaining+=1", limit: "", effects: "at:cardMovedToHand { if:movedCardBaseId==821 { motivation+=3 } }" }, { id: 823, name: "\u304A\u624B\u4E26\u307F\u62DD\u898B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "motivation+=4; exchangeHand; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 824, name: "\u304A\u624B\u4E26\u307F\u62DD\u898B+", availableCustomizations: "29,21", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "motivation+=5; exchangeHand; drawCard; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 825, name: "\u596A\u308F\u308C\u308B\u5FC3", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 142, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "at:afterCardUsed[active] { effectCounter+=1; if:effectCounter%2==1 { score+=goodConditionTurns*1.5; limit:3 } }", limit: 1, effects: "" }, { id: 826, name: "\u596A\u308F\u308C\u308B\u5FC3+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 142, forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "at:afterCardUsed[active] { effectCounter+=1; if:effectCounter%2==1 { score+=goodConditionTurns*2; limit:3 } }", limit: 1, effects: "" }, { id: 827, name: "\u7518\u304F\u6EB6\u3051\u308B\u5FC3", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 143, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(strength); drawCard; at:afterCardUsed[active] { if:stance==strength2 { setStance(preservation); limit:3 } }", limit: 1, effects: "" }, { id: 828, name: "\u7518\u304F\u6EB6\u3051\u308B\u5FC3+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 143, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "setStance(strength); drawCard; at:afterCardUsed[active] { if:stance==strength2 { setStance(preservation2); limit:3 } }", limit: 1, effects: "" }, { id: 829, name: "\u9AD8\u307F\u3078\u7FBD\u3070\u305F\u304F\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 123, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "fullPowerCharge+=5; cardUsesRemaining+=1; at:startOfTurn { if:isFullPower { useSelected[hand | deck | discarded | held] }; limit:1 }", limit: 1, effects: "" }, { id: 830, name: "\u821E\u53F0\u3067\u8F1D\u304F\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 115, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "concentration+=4; useRandomFree[hand & SR]; cardUsesRemaining+=1; drawCard", limit: 1, effects: "" }, { id: 831, name: "\u7B11\u9854\u3092\u751F\u307F\u51FA\u3059\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 110, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=10; cardUsesRemaining+=1; addCardToDeck(832); addCardToDeck(832); addCardToDeck(832); addCardToDeck(832); addCardToDeck(832); at:turn { moveRandomToHand[baseId(606) & (deck | discarded)]; limit:1 }", limit: 1, effects: "" }, { id: 832, name: "\u5FAE\u71B1\u30CE\u30B9\u30BF\u30EB\u30B8\u30FC\u2661", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 110, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=2; setGoodImpressionTurnsEffectBuff(0.2,3); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 833, name: "\u5FAE\u71B1\u30CE\u30B9\u30BF\u30EB\u30B8\u30FC\u2661+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 110, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=4; setGoodImpressionTurnsEffectBuff(0.2,4); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 834, name: "\u661F\u3005\u3092\u898B\u4E0B\u308D\u3059\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 137, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "genki+=4; setEnthusiasmBuff(0.3); cardUsesRemaining+=1; at:startOfTurn { if:!isPreservation { setStance(leisure) }; limit:3 }", limit: 1, effects: "" }, { id: 835, name: "\u7686\u306B\u611B\u3055\u308C\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 114, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "goodConditionTurns+=6; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 836, name: "\u5947\u8DE1\u3092\u8D77\u3053\u3057\u305F\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 102, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "at:beforeCardUsed { if:usedCardBaseId==576 { nullifyCostCards+=1 }; limit:5 }; cardUsesRemaining+=1; target:effect(strength) { g.score+=11 }", limit: 1, effects: "" }, { id: 837, name: "\u80CC\u4E2D\u3092\u62BC\u3059\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 97, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "setConcentrationBuff(0.1); cardUsesRemaining+=1; at:turn { concentration+=4; limit:1 }", limit: 1, effects: "" }, { id: 838, name: "\u52C7\u6C17\u3092\u5C4A\u3051\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 120, forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=5", actions: "score+=20+cumulativeFullPowerCharge*6.5; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 839, name: "\u5F31\u6C17\u3058\u3083\u3044\u3089\u308C\u306A\u3044\uFF01", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 144, forceInitialHand: false, conditions: "", cost: "cost-=8", actions: "cardUsesRemaining+=1; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { fullPowerCharge+=9; limit:2 } }", limit: 1, effects: "" }, { id: 840, name: "\u5F31\u6C17\u3058\u3083\u3044\u3089\u308C\u306A\u3044\uFF01+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 144, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "cardUsesRemaining+=1; at:beforeStartOfTurn { if:prevStance==fullPower & stance==none { fullPowerCharge+=10; limit:2 } }", limit: 1, effects: "" }, { id: 841, name: "\u3042\u3064\u3042\u3064\u306F\u3075\u306F\u3075", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "fullPowerCharge+=1; at:endOfTurn { if:isFullPower { score+=3+cumulativeFullPowerCharge*1.5; limit:4 } };", limit: 1, effects: "" }, { id: 842, name: "\u3042\u3064\u3042\u3064\u306F\u3075\u306F\u3075+", availableCustomizations: "29,103", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "fullPowerCharge+=1; at:endOfTurn { if:isFullPower { score+=6+cumulativeFullPowerCharge*2; limit:4 } };", limit: 1, effects: "" }, { id: 843, name: "\u4F1D\u8AAC\u3078\u306E\u6311\u6226", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 145, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=4; if:perfectConditionTurns>=1 { goodConditionTurnsMultiplier=3; score+=10 }", limit: 1, effects: "" }, { id: 844, name: "\u4F1D\u8AAC\u3078\u306E\u6311\u6226+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 145, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=8; if:perfectConditionTurns>=1 { goodConditionTurnsMultiplier=3; score+=20 }", limit: 1, effects: "" }, { id: 845, name: "\u3053\u308C\u305E\u30A2\u30A4\u30C9\u30EB\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 146, forceInitialHand: false, conditions: "", cost: "cost-=11", actions: "goodImpressionTurns+=2; if:goodImpressionTurns>=10 { at:turn { score+=goodImpressionTurns*3; limit:1 } }; if:goodImpressionTurns>=15 { at:turn { score+=goodImpressionTurns*5; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 846, name: "\u3053\u308C\u305E\u30A2\u30A4\u30C9\u30EB\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 146, forceInitialHand: false, conditions: "", cost: "cost-=10", actions: "goodImpressionTurns+=2; if:goodImpressionTurns>=10 { at:turn { score+=goodImpressionTurns*4.4; limit:1 } }; if:goodImpressionTurns>=15 { at:turn { score+=goodImpressionTurns*5.5; limit:1; delay:1 } }", limit: 1, effects: "" }, { id: 847, name: "\u661F\u3092\u6563\u3089\u305B", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 147, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "holdSelected[deck | discarded]; at:cardUsed { if:isFullPower { fullPowerCharge+=5 }; limit:2 }", limit: 1, effects: "" }, { id: 848, name: "\u661F\u3092\u6563\u3089\u305B+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 147, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "holdSelected[deck | discarded]; at:cardUsed { if:isFullPower { fullPowerCharge+=5 }; limit:3 }", limit: 1, effects: "" }, { id: 849, name: "\u624B\u3092\u4F38\u3070\u3057\u305F\u5148\u306B", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 148, forceInitialHand: false, conditions: "if:preservationTimes>=2", cost: "cost-=6", actions: "enthusiasmMultiplier=2; score+=1; genki+=1; if:isStrength { setStance(preservation) }", limit: 1, effects: "at:endOfTurn { if:countCards[baseId(849) & removed] > 0 & turnsRemaining<=3 { useRandomCardFree[baseId(849)]; limit:3 } }" }, { id: 850, name: "\u624B\u3092\u4F38\u3070\u3057\u305F\u5148\u306B+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 148, forceInitialHand: false, conditions: "if:preservationTimes>=2", cost: "cost-=5", actions: "enthusiasmMultiplier=2; score+=1; genki+=1; if:isStrength { setStance(preservation2) }", limit: 1, effects: "at:endOfTurn { if:countCards[baseId(849) & removed] > 0 & turnsRemaining<=3 { useRandomCardFree[baseId(849)]; limit:3 } }" }, { id: 851, name: "\u308F\u305F\u3057\u306E\u4EBA\u751F\u3092\u8FBC\u3081\u3066", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 148, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "setStance(strength); target:849 { g.genki+=5; g.scoreTimes+=2 }; at:turn { setStance(preservation); limit:1 }", limit: 1, effects: "" }, { id: 852, name: "\u308F\u305F\u3057\u306E\u4EBA\u751F\u3092\u8FBC\u3081\u3066+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 148, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); target:849 { g.genki+=5; g.scoreTimes+=2 }; at:turn { setStance(preservation); limit:1 }", limit: 1, effects: "" }, { id: 853, name: "\u5148\u9663\u3092\u5207\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 130, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "goodImpressionTurns+=5; setGoodImpressionTurnsEffectBuff(0.3); cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 854, name: "\u8A3C\u660E\u3057\u7D9A\u3051\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 136, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "cardUsesRemaining+=1; at:motivationIncreased { if:isDirectEffect { moveRandomToTopOfDeck[mental & (deck | discarded)] }; ttl:5 }", limit: 1, effects: "" }, { id: 855, name: "\u3074\u3089\u3063\u266A", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=10", cost: "cost-=6", actions: "score+=1; score+=1; score+=1; fullPowerCharge+=3", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%3==2 { target:this { g.score+=10 } }; limit:3 }" }, { id: 856, name: "\u3074\u3089\u3063\u266A+", availableCustomizations: "29,103", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=10", cost: "cost-=4", actions: "score+=1; score+=1; score+=1; fullPowerCharge+=5", limit: 1, effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%3==2 { target:this { g.score+=10 } }; limit:3 }" }, { id: 857, name: "\u590F\u98A8\u306E\u901A\u308A\u9053", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 149, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "if:isStrength { at:turn { setStance(strength2); limit:1 } }; setStance(preservation); genki+=5; at:stanceValueChanged { if:isDirectEffect & stance==strength2 { nullifyCostCards+=1 }; limit:2 }", limit: 1, effects: "" }, { id: 858, name: "\u590F\u98A8\u306E\u901A\u308A\u9053+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 149, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "if:isStrength { at:turn { setStance(strength2); limit:1 } }; setStance(preservation); genki+=13; at:stanceValueChanged { if:isDirectEffect & stance==strength2 { nullifyCostCards+=1 }; limit:2 }", limit: 1, effects: "" }, { id: 859, name: "\u898B\u60DA\u308C\u308B\u6A2A\u9854", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 150, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "concentration+=1; setConcentrationEffectBuff(0.15,3); if:concentration>=3 { concentrationMultiplier=1.5; score+=13 }", limit: 1, effects: "" }, { id: 860, name: "\u898B\u60DA\u308C\u308B\u6A2A\u9854+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 150, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "concentration+=3; setConcentrationEffectBuff(0.15,3); if:concentration>=3 { concentrationMultiplier=1.5; score+=13 }", limit: 1, effects: "" }, { id: 861, name: "\u6CE2\u9593\u306B\u63FA\u308C\u308B\u5149", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 151, forceInitialHand: false, conditions: "", cost: "concentration-=2", actions: "concentrationMultiplier=2; score+=3; setConcentrationAdditionBuff(1,4); at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 862, name: "\u6CE2\u9593\u306B\u63FA\u308C\u308B\u5149+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 151, forceInitialHand: false, conditions: "", cost: "concentration-=1", actions: "concentrationMultiplier=2; score+=7; setConcentrationAdditionBuff(1,4); at:turn { drawCard(2); limit:1 }", limit: "", effects: "" }, { id: 863, name: "\u306E\u3093\u3073\u308A\u3059\u3084\u3059\u3084", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "at:endOfTurn { concentration+=2; ttl:3 }", limit: 1, effects: "" }, { id: 864, name: "\u306E\u3093\u3073\u308A\u3059\u3084\u3059\u3084+", availableCustomizations: "83,18,14", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "at:endOfTurn { concentration+=2; ttl:3 }", limit: 1, effects: "" }, { id: 865, name: "\u53D7\u3051\u6B62\u3081\u308B\u5149", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 152, forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "cost-=9", actions: "score+=100", limit: 1, effects: "" }, { id: 866, name: "\u53D7\u3051\u6B62\u3081\u308B\u5149+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 152, forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "cost-=9", actions: "score+=140", limit: 1, effects: "" }, { id: 867, name: "\u51FA\u767A\u9032\u884C\u3067\u3059\u308F\uFF5E\u266A", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 153, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "genki+=7; if:motivation>=6 { genki+=5 }; if:motivation>=9 { at:turn { drawCard(2); limit:1 } }", limit: 1, effects: "" }, { id: 868, name: "\u51FA\u767A\u9032\u884C\u3067\u3059\u308F\uFF5E\u266A+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 153, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "genki+=7; if:motivation>=6 { genki+=10 }; if:motivation>=9 { at:turn { drawCard(2); limit:1 } }", limit: 1, effects: "" }, { id: 869, name: "\u5FDC\u3048\u305F\u3044\u6C17\u6301\u3061", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 154, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=2; score+=10; concentration+=5", limit: 1, effects: "" }, { id: 870, name: "\u5FDC\u3048\u305F\u3044\u6C17\u6301\u3061+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 154, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentrationMultiplier=2; score+=20; concentration+=6", limit: 1, effects: "" }, { id: 871, name: "\u5149\u308A\u8F1D\u304F\u9053\u3057\u308B\u3079", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 155, forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=5", actions: "goodImpressionTurns+=3; motivation+=1; cardUsesRemaining+=1", limit: 1, effects: "at:startOfTurn { if:turnsRemaining==1 & countCards[baseId(871) & removed] > 0 { useRandomCardFree[baseId(871)]; limit:3 } }" }, { id: 872, name: "\u5149\u308A\u8F1D\u304F\u9053\u3057\u308B\u3079+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 155, forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=5", actions: "goodImpressionTurns+=4; motivation+=3; cardUsesRemaining+=1", limit: 1, effects: "at:startOfTurn { if:turnsRemaining==1 & countCards[baseId(871) & removed] > 0 { useRandomCardFree[baseId(871)]; limit:3 } }" }, { id: 873, name: "\u5148\u3078\u9032\u3080\u59FF", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 155, forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=4", actions: "goodImpressionTurns+=consumedGoodImpressionTurns*0.85; score+=goodImpressionTurns*1.8", limit: "", effects: "" }, { id: 874, name: "\u5148\u3078\u9032\u3080\u59FF+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 155, forceInitialHand: false, conditions: "", cost: "goodImpressionTurns-=4", actions: "goodImpressionTurns+=consumedGoodImpressionTurns*0.85; score+=goodImpressionTurns*2.7", limit: "", effects: "" }, { id: 875, name: "\u597D\u304D\u3092\u96C6\u3081\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 106, forceInitialHand: true, conditions: "", cost: "cost-=0", actions: "concentration+=7; cardUsesRemaining+=1; moveSelectedToTopOfDeck[deck | discarded](2)", limit: 1, effects: "" }, { id: 876, name: "\u5922\u3092\u8FFD\u3044\u7D9A\u3051\u308B\u4E00\u756A\u661F", availableCustomizations: "", rarity: "L", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "produce", pIdolId: 126, forceInitialHand: false, conditions: "", cost: "cost-=0", actions: "at:staminaDecreased { if:parentPhase==processCost { genki+=5 }; limit:4 }; cardUsesRemaining+=1", limit: 1, effects: "" }, { id: 877, name: "\u308F\u305F\u3057\u306F\u3001\u98A8\uFF01", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 156, forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "setFullPowerEffectBuff(0.1,1); score+=2+cumulativeFullPowerCharge*1.2; score+=2+cumulativeFullPowerCharge*1.2", limit: "", effects: "" }, { id: 878, name: "\u308F\u305F\u3057\u306F\u3001\u98A8\uFF01+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 156, forceInitialHand: false, conditions: "", cost: "fullPowerCharge-=2", actions: "setFullPowerEffectBuff(0.1,1); score+=5+cumulativeFullPowerCharge*1.5; score+=5+cumulativeFullPowerCharge*1.5", limit: "", effects: "" }, { id: 879, name: "\u3046\u305F\u305F\u306D\u30EC\u30DD\u30FC\u30C8", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "fullPowerCharge+=4; if:stance!=fullPower { fullPowerCharge+=2 }; if:isFullPower { target:hand { g.score+=7 } }", limit: 1, effects: "" }, { id: 880, name: "\u3046\u305F\u305F\u306D\u30EC\u30DD\u30FC\u30C8+", availableCustomizations: "29,43", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "fullPowerCharge+=5; if:stance!=fullPower { fullPowerCharge+=2 }; if:isFullPower { target:hand { g.score+=7 } }", limit: 1, effects: "" }, { id: 881, name: "\u60AA\u622F\u30CF\u30FC\u30C8\u30B8\u30E3\u30C3\u30AF", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 157, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=4; score+=4", limit: 1, effects: "at:cardUsed { if:cardHasEffect(fullPowerCharge) { effectCounter+=1; if:effectCounter%2==1 { target:this { g.score+=8 }; limit:3 } } }" }, { id: 882, name: "\u60AA\u622F\u30CF\u30FC\u30C8\u30B8\u30E3\u30C3\u30AF+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 157, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=4; score+=4", limit: 1, effects: "at:cardUsed { if:cardHasEffect(fullPowerCharge) { effectCounter+=1; if:effectCounter%2==1 { target:this { g.score+=15 }; limit:3 } } }" }, { id: 883, name: "\u7121\u81EA\u899A\u30C1\u30E3\u30FC\u30E0", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 158, forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "cost-=2", actions: "goodConditionTurns+=10; addCardToTopOfDeck(23); at:turn { drawCard(2); cardUsesRemaining+=1; limit:1 }; at:turn { drawCard; limit:1; delay:1 }", limit: "", effects: "" }, { id: 884, name: "\u7121\u81EA\u899A\u30C1\u30E3\u30FC\u30E0+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 158, forceInitialHand: false, conditions: "if:goodConditionTurns>=8", cost: "cost-=0", actions: "goodConditionTurns+=10; addCardToTopOfDeck(23); at:turn { drawCard(2); cardUsesRemaining+=1; limit:1 }; at:turn { drawCard(2); limit:1; delay:1 }", limit: "", effects: "" }, { id: 885, name: "\u306A\u308A\u304D\u308A\u30C7\u30D3\u30EB", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "concentration-=2", actions: "setGoodConditionTurnsAdditionBuff(2,2); at:turn { goodConditionTurns+=3; limit:1 }", limit: 1, effects: "" }, { id: 886, name: "\u306A\u308A\u304D\u308A\u30C7\u30D3\u30EB+", availableCustomizations: "32,28", rarity: "SSR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "support", pIdolId: "", forceInitialHand: false, conditions: "if:turnsElapsed>=2", cost: "concentration-=2", actions: "setGoodConditionTurnsAdditionBuff(2,3); at:turn { goodConditionTurns+=4; limit:1 }", limit: 1, effects: "" }, { id: 887, name: "\u30B9\u30A4\u30FC\u30C8\u30C8\u30E9\u30C3\u30D7\u2661", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 159, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "nullifyDebuff+=1; cardUsesRemaining+=1; at:startOfTurn { if:genki>=40 { moveRandomToTopOfDeck[active & (deck | discarded)]; fixedStamina+=2 } }", limit: 1, effects: "" }, { id: 888, name: "\u30B9\u30A4\u30FC\u30C8\u30C8\u30E9\u30C3\u30D7\u2661+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 159, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "nullifyDebuff+=1; cardUsesRemaining+=1; at:startOfTurn { if:genki>=40 { moveRandomToTopOfDeck[active & (deck | discarded)]; fixedStamina+=2 } }", limit: 1, effects: "" }, { id: 889, name: "\u7AF6\u4E89\u539F\u7406", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 81, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "goodConditionTurns+=3; if:goodConditionTurns>=4 { concentration+=1 }; if:concentration<=9 { goodConditionTurns+=1 }", limit: 1, effects: "" }, { id: 890, name: "\u7AF6\u4E89\u539F\u7406+", availableCustomizations: "3,70,14", rarity: "R", type: "mental", plan: "sense", unlockPlv: 81, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "goodConditionTurns+=3; if:goodConditionTurns>=4 { concentration+=2 }; if:concentration<=9 { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 891, name: "\u5B89\u5B9A\u611F", availableCustomizations: "", rarity: "R", type: "mental", plan: "sense", unlockPlv: 82, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "concentration+=3; if:concentration>=5 { goodConditionTurns+=1 }; if:goodConditionTurns<=9 { concentration+=2 }", limit: 1, effects: "" }, { id: 892, name: "\u5B89\u5B9A\u611F+", availableCustomizations: "3,68,18", rarity: "R", type: "mental", plan: "sense", unlockPlv: 82, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "concentration+=3; if:concentration>=5 { goodConditionTurns+=2 }; if:goodConditionTurns<=9 { concentration+=3 }", limit: 1, effects: "" }, { id: 893, name: "\u518D\u59CB\u52D5", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 83, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; goodConditionTurns+=3; if:countCards[!removed & trouble]>=2 { goodConditionTurns+=1 }", limit: 1, effects: "" }, { id: 894, name: "\u518D\u59CB\u52D5+", availableCustomizations: "18,52,4", rarity: "SR", type: "active", plan: "sense", unlockPlv: 83, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=10; goodConditionTurns+=4; if:countCards[!removed & trouble]>=2 { goodConditionTurns+=2 }", limit: 1, effects: "" }, { id: 895, name: "\u885D\u52D5", availableCustomizations: "", rarity: "SR", type: "active", plan: "sense", unlockPlv: 84, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=10; concentration+=3; if:countCards[!removed & trouble]>=2 { concentration+=1 }", limit: 1, effects: "" }, { id: 896, name: "\u885D\u52D5+", availableCustomizations: "14,54,4", rarity: "SR", type: "active", plan: "sense", unlockPlv: 84, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "score+=10; concentration+=4; if:countCards[!removed & trouble]>=2 { concentration+=2 }", limit: 1, effects: "" }, { id: 897, name: "\u30E1\u30A4\u30AF\u30A2\u30C3\u30D7", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 85, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=3; goodImpressionTurns+=3; if:countCards[!removed & trouble]>=2 { goodImpressionTurns+=2 }", limit: 1, effects: "" }, { id: 898, name: "\u30E1\u30A4\u30AF\u30A2\u30C3\u30D7+", availableCustomizations: "22,71,7", rarity: "R", type: "mental", plan: "logic", unlockPlv: 85, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=3; goodImpressionTurns+=4; if:countCards[!removed & trouble]>=2 { goodImpressionTurns+=3 }", limit: 1, effects: "" }, { id: 899, name: "\u30ED\u30DE\u30F3\u30C1\u30C3\u30AF", availableCustomizations: "", rarity: "R", type: "mental", plan: "logic", unlockPlv: 86, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=3; motivation+=3; if:goodImpressionTurns<=8 { goodImpressionTurns+=2 }", limit: 1, effects: "" }, { id: 900, name: "\u30ED\u30DE\u30F3\u30C1\u30C3\u30AF+", availableCustomizations: "19,72,12", rarity: "R", type: "mental", plan: "logic", unlockPlv: 86, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "genki+=3; motivation+=4; if:goodImpressionTurns<=8 { goodImpressionTurns+=3 }", limit: 1, effects: "" }, { id: 901, name: "\u5929\u4F7F\u306E\u5FAE\u7B11\u307F", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 87, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=4; goodImpressionTurns+=4; if:countCards[!removed & trouble]>=2 { score+=goodImpressionTurns*0.7 }", limit: 1, effects: "" }, { id: 902, name: "\u5929\u4F7F\u306E\u5FAE\u7B11\u307F+", availableCustomizations: "22,55,7", rarity: "SR", type: "active", plan: "logic", unlockPlv: 87, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=6; goodImpressionTurns+=5; if:countCards[!removed & trouble]>=2 { score+=goodImpressionTurns }", limit: 1, effects: "" }, { id: 903, name: "\u3054\u304D\u3052\u3093\u30B9\u30AD\u30C3\u30D7", availableCustomizations: "", rarity: "SR", type: "active", plan: "logic", unlockPlv: 88, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=3", actions: "genki+=4; score+=genki*0.6; if:countCards[!removed & trouble]>=2 { fixedStamina+=4 }", limit: 1, effects: "" }, { id: 904, name: "\u3054\u304D\u3052\u3093\u30B9\u30AD\u30C3\u30D7+", availableCustomizations: "22,50,30", rarity: "SR", type: "active", plan: "logic", unlockPlv: 88, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "stamina-=2", actions: "genki+=4; score+=genki*0.8; if:countCards[!removed & trouble]>=2 { fixedStamina+=4 }", limit: 1, effects: "" }, { id: 905, name: "\u30E9\u30C3\u30B7\u30E5", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 89, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=3; score+=cumulativeFullPowerCharge", limit: 1, effects: "at:fullPowerChargeIncreased { if:isDirectEffect { target:this { g.score+=4 } } }" }, { id: 906, name: "\u30E9\u30C3\u30B7\u30E5+", availableCustomizations: "57,45,43", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 89, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=4; score+=cumulativeFullPowerCharge*1.5", limit: 1, effects: "at:fullPowerChargeIncreased { if:isDirectEffect { target:this { g.score+=6 } } }" }, { id: 907, name: "\u30D6\u30FC\u30B9\u30C8", availableCustomizations: "", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 90, upgraded: false, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "setStance(strength); fullPowerCharge+=2; score+=cumulativeFullPowerCharge", limit: 1, effects: "" }, { id: 908, name: "\u30D6\u30FC\u30B9\u30C8+", availableCustomizations: "57,61,37", rarity: "SR", type: "active", plan: "anomaly", unlockPlv: 90, upgraded: true, unique: false, sourceType: "produce", pIdolId: "", forceInitialHand: false, conditions: "", cost: "cost-=3", actions: "setStance(strength2); fullPowerCharge+=3; score+=cumulativeFullPowerCharge", limit: 1, effects: "" }, { id: 909, name: "\u7372\u7269\u306F\u3042\u306A\u305F", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 160, forceInitialHand: false, conditions: "if:concentration>=6", cost: "cost-=3", actions: "concentration+=4; cardUsesRemaining+=1; if:turnsRemaining<=5 { score+=5 }; if:turnsRemaining==1 { score+=10 }", limit: 1, effects: "" }, { id: 910, name: "\u7372\u7269\u306F\u3042\u306A\u305F+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 160, forceInitialHand: false, conditions: "if:concentration>=6", cost: "cost-=2", actions: "concentration+=6; cardUsesRemaining+=1; if:turnsRemaining<=5 { score+=5 }; if:turnsRemaining==1 { score+=10 }", limit: 1, effects: "" }, { id: 911, name: "\u7D50\u679C\u3068\u3057\u3066\u306E\u4ECA", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 161, forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=10", cost: "fullPowerCharge-=2", actions: "setStance(strength); fixedStamina+=4; at:endOfTurn { enthusiasmExtensionTurns+=1; limit:1 }", limit: 1, effects: "at:afterStartOfTurn { if:countCards[baseId(911) & removed] > 0 { useRandomCardFree[baseId(911)]; limit:1 } }" }, { id: 912, name: "\u7D50\u679C\u3068\u3057\u3066\u306E\u4ECA+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 161, forceInitialHand: false, conditions: "if:cumulativeFullPowerCharge>=10", cost: "fullPowerCharge-=2", actions: "setStance(strength); fixedStamina+=7; at:endOfTurn { enthusiasmExtensionTurns+=1; limit:1 }", limit: 1, effects: "at:afterStartOfTurn { if:countCards[baseId(911) & removed] > 0 { useRandomCardFree[baseId(911)]; limit:1 } }" }, { id: 913, name: "\u30D5\u30A1\u30F3\u304C\u671B\u3080\u3053\u3068", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 161, forceInitialHand: true, conditions: "", cost: "stamina-=7", actions: "setStance(preservation); at:stanceChanged { if:isDirectEffect & isStrength { fullPowerCharge+=2 } }", limit: 1, effects: "" }, { id: 914, name: "\u30D5\u30A1\u30F3\u304C\u671B\u3080\u3053\u3068+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 161, forceInitialHand: true, conditions: "", cost: "stamina-=4", actions: "setStance(preservation); at:stanceChanged { if:isDirectEffect & isStrength { fullPowerCharge+=2 } }", limit: 1, effects: "" }, { id: 915, name: "\u306A\u306B\u304B\u3092\u7D9A\u3051\u308B\u5C0A\u3055", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 162, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "fullPowerCharge+=1; cardUsesRemaining+=1", limit: 1, effects: "at:afterCardUsed { if:isFullPower & turnCardsUsed%2==0 & effectCounter==0 & countCards[baseId(915) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(915)] }; limit:3 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 916, name: "\u306A\u306B\u304B\u3092\u7D9A\u3051\u308B\u5C0A\u3055+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 162, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "fullPowerCharge+=2; cardUsesRemaining+=1", limit: 1, effects: "at:afterCardUsed { if:isFullPower & turnCardsUsed%2==0 & effectCounter==0 & countCards[baseId(915) & removed] > 0 { effectCounter+=1; useRandomCardFree[baseId(915)] }; limit:3 }; at:beforeStartOfTurn { effectCounter=0 }" }, { id: 917, name: "\u308F\u305A\u304B\u305A\u3064\u306E\u6B69\u307F", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 162, forceInitialHand: false, conditions: "", cost: "stamina-=8", actions: "moveHeldCardsToHand; cardUsesRemaining+=3", limit: 1, effects: "" }, { id: 918, name: "\u308F\u305A\u304B\u305A\u3064\u306E\u6B69\u307F+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "anomaly", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 162, forceInitialHand: false, conditions: "", cost: "stamina-=5", actions: "genki+=1; moveHeldCardsToHand; cardUsesRemaining+=3", limit: 1, effects: "" }, { id: 919, name: "\u3042\u308A\u306E\u307E\u307E\u306E\u308F\u305F\u3057", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 163, forceInitialHand: false, conditions: "", cost: "cost-=7", actions: "genki+=3; setGoodImpressionTurnsEffectBuff(0.5)", limit: 1, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect & countCards[baseId(919) & removed] > 0 { effectCounter+=1; if:effectCounter%3==2 & effectCounter(turn)==0 { effectCounter(turn)+=1; useRandomCardFree[baseId(919)]; limit:2 } } }; at:beforeStartOfTurn { effectCounter(turn)=0 }" }, { id: 920, name: "\u3042\u308A\u306E\u307E\u307E\u306E\u308F\u305F\u3057+", availableCustomizations: "", rarity: "SSR", type: "mental", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 163, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "genki+=4; setGoodImpressionTurnsEffectBuff(0.5)", limit: 1, effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect & countCards[baseId(919) & removed] > 0 { effectCounter+=1; if:effectCounter%3==2 & effectCounter(turn)==0 { effectCounter(turn)+=1; useRandomCardFree[baseId(919)]; limit:2 } } }; at:beforeStartOfTurn { effectCounter(turn)=0 }" }, { id: 921, name: "\u8A8D\u3081\u3066\u304F\u308C\u308B\u3072\u3068", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 163, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=3; if:countCards[removed]>=7 { goodImpressionTurns+=5 }; if:countCards[removed]>=11 { score+=goodImpressionTurns*1.7 }", limit: "", effects: "" }, { id: 922, name: "\u8A8D\u3081\u3066\u304F\u308C\u308B\u3072\u3068+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "logic", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 163, forceInitialHand: false, conditions: "", cost: "cost-=6", actions: "goodImpressionTurns+=3; if:countCards[removed]>=7 { goodImpressionTurns+=5 }; if:countCards[removed]>=11 { score+=goodImpressionTurns*2.8 }", limit: "", effects: "" }, { id: 923, name: "\u67D4\u3089\u304B\u306A\u5149\u306E\u4E2D\u3067", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 164, forceInitialHand: false, conditions: "if:concentration>=3", cost: "cost-=5", actions: "cardUsesRemaining+=1; at:endOfTurn { score+=2; score+=2; limit:1; delay:0 }; at:endOfTurn { score+=2; score+=2; score+=2; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 924, name: "\u67D4\u3089\u304B\u306A\u5149\u306E\u4E2D\u3067+", availableCustomizations: "", rarity: "SSR", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 164, forceInitialHand: false, conditions: "if:concentration>=3", cost: "cost-=4", actions: "cardUsesRemaining+=1; score+=2; at:endOfTurn { score+=2; score+=2; limit:1; delay:0 }; at:endOfTurn { score+=2; score+=2; score+=2; limit:1; delay:1 }", limit: 1, effects: "" }, { id: 925, name: "\u5FE0\u7FA9\u3092\u80F8\u306B", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 165, forceInitialHand: false, conditions: "", cost: "cost-=4", actions: "goodConditionTurns+=4; concentration+=1; perfectConditionTurns+=1", limit: 1, effects: "" }, { id: 926, name: "\u5FE0\u7FA9\u3092\u80F8\u306B+", availableCustomizations: "", rarity: "SR", type: "mental", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 165, forceInitialHand: false, conditions: "", cost: "cost-=1", actions: "goodConditionTurns+=4; concentration+=1; perfectConditionTurns+=1", limit: 1, effects: "" }, { id: 927, name: "\u4E00\u9014\u306A\u5F93\u8005", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: false, unique: true, sourceType: "pIdol", pIdolId: 166, forceInitialHand: false, conditions: "", cost: "cost-=5", actions: "score+=3; at:endOfTurn { score+=3; score+=3; limit:1; delay:0 }", limit: 1, effects: "" }, { id: 928, name: "\u4E00\u9014\u306A\u5F93\u8005+", availableCustomizations: "", rarity: "R", type: "active", plan: "sense", unlockPlv: 1, upgraded: true, unique: true, sourceType: "pIdol", pIdolId: 166, forceInitialHand: false, conditions: "", cost: "cost-=2", actions: "score+=3; at:endOfTurn { score+=3; score+=3; limit:1; delay:0 }", limit: 1, effects: "" }];

  // vendor/gakumas-data/data/skillCards.js
  skill_cards_default.forEach((skillCard) => {
    skillCard._type = "skillCard";
    skillCard.availableCustomizations = String(
      skillCard.availableCustomizations ?? ""
    ).split(",").filter((c) => c);
    skillCard.limit = skillCard.limit || null;
    skillCard.pIdolId = skillCard.pIdolId || null;
    skillCard.contestPower = getSkillCardContestPower(skillCard);
  });
  var parsed3 = lazyParse(skill_cards_default, (skillCard) => {
    skillCard.conditions = deserializeEffectSequence(skillCard.conditions);
    skillCard.cost = deserializeEffectSequence(skillCard.cost);
    skillCard.actions = deserializeEffectSequence(skillCard.actions);
    skillCard.effects = deserializeEffectSequence(skillCard.effects);
  });
  var SKILL_CARDS_BY_ID = skill_cards_default.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
  var SkillCards = class {
    static getAll() {
      return parsed3.all();
    }
    static getById(id) {
      return parsed3.one(SKILL_CARDS_BY_ID[id]);
    }
    static getFiltered({
      rarities,
      types,
      plans,
      unlockPlvs,
      sourceTypes,
      pIdolIds
    }) {
      return skill_cards_default.filter((skillCard) => {
        if (rarities && !rarities.includes(skillCard.rarity)) return false;
        if (types && !types.includes(skillCard.type)) return false;
        if (plans && !plans.includes(skillCard.plan)) return false;
        if (unlockPlvs && !unlockPlvs.includes(skillCard.unlockPlv)) return false;
        if (sourceTypes && !sourceTypes.includes(skillCard.sourceType))
          return false;
        if (pIdolIds && !pIdolIds.includes(skillCard.pIdolId)) return false;
        return true;
      }).map(parsed3.one);
    }
  };
  var skillCards_default = SkillCards;

  // vendor/gakumas-data/csv/stages.csv
  var stages_default = [{ id: 1, name: "\u30B7\u30FC\u30BA\u30F31 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 1, stage: 1, round: "", plan: "free", criteria: "0.4,0.27,0.33", turnCounts: "5,3,4", firstTurns: "0.5,0,0.5", effects: "at:startOfTurn { if:turnsElapsed==7 { score+=15; genki+=15 }; limit:1 }", linkTurnCounts: "" }, { id: 2, name: "\u30B7\u30FC\u30BA\u30F31 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 1, stage: 2, round: "", plan: "sense", criteria: "0.4,0.27,0.33", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:startOfTurn { goodConditionTurns+=3; setScoreBuff(0.5,4); limit:1 }", linkTurnCounts: "" }, { id: 3, name: "\u30B7\u30FC\u30BA\u30F31 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 1, stage: 3, round: "", plan: "logic", criteria: "0.4,0.27,0.33", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:goodImpressionTurnsIncreased { if:goodImpressionTurns>=10 { goodImpressionTurns+=4; score+=goodImpressionTurns*0.5 } }", linkTurnCounts: "" }, { id: 4, name: "\u30B7\u30FC\u30BA\u30F32 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 2, stage: 1, round: "", plan: "free", criteria: "0.33,0.4,0.27", turnCounts: "4,5,3", firstTurns: "0.5,0.5,0", effects: "at:startOfTurn { if:turnsElapsed==7 { score+=15; genki+=15 }; limit:1 }", linkTurnCounts: "" }, { id: 5, name: "\u30B7\u30FC\u30BA\u30F32 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 2, stage: 2, round: "", plan: "sense", criteria: "0.33,0.4,0.27", turnCounts: "4,5,3", firstTurns: "0.5,0.5,0", effects: "at:afterCardUsed { if:cardHasEffect(perfectConditionTurns) & goodConditionTurns>=4 { cardUsesRemaining+=1 } }", linkTurnCounts: "" }, { id: 6, name: "\u30B7\u30FC\u30BA\u30F32 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 2, stage: 3, round: "", plan: "logic", criteria: "0.33,0.4,0.27", turnCounts: "3,4,3", firstTurns: "0,1,0", effects: "at:cardUsed { if:cardsUsed%2==1 { score+=genki*0.5 } }", linkTurnCounts: "" }, { id: 7, name: "\u30B7\u30FC\u30BA\u30F33 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 3, stage: 1, round: "", plan: "sense", criteria: "0.27,0.33,0.4", turnCounts: "3,3,4", firstTurns: "0,0.5,0.5", effects: "at:startOfTurn { if:turnsElapsed==7 { concentration*=2 }; limit:1 }", linkTurnCounts: "" }, { id: 8, name: "\u30B7\u30FC\u30BA\u30F33 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 3, stage: 2, round: "", plan: "logic", criteria: "0.27,0.33,0.4", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:cardUsed[active] { score+=goodImpressionTurns*1.7; limit:3 }", linkTurnCounts: "" }, { id: 9, name: "\u30B7\u30FC\u30BA\u30F33 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 3, stage: 3, round: "", plan: "logic", criteria: "0.27,0.33,0.4", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { motivation+=4; limit:2 }", linkTurnCounts: "" }, { id: 10, name: "\u30B7\u30FC\u30BA\u30F34 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 4, stage: 1, round: "", plan: "sense", criteria: "0.15,0.45,0.4", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:cardUsed { if:cardHasEffect(halfCostTurns) { concentration+=3; goodConditionTurns+=3; fixedStamina-=3 }; limit:3 }", linkTurnCounts: "" }, { id: 11, name: "\u30B7\u30FC\u30BA\u30F34 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 4, stage: 2, round: "", plan: "sense", criteria: "0.15,0.45,0.4", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:afterCardUsed { if:cardHasEffect(perfectConditionTurns) & goodConditionTurns>=4 { cardUsesRemaining+=1 } }", linkTurnCounts: "" }, { id: 12, name: "\u30B7\u30FC\u30BA\u30F34 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 4, stage: 3, round: "", plan: "logic", criteria: "0.15,0.45,0.4", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:cardUsed[active] { motivation+=3; limit:4 }", linkTurnCounts: "" }, { id: 13, name: "\u30B7\u30FC\u30BA\u30F35 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 5, stage: 1, round: "", plan: "sense", criteria: "0.35,0.3,0.35", turnCounts: "4,3,3", firstTurns: "0.5,0,0.5", effects: "at:cardUsed { if:cardHasEffect(halfCostTurns) { concentration+=3; goodConditionTurns+=3; fixedStamina-=3 }; limit:3 }", linkTurnCounts: "" }, { id: 14, name: "\u30B7\u30FC\u30BA\u30F35 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 5, stage: 2, round: "", plan: "sense", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.5,0,0.5", effects: "at:startOfTurn { concentration+=5; doubleCostTurns+=1; limit:2 }", linkTurnCounts: "" }, { id: 15, name: "\u30B7\u30FC\u30BA\u30F35 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 5, stage: 3, round: "", plan: "logic", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.5,0,0.5", effects: "at:startOfTurn { goodImpressionTurns+=4; nullifyGenkiTurns+=1; limit:6 }", linkTurnCounts: "" }, { id: 16, name: "\u30B7\u30FC\u30BA\u30F36 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 6, stage: 1, round: "", plan: "free", criteria: "0.1,0.45,0.45", turnCounts: "1,4,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:halfCostTurns>=1 { setScoreBuff(0.15) } }", linkTurnCounts: "" }, { id: 17, name: "\u30B7\u30FC\u30BA\u30F36 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 6, stage: 2, round: "", plan: "sense", criteria: "0.1,0.45,0.45", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=6; concentration+=6 }; limit:1 }", linkTurnCounts: "" }, { id: 18, name: "\u30B7\u30FC\u30BA\u30F36 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 6, stage: 3, round: "", plan: "logic", criteria: "0.1,0.45,0.45", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 19, name: "\u30B7\u30FC\u30BA\u30F37 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 7, stage: 1, round: "", plan: "free", criteria: "0.15,0.5,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsRemaining<=4 { cardUsesRemaining+=1; costIncrease+=1 }; limit:4 }", linkTurnCounts: "" }, { id: 20, name: "\u30B7\u30FC\u30BA\u30F37 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 7, stage: 2, round: "", plan: "sense", criteria: "0.15,0.5,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==10 { setScoreBuff(0.5,2); goodConditionTurns+=2 }; limit:1 }", linkTurnCounts: "" }, { id: 21, name: "\u30B7\u30FC\u30BA\u30F37 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 7, stage: 3, round: "", plan: "logic", criteria: "0.15,0.5,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 22, name: "\u30B7\u30FC\u30BA\u30F38 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 8, stage: 1, round: "", plan: "free", criteria: "0.15,0.4,0.45", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:cardUsed { if:turnCardsUsed%2==1 { setScoreBuff(0.3,5) }; limit:3 }", linkTurnCounts: "" }, { id: 23, name: "\u30B7\u30FC\u30BA\u30F38 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 8, stage: 2, round: "", plan: "sense", criteria: "0.15,0.4,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:startOfTurn { concentration+=2; limit:4 }", linkTurnCounts: "" }, { id: 24, name: "\u30B7\u30FC\u30BA\u30F38 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 8, stage: 3, round: "", plan: "logic", criteria: "0.15,0.4,0.45", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { motivation+=6; doubleCostTurns+=1; limit:2 }", linkTurnCounts: "" }, { id: 25, name: "\u30B7\u30FC\u30BA\u30F39 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 9, stage: 1, round: "", plan: "free", criteria: "0.44,0.33,0.33", turnCounts: "5,3,4", firstTurns: "0.85,0.15,0", effects: "at:cardUsed { if:cardHasEffect(halfCostTurns) { setScoreBuff(0.3,6) }; limit:3 }", linkTurnCounts: "" }, { id: 26, name: "\u30B7\u30FC\u30BA\u30F39 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 9, stage: 2, round: "", plan: "logic", criteria: "0.44,0.33,0.33", turnCounts: "5,3,4", firstTurns: "0.85,0.15,0", effects: "at:startOfTurn { goodImpressionTurns+=6; genki+=5; limit:1 }", linkTurnCounts: "" }, { id: 27, name: "\u30B7\u30FC\u30BA\u30F39 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 9, stage: 3, round: "", plan: "logic", criteria: "0.44,0.33,0.33", turnCounts: "3,3,2", firstTurns: "0.82,0.18,0", effects: "at:endOfTurn { if:goodImpressionTurns>=8 { motivation+=5 }; limit:3 }", linkTurnCounts: "" }, { id: 28, name: "\u30B7\u30FC\u30BA\u30F310 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 10, stage: 1, round: "", plan: "free", criteria: "0.5,0.4,0.1", turnCounts: "5,3,2", firstTurns: "1,0,0", effects: "at:everyTurn { if:turnsElapsed%3==2 & stamina>=maxStamina*0.5 { setScoreBuff(0.7,4) }; limit:3 }", linkTurnCounts: "" }, { id: 29, name: "\u30B7\u30FC\u30BA\u30F310 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 10, stage: 2, round: "", plan: "sense", criteria: "0.5,0.4,0.1", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:cardUsed[mental] { perfectConditionTurns+=2; fixedStamina+=3; doubleCostTurns+=1 }", linkTurnCounts: "" }, { id: 30, name: "\u30B7\u30FC\u30BA\u30F310 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 10, stage: 3, round: "", plan: "logic", criteria: "0.5,0.4,0.1", turnCounts: "4,3,1", firstTurns: "1,0,0", effects: "at:endOfTurn { if:goodImpressionTurns>=8 { motivation+=5 }; limit:3 }", linkTurnCounts: "" }, { id: 31, name: "\u30B7\u30FC\u30BA\u30F311 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 11, stage: 1, round: "", plan: "free", criteria: "0.15,0.35,0.5", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==1 { setScoreBuff(0.7,8); poorConditionTurns+=8 }; limit:1 }", linkTurnCounts: "" }, { id: 32, name: "\u30B7\u30FC\u30BA\u30F311 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 11, stage: 2, round: "", plan: "sense", criteria: "0.15,0.35,0.5", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { goodConditionTurns+=9; limit:1 }", linkTurnCounts: "" }, { id: 33, name: "\u30B7\u30FC\u30BA\u30F311 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 11, stage: 3, round: "", plan: "logic", criteria: "0.15,0.35,0.5", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 34, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "A", round: 1, plan: "sense", criteria: "0.15,0.35,0.5", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { goodConditionTurns+=9; limit:1 }", linkTurnCounts: "" }, { id: 35, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "B", round: 1, plan: "sense", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { concentration+=5; doubleCostTurns+=1; limit:2 }", linkTurnCounts: "" }, { id: 36, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "C", round: 1, plan: "sense", criteria: "0.1,0.45,0.45", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=6; concentration+=6 }; limit:1 }", linkTurnCounts: "" }, { id: 37, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "D", round: 1, plan: "logic", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { goodImpressionTurns+=4; nullifyGenkiTurns+=1; limit:6 }", linkTurnCounts: "" }, { id: 38, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "E", round: 1, plan: "logic", criteria: "0.1,0.45,0.45", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 39, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "A", round: 2, plan: "sense", criteria: "0.15,0.35,0.5", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { goodConditionTurns+=9; limit:1 }; at:startOfTurn { if:turnsElapsed==4 & concentration>=5 { perfectConditionTurns+=6 }; limit:1 }", linkTurnCounts: "" }, { id: 40, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "B", round: 2, plan: "sense", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { concentration+=5; doubleCostTurns+=1; limit:2 }; at:startOfTurn { if:turnsElapsed==3 & goodConditionTurns>=2 { fixedStamina+=6 }; limit:1 }", linkTurnCounts: "" }, { id: 41, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "C", round: 2, plan: "sense", criteria: "0.1,0.45,0.45", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=6; concentration+=6 }; limit:1 }; at:startOfTurn { if:turnsElapsed==5 & concentration>=11 { cardUsesRemaining+=2 }; limit:1 }", linkTurnCounts: "" }, { id: 42, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "D", round: 2, plan: "logic", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { goodImpressionTurns+=4; nullifyGenkiTurns+=1; limit:6 }; at:startOfTurn { if:turnsElapsed==1 & goodImpressionTurns>=7 { turnsRemaining+=1 }; limit:1 }", linkTurnCounts: "" }, { id: 43, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "E", round: 2, plan: "logic", criteria: "0.1,0.45,0.45", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }; at:startOfTurn { if:turnsElapsed==5 & motivation>=9 { motivationMultiplier=2; genki+=7 }; limit:1 }", linkTurnCounts: "" }, { id: 44, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "A", round: 3, plan: "sense", criteria: "0.15,0.35,0.5", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { goodConditionTurns+=9; limit:1 }; at:startOfTurn { if:turnsElapsed==4 & concentration>=5 { perfectConditionTurns+=6 }; limit:1 }; at:startOfTurn { if:turnsElapsed==9 { score+=7; score+=7 }; limit:1 }", linkTurnCounts: "" }, { id: 45, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "B", round: 3, plan: "sense", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { concentration+=5; doubleCostTurns+=1; limit:2 }; at:startOfTurn { if:turnsElapsed==3 & goodConditionTurns>=2 { fixedStamina+=6 }; limit:1 }; at:startOfTurn { if:turnsElapsed==7 & halfCostTurns>=1 { concentration*=1.7 }; limit:1 }", linkTurnCounts: "" }, { id: 46, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "C", round: 3, plan: "sense", criteria: "0.1,0.45,0.45", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=6; concentration+=6 }; limit:1 }; at:startOfTurn { if:turnsElapsed==5 & concentration>=11 { cardUsesRemaining+=2 }; limit:1 }; at:startOfTurn { if:turnsElapsed==9 & concentration>=14 { score+=5+2*cardsUsed }; limit:1 }", linkTurnCounts: "" }, { id: 47, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "D", round: 3, plan: "logic", criteria: "0.35,0.3,0.35", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { goodImpressionTurns+=4; nullifyGenkiTurns+=1; limit:6 }; at:startOfTurn { if:turnsElapsed==1 & goodImpressionTurns>=7 { turnsRemaining+=1 }; limit:1 }; at:startOfTurn { if:turnsElapsed==9 & goodImpressionTurns>=34 { setScoreBuff(0.9,4) }; limit:1 }", linkTurnCounts: "" }, { id: 48, name: "#\u30A2\u30CB\u30E1\u30A4\u30C8\u3092\u76DB\u308A\u4E0A\u3052\u968A", type: "event", preview: false, season: 1, stage: "E", round: 3, plan: "logic", criteria: "0.1,0.45,0.45", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { motivation+=4; goodImpressionTurns+=4; limit:1 }; at:startOfTurn { if:turnsElapsed==5 & motivation>=9 { motivationMultiplier=2; genki+=7 }; limit:1 }; at:startOfTurn { if:turnsElapsed==9 & stamina>=maxStamina*0.5 { score+=genki*1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 49, name: "\u30B7\u30FC\u30BA\u30F312 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 12, stage: 1, round: "", plan: "free", criteria: "0.3,0.2,0.5", turnCounts: "2,1,3", firstTurns: "0,0,1", effects: "at:cardUsed { if:turnCardsUsed%2==1 { score+=2; score+=2 } }", linkTurnCounts: "" }, { id: 50, name: "\u30B7\u30FC\u30BA\u30F312 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 12, stage: 2, round: "", plan: "free", criteria: "0.3,0.2,0.5", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { setScoreBuff(0.8,3); limit:1 }", linkTurnCounts: "" }, { id: 51, name: "\u30B7\u30FC\u30BA\u30F312 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 12, stage: 3, round: "", plan: "sense", criteria: "0.3,0.2,0.5", turnCounts: "3,2,5", firstTurns: "0,0,1", effects: "at:startOfTurn { goodConditionTurns+=9; limit:1 }", linkTurnCounts: "" }, { id: 52, name: "\u30B7\u30FC\u30BA\u30F313 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 13, stage: 1, round: "", plan: "free", criteria: "0.385,0.385,0.33", turnCounts: "3,2,1", firstTurns: "1,0,0", effects: "at:cardUsed { if:turnCardsUsed%2==1 { score+=2; score+=2 } }", linkTurnCounts: "" }, { id: 53, name: "\u30B7\u30FC\u30BA\u30F313 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 13, stage: 2, round: "", plan: "sense", criteria: "0.385,0.385,0.33", turnCounts: "5,4,3", firstTurns: "0.889,0.111,0", effects: "at:startOfTurn { if:turnsElapsed==9 { goodConditionTurns+=10; perfectConditionTurns+=3 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 54, name: "\u30B7\u30FC\u30BA\u30F313 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 13, stage: 3, round: "", plan: "logic", criteria: "0.385,0.385,0.33", turnCounts: "5,4,3", firstTurns: "0.889,0.111,0", effects: "at:afterCardUsed { if:cardHasEffect(motivation) { genki+=1; goodImpressionTurns+=3 }; limit:3 }", linkTurnCounts: "" }, { id: 55, name: "\u30B7\u30FC\u30BA\u30F314 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 14, stage: 1, round: "", plan: "free", criteria: "0.15,0.45,0.4", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:cardUsed { setScoreBuff(0.3,3); limit:5 }", linkTurnCounts: "" }, { id: 56, name: "\u30B7\u30FC\u30BA\u30F314 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 14, stage: 2, round: "", plan: "sense", criteria: "0.15,0.45,0.4", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==9 { goodConditionTurns+=10; perfectConditionTurns+=3 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 57, name: "\u30B7\u30FC\u30BA\u30F314 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 14, stage: 3, round: "", plan: "logic", criteria: "0.15,0.45,0.4", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { if:motivation>=12 { score+=motivation*5 }; limit:3 }", linkTurnCounts: "" }, { id: 58, name: "\u30B7\u30FC\u30BA\u30F315 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 15, stage: 1, round: "", plan: "free", criteria: "0.35,0.2,0.45", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:cardUsed[active] { setScoreBuff(0.1) }", linkTurnCounts: "" }, { id: 59, name: "\u30B7\u30FC\u30BA\u30F315 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 15, stage: 2, round: "", plan: "sense", criteria: "0.35,0.2,0.45", turnCounts: "4,2,6", firstTurns: "0,0,1", effects: "at:startOfTurn { concentration+=5; goodConditionTurns+=4; costReduction+=1; limit:1 }", linkTurnCounts: "" }, { id: 60, name: "\u30B7\u30FC\u30BA\u30F315 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 15, stage: 3, round: "", plan: "logic", criteria: "0.35,0.2,0.45", turnCounts: "4,2,6", firstTurns: "0,0,1", effects: "at:startOfTurn { goodImpressionTurns+=10; limit:1 }", linkTurnCounts: "" }, { id: 61, name: "\u30B7\u30FC\u30BA\u30F316 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 16, stage: 1, round: "", plan: "free", criteria: "0.25,0.45,0.3", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:startOfTurn { setScoreBuff(0.7,4); limit:1 }", linkTurnCounts: "" }, { id: 62, name: "\u30B7\u30FC\u30BA\u30F316 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 16, stage: 2, round: "", plan: "sense", criteria: "0.25,0.45,0.3", turnCounts: "3,6,3", firstTurns: "0,1,0", effects: "at:endOfTurn { if:turnsRemaining<=2 { concentrationMultiplier=1.5; score+=2 }; limit:2 }", linkTurnCounts: "" }, { id: 63, name: "\u30B7\u30FC\u30BA\u30F316 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 16, stage: 3, round: "", plan: "logic", criteria: "0.25,0.45,0.3", turnCounts: "3,6,3", firstTurns: "0,1,0", effects: "at:afterCardUsed { if:cardHasEffect(genki) { genki+=1; goodImpressionTurns+=3 }; limit:3 }", linkTurnCounts: "" }, { id: 64, name: "\u30B7\u30FC\u30BA\u30F317 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 17, stage: 1, round: "", plan: "free", criteria: "0.33,0.33,0.44", turnCounts: "3,4,5", firstTurns: "0.11,0,0.89", effects: "at:startOfTurn { setScoreBuff(1.2,5); doubleCostTurns+=5; limit:1 }", linkTurnCounts: "" }, { id: 65, name: "\u30B7\u30FC\u30BA\u30F317 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 17, stage: 2, round: "", plan: "logic", criteria: "0.33,0.33,0.44", turnCounts: "3,4,5", firstTurns: "0.11,0,0.89", effects: "at:endOfTurn { if:stamina>=maxStamina*0.5 { genki+=7; fixedStamina-=2 }; limit:5 }", linkTurnCounts: "" }, { id: 66, name: "\u30B7\u30FC\u30BA\u30F317 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 17, stage: 3, round: "", plan: "logic", criteria: "0.33,0.33,0.44", turnCounts: "3,3,4", firstTurns: "0.125,0,0.875", effects: "at:endOfTurn { if:turnsRemaining<=1 { score+=goodImpressionTurns*5 }; limit:1 }; at:startOfTurn { if:turnsElapsed==6 { goodImpressionTurns*=1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 67, name: "\u30B7\u30FC\u30BA\u30F318 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 18, stage: 1, round: "", plan: "free", criteria: "0.33,0.275,0.495", turnCounts: "3,3,6", firstTurns: "0,0,1", effects: "at:startOfTurn { setScoreBuff(1.2,5); doubleCostTurns+=5; limit:1 }", linkTurnCounts: "" }, { id: 68, name: "\u30B7\u30FC\u30BA\u30F318 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 18, stage: 2, round: "", plan: "sense", criteria: "0.33,0.275,0.495", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { concentration+=12; goodConditionTurns+=3; doubleCostTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 69, name: "\u30B7\u30FC\u30BA\u30F318 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 18, stage: 3, round: "", plan: "logic", criteria: "0.33,0.275,0.495", turnCounts: "3,3,6", firstTurns: "0,0,1", effects: "at:startOfTurn { motivation+=15; noActiveTurns+=4; limit:1 }", linkTurnCounts: "" }, { id: 70, name: "\u30B7\u30FC\u30BA\u30F319 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 19, stage: 1, round: "", plan: "free", criteria: "0.33,0.385,0.385", turnCounts: "2,3,3", firstTurns: "0,0.82,0.18", effects: "at:startOfTurn { setScoreBuff(0.5,3); limit:3 }", linkTurnCounts: "" }, { id: 71, name: "\u30B7\u30FC\u30BA\u30F319 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 19, stage: 2, round: "", plan: "sense", criteria: "0.33,0.385,0.385", turnCounts: "3,4,3", firstTurns: "0,0.89,0.11", effects: "at:cardUsed { if:cardHasEffect(halfCostTurns) { concentration+=3; goodConditionTurns+=3; fixedStamina-=3 }; limit:3 }", linkTurnCounts: "" }, { id: 72, name: "\u30B7\u30FC\u30BA\u30F319 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 19, stage: 3, round: "", plan: "logic", criteria: "0.33,0.385,0.385", turnCounts: "3,5,4", firstTurns: "0,0.89,0.11", effects: "at:startOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1 }; at:buffCostConsumed { if:goodImpressionTurns>=10 { goodImpressionTurns+=3; score+=goodImpressionTurns*2.5 } }", linkTurnCounts: "" }, { id: 73, name: "\u30B7\u30FC\u30BA\u30F320 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 20, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:startOfTurn { doubleCostTurns+=1; concentration+=5; limit:2 }", linkTurnCounts: "" }, { id: 74, name: "\u30B7\u30FC\u30BA\u30F320 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 20, stage: 2, round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "5,2,3", firstTurns: "1,0,0", effects: "at:stanceChanged { if:isDirectEffect & isStrength { halfCostTurns+=1; costReduction+=1; setScoreBuff(0.1) }; limit:3 }", linkTurnCounts: "" }, { id: 75, name: "\u30B7\u30FC\u30BA\u30F320 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 20, stage: 3, round: "", plan: "free", criteria: "0.45,0.2,0.35", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:turnsRemaining<=2 { at:cardUsed[active] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 }; drawCard }; limit:2 }", linkTurnCounts: "" }, { id: 76, name: "\u30B7\u30FC\u30BA\u30F321 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 21, stage: 1, round: "", plan: "sense", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==4 { concentration+=2; goodConditionTurns+=7 }; limit:1 }", linkTurnCounts: "" }, { id: 77, name: "\u30B7\u30FC\u30BA\u30F321 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 21, stage: 2, round: "", plan: "logic", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:afterCardUsed { if:cardHasEffect(genki) { genki+=1; goodImpressionTurns+=3 }; limit:3 }", linkTurnCounts: "" }, { id: 78, name: "\u30B7\u30FC\u30BA\u30F321 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 21, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.45,0.35", turnCounts: "2,5,3", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isDirectEffect & isStrength { halfCostTurns+=1; costReduction+=1; setScoreBuff(0.1) }; limit:3 }", linkTurnCounts: "" }, { id: 79, name: "\u30B7\u30FC\u30BA\u30F322 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 22, stage: 1, round: "", plan: "sense", criteria: "0.25,0.25,0.5", turnCounts: "3,2,5", firstTurns: "0,0,1", effects: "at:startOfTurn { if:goodConditionTurns>=6 { goodConditionTurns+=6; concentration+=6 }; limit:1 }", linkTurnCounts: "" }, { id: 80, name: "\u30B7\u30FC\u30BA\u30F322 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 22, stage: 2, round: "", plan: "logic", criteria: "0.25,0.25,0.5", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==6 { goodImpressionTurns*=1.5 }; limit:1 }; at:goodImpressionTurnsIncreased { if:goodImpressionTurnsDelta>=6 { goodImpressionTurns+=4 } }", linkTurnCounts: "" }, { id: 81, name: "\u30B7\u30FC\u30BA\u30F322 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 22, stage: 3, round: "", plan: "anomaly", criteria: "0.25,0.25,0.5", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { if:isFullPower { score+=2+cumulativeFullPowerCharge*4 }; limit:3 }", linkTurnCounts: "" }, { id: 82, name: "\u30B7\u30FC\u30BA\u30F323 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 23, stage: 1, round: "", plan: "sense", criteria: "0.33,0.33,0.33", turnCounts: "4,4,4", firstTurns: "0.67,0.33,0", effects: "at:cardUsed { if:turnCardsUsed%2==1 { concentration+=2; goodConditionTurns+=1 } }", linkTurnCounts: "" }, { id: 83, name: "\u30B7\u30FC\u30BA\u30F323 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 23, stage: 2, round: "", plan: "logic", criteria: "0.33,0.33,0.33", turnCounts: "4,3,3", firstTurns: "0.85,0.15,0", effects: "at:startOfTurn { motivation+=10; at:turn { if:turnsElapsed>=1 { poorConditionTurns+=99 }; limit:1 }; limit:1 }", linkTurnCounts: "" }, { id: 84, name: "\u30B7\u30FC\u30BA\u30F323 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 23, stage: 3, round: "", plan: "anomaly", criteria: "0.33,0.33,0.33", turnCounts: "3,3,2", firstTurns: "0.8,0.2,0", effects: "at:afterCardUsed { if:cardHasEffect(strength) & stanceChangedTimes>=3 { score+=4; score+=4 } }", linkTurnCounts: "" }, { id: 85, name: "\u30B7\u30FC\u30BA\u30F324 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 24, stage: 1, round: "", plan: "sense", criteria: "0.45,0.25,0.3", turnCounts: "6,3,3", firstTurns: "1,0,0", effects: "at:endOfTurn { if:turnsRemaining<=3 { score+=4; score+=4 }; limit:3 }", linkTurnCounts: "" }, { id: 86, name: "\u30B7\u30FC\u30BA\u30F324 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 24, stage: 2, round: "", plan: "logic", criteria: "0.45,0.25,0.3", turnCounts: "6,3,3", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardSourceType==pIdol { motivation+=8 }; limit:2 }", linkTurnCounts: "" }, { id: 87, name: "\u30B7\u30FC\u30BA\u30F324 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 24, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.25,0.3", turnCounts: "5,2,3", firstTurns: "1,0,0", effects: "at:endOfTurn { if:stance!=fullPower { setStance(preservation); fullPowerCharge+=3 }; limit:3 }", linkTurnCounts: "" }, { id: 88, name: "\u30B7\u30FC\u30BA\u30F325 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 25, stage: 1, round: "", plan: "sense", criteria: "0.2,0.4,0.4", turnCounts: "3,5,4", firstTurns: "0,0.88,0.12", effects: "at:endOfTurn { if:turnsRemaining<=3 { score+=4; score+=4 }; limit:3 }", linkTurnCounts: "" }, { id: 89, name: "\u30B7\u30FC\u30BA\u30F325 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 25, stage: 2, round: "", plan: "logic", criteria: "0.2,0.4,0.4", turnCounts: "3,5,4", firstTurns: "0,0.88,0.12", effects: "at:startOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1 }; at:cardUsed { if:cardSourceType==pIdol { goodImpressionTurns+=8 } }", linkTurnCounts: "" }, { id: 90, name: "\u30B7\u30FC\u30BA\u30F325 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 25, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.4,0.4", turnCounts: "2,3,3", firstTurns: "0,0.8,0.2", effects: "at:stanceChanged { if:isDirectEffect & isPreservation { target:mental { g.genki+=8 }; fixedStamina-=2 } limit:2 }", linkTurnCounts: "" }, { id: 91, name: "\u30B7\u30FC\u30BA\u30F326 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 26, stage: 1, round: "", plan: "sense", criteria: "0.3,0.4,0.3", turnCounts: "3,5,4", firstTurns: "0.11,0.89,0", effects: "at:cardUsed { if:cardHasEffect(concentration) & concentration>=8 { concentration+=5; goodConditionTurns+=1 }; limit:3 }", linkTurnCounts: "" }, { id: 92, name: "\u30B7\u30FC\u30BA\u30F326 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 26, stage: 2, round: "", plan: "logic", criteria: "0.3,0.4,0.3", turnCounts: "3,4,3", firstTurns: "0.125,0.875,0", effects: "at:startOfTurn { if:turnsElapsed==2 { motivation*=2.5 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 93, name: "\u30B7\u30FC\u30BA\u30F326 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 26, stage: 3, round: "", plan: "anomaly", criteria: "0.3,0.4,0.3", turnCounts: "3,4,3", firstTurns: "0.125,0.875,0", effects: "at:endOfTurn { if:stance!=fullPower { setStance(preservation); fullPowerCharge+=3 }; limit:3 }", linkTurnCounts: "" }, { id: 94, name: "\u30B7\u30FC\u30BA\u30F327 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 27, stage: 1, round: "", plan: "sense", criteria: "0.5,0.25,0.25", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:afterCardUsed { if:cardSourceType==pIdol & concentration>=5 { setScoreBuff(0.5,3) }; limit:2 }", linkTurnCounts: "" }, { id: 95, name: "\u30B7\u30FC\u30BA\u30F327 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 27, stage: 2, round: "", plan: "logic", criteria: "0.5,0.25,0.25", turnCounts: "5,3,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:turnsElapsed==2 { motivation*=2.5 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 96, name: "\u30B7\u30FC\u30BA\u30F327 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 27, stage: 3, round: "", plan: "anomaly", criteria: "0.5,0.25,0.25", turnCounts: "6,3,3", firstTurns: "1,0,0", effects: "at:afterCardUsed[active] { if:stamina<=maxStamina*0.5 { score+=2; score+=2 }; limit:2 }", linkTurnCounts: "" }, { id: 97, name: "\u30B7\u30FC\u30BA\u30F328 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 28, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "5,2,3", firstTurns: "1,0,0", effects: "at:startOfTurn { if:turnsRemaining<=2 { perfectConditionTurns+=1; score+=goodConditionTurns*1.8 }; limit:2 }", linkTurnCounts: "" }, { id: 98, name: "\u30B7\u30FC\u30BA\u30F328 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 28, stage: 2, round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:endOfTurn { if:stance==preservation2 | stance==leisure { target:held { g.score+=10 } } }", linkTurnCounts: "" }, { id: 99, name: "\u30B7\u30FC\u30BA\u30F328 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 28, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:afterCardUsed[active] { if:stamina<=maxStamina*0.5 { score+=2; score+=2 }; limit:2 }", linkTurnCounts: "" }, { id: 100, name: "\u30B7\u30FC\u30BA\u30F329 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 29, stage: 1, round: "", plan: "sense", criteria: "0.2,0.5,0.3", turnCounts: "3,6,3", firstTurns: "0,1,0", effects: "at:startOfTurn { setConcentrationBuff(0.25,6); limit:1 }", linkTurnCounts: "" }, { id: 101, name: "\u30B7\u30FC\u30BA\u30F329 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 29, stage: 2, round: "", plan: "logic", criteria: "0.2,0.5,0.3", turnCounts: "3,6,3", firstTurns: "0,1,0", effects: "at:cardUsed { if:turnCardsUsed%2==1 { setGoodImpressionTurnsBuff(0.5,1) }; group:1 }; at:startOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 102, name: "\u30B7\u30FC\u30BA\u30F329 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 29, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.5,0.3", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isDirectEffect & isPreservation { target:mental { g.genki+=8 }; fixedStamina-=2 } limit:2 }", linkTurnCounts: "" }, { id: 103, name: "\u30B7\u30FC\u30BA\u30F330 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 30, stage: 1, round: "", plan: "sense", criteria: "0.363636,0.272727,0.363636", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { setConcentrationBuff(0.25,6); limit:1 }", linkTurnCounts: "" }, { id: 104, name: "\u30B7\u30FC\u30BA\u30F330 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 30, stage: 2, round: "", plan: "logic", criteria: "0.363636,0.272727,0.363636", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:startOfTurn { motivation+=5; limit:3 }", linkTurnCounts: "" }, { id: 105, name: "\u30B7\u30FC\u30BA\u30F330 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 30, stage: 3, round: "", plan: "anomaly", criteria: "0.363636,0.272727,0.363636", turnCounts: "5,3,4", firstTurns: "0.9,0,0.1", effects: "at:endOfTurn { if:stance==preservation2 | stance==leisure { target:held { g.score+=10 } } }", linkTurnCounts: "" }, { id: 106, name: "\u30B7\u30FC\u30BA\u30F331 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 31, stage: 1, round: "", plan: "logic", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:startOfTurn { motivation+=5; limit:3 }", linkTurnCounts: "" }, { id: 107, name: "\u30B7\u30FC\u30BA\u30F331 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 31, stage: 2, round: "", plan: "logic", criteria: "0.45,0.35,0.2", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:turnsElapsed==3 { score+=goodImpressionTurns*4; genki+=4 }; limit:1; group:1 }; at:startOfTurn { if:turnsElapsed==4 { goodImpressionTurns*=1.5 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 108, name: "\u30B7\u30FC\u30BA\u30F331 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 31, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:stanceChanged { if:stance==fullPower & turnsRemaining<=3 { score+=consumedStamina*1.5 }; limit:3 }", linkTurnCounts: "" }, { id: 109, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u5927\u962A\u7DE8", type: "event", preview: false, season: 2, stage: "A", round: 1, plan: "sense", criteria: "0.3,0.4,0.3", turnCounts: "3,5,4", firstTurns: "0,1,0", effects: "at:endOfTurn { if:turnsElapsed>=4 & concentration>=20 { score+=3; score+=3 } }; at:cardUsed { if:cardHasEffect(concentration) & concentration>=8 { concentration+=5; goodConditionTurns+=1 }; limit:3 }", linkTurnCounts: "" }, { id: 110, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u5927\u962A\u7DE8", type: "event", preview: false, season: 2, stage: "B", round: 1, plan: "logic", criteria: "0.3,0.4,0.3", turnCounts: "3,4,3", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==7 & genki>=40 { moveAllToDeck[active & removed] }; limit:1 }; at:startOfTurn { if:turnsElapsed==2 { motivation*=2.5 }; limit:1 }", linkTurnCounts: "" }, { id: 111, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u5927\u962A\u7DE8", type: "event", preview: false, season: 2, stage: "C", round: 1, plan: "anomaly", criteria: "0.25,0.25,0.5", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==5 & cumulativeFullPowerCharge>=8 { target:all { g.scoreTimes+=1 } }; limit:1 }; at:startOfTurn { if:stance==fullPower { score+=2+cumulativeFullPowerCharge*4 }; limit:3 }", linkTurnCounts: "" }, { id: 112, name: "\u30B7\u30FC\u30BA\u30F332 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 32, stage: 1, round: "", plan: "sense", criteria: "0.2,0.4,0.4", turnCounts: "3,5,4", firstTurns: "0,0.9,0.1", effects: "at:cardUsed { if:cardHasEffect(perfectConditionTurns) { goodConditionTurns+=3 }; limit:5 }", linkTurnCounts: "" }, { id: 113, name: "\u30B7\u30FC\u30BA\u30F332 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 32, stage: 2, round: "", plan: "logic", criteria: "0.2,0.4,0.4", turnCounts: "2,3,3", firstTurns: "0,0.75,0.25", effects: "at:startOfTurn { if:turnsElapsed==3 { score+=goodImpressionTurns*4; genki+=4 }; limit:1 }; at:beforeStartOfTurn { if:turnsElapsed==4 { goodImpressionTurns*=1.5 }; limit:1; group:1 }", linkTurnCounts: "" }, { id: 114, name: "\u30B7\u30FC\u30BA\u30F332 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 32, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.4,0.4", turnCounts: "2,4,4", firstTurns: "0,0.9,0.1", effects: "at:stanceChanged { if:isDirectEffect & isStrength { halfCostTurns+=1; costReduction+=1; setScoreBuff(0.1) }; limit:3 }", linkTurnCounts: "" }, { id: 115, name: "\u30B7\u30FC\u30BA\u30F333 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 33, stage: 1, round: "", plan: "sense", criteria: "0.35,0.45,0.2", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:cardUsed { if:turnsRemaining<=3 & cardRarity==SSR { setScoreBuff(0.25,3) }; limit:3 }", linkTurnCounts: "" }, { id: 116, name: "\u30B7\u30FC\u30BA\u30F333 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 33, stage: 2, round: "", plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "4,6,2", firstTurns: "0,1,0", effects: "at:cardUsed { if:cardSourceType==pIdol & genki>=15 { score+=goodImpressionTurns*3 }; limit:3 }; at:beforeStartOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 117, name: "\u30B7\u30FC\u30BA\u30F333 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 33, stage: 3, round: "", plan: "anomaly", criteria: "0.35,0.45,0.2", turnCounts: "4,6,2", firstTurns: "0,1,0", effects: "at:afterCardUsed[active] { if:stamina<=maxStamina*0.5 { score+=2; score+=2 }; limit:2 }", linkTurnCounts: "" }, { id: 118, name: "\u30B7\u30FC\u30BA\u30F334 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 34, stage: 1, round: "", plan: "sense", criteria: "0.4,0.3,0.3", turnCounts: "3,3,2", firstTurns: "0.8,0.2,0", effects: "at:cardUsed { if:turnsRemaining<=3 & cardRarity==SSR { setScoreBuff(0.25,3) }; limit:3 }", linkTurnCounts: "" }, { id: 119, name: "\u30B7\u30FC\u30BA\u30F334 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 34, stage: 2, round: "", plan: "sense", criteria: "0.4,0.3,0.3", turnCounts: "3,3,2", firstTurns: "0.8,0.2,0", effects: "at:cardUsed[mental] { goodConditionTurns+=3; setConcentrationBuff(0.25,2); limit:3 }", linkTurnCounts: "" }, { id: 120, name: "\u30B7\u30FC\u30BA\u30F334 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 34, stage: 3, round: "", plan: "logic", criteria: "0.4,0.3,0.3", turnCounts: "4,3,3", firstTurns: "0.8,0.2,0", effects: "at:startOfTurn { if:turnsElapsed==2 { motivation*=2.5 }; limit:1 }", linkTurnCounts: "" }, { id: 121, name: "\u30D7\u30EC\u30B7\u30FC\u30BA\u30F3A", type: "linkContest", preview: false, season: 0, stage: "A", round: "", plan: "sense", criteria: "0.4,0.2,0.4", turnCounts: "5,3,4", firstTurns: "0.8,0,0.2", effects: "at:cardUsed[mental] { goodConditionTurns+=3; setConcentrationBuff(0.25,2); limit:3 }", linkTurnCounts: "4,4,4" }, { id: 122, name: "\u30D7\u30EC\u30B7\u30FC\u30BA\u30F3B", type: "linkContest", preview: false, season: 0, stage: "B", round: "", plan: "logic", criteria: "0.3,0.5,0.2", turnCounts: "3,6,3", firstTurns: "0,1,0", effects: "at:endOfTurn { if:goodImpressionTurns>=15 { score+=genki*1.3 } }", linkTurnCounts: "4,4,4" }, { id: 123, name: "\u30D7\u30EC\u30B7\u30FC\u30BA\u30F3C", type: "linkContest", preview: false, season: 0, stage: "C", round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:endOfTurn { if:stance==preservation2 | stance==leisure { target:held { g.score+=10 } } }", linkTurnCounts: "4,4,4" }, { id: 124, name: "\u30B7\u30FC\u30BA\u30F335 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 35, stage: 1, round: "", plan: "logic", criteria: "0.3,0.4,0.3", turnCounts: "3,5,4", firstTurns: "0.11,0.89,0", effects: "at:endOfTurn { if:goodImpressionTurns>=15 { score+=genki*1.3 } }", linkTurnCounts: "" }, { id: 125, name: "\u30B7\u30FC\u30BA\u30F335 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 35, stage: 2, round: "", plan: "anomaly", criteria: "0.3,0.4,0.3", turnCounts: "3,3,2", firstTurns: "0.2,0.8,0", effects: "at:stanceChanged { if:isDirectEffect & isStrength { target:pIdol { g.score+=10 } }; limit:5 }", linkTurnCounts: "" }, { id: 126, name: "\u30B7\u30FC\u30BA\u30F335 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 35, stage: 3, round: "", plan: "anomaly", criteria: "0.3,0.4,0.3", turnCounts: "3,5,4", firstTurns: "0.11,0.89,0", effects: "at:afterCardUsed { if:cardSourceType==pIdol & fullPowerCharge<=9 { decreaseFullPowerCharge(3); at:turn { fullPowerCharge+=5; setFullPowerChargeBuff(0.5, 1); limit:1 } } limit:3 }", linkTurnCounts: "" }, { id: 127, name: "\u30B7\u30FC\u30BA\u30F336 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 36, stage: 1, round: "", plan: "sense", criteria: "0.35,0.4,0.25", turnCounts: "3,3,2", firstTurns: "0.2,0.8,0", effects: "at:cardUsed { if:cardSourceType==pIdol & perfectConditionTurns>=1 { at:startOfTurn { score+=5 } }; limit:1 }", linkTurnCounts: "" }, { id: 128, name: "\u30B7\u30FC\u30BA\u30F336 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 36, stage: 2, round: "", plan: "logic", criteria: "0.35,0.4,0.25", turnCounts: "3,3,2", firstTurns: "0.2,0.8,0", effects: "at:startOfTurn { if:turnsElapsed==3 { score+=goodImpressionTurns*4; genki+=4 }; limit:1 }; at:beforeStartOfTurn { if:turnsElapsed==4 { goodImpressionTurns*=1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 129, name: "\u30B7\u30FC\u30BA\u30F336 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 36, stage: 3, round: "", plan: "anomaly", criteria: "0.35,0.4,0.25", turnCounts: "4,5,3", firstTurns: "0.1,0.9,0", effects: "at:afterCardUsed { if:cardSourceType==pIdol & fullPowerCharge<=9 { decreaseFullPowerCharge(3); at:turn { fullPowerCharge+=5; setFullPowerChargeBuff(0.5, 1); limit:1 } } limit:3 }", linkTurnCounts: "" }, { id: 130, name: "\u30B7\u30FC\u30BA\u30F337 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 37, stage: 1, round: "", plan: "sense", criteria: "0.4,0.3,0.3", turnCounts: "3,3,2", firstTurns: "0.8,0.2,0", effects: "at:cardUsed { if:cardSourceType==pIdol & perfectConditionTurns>=1 { at:startOfTurn { score+=5 } }; limit:1 }", linkTurnCounts: "" }, { id: 131, name: "\u30B7\u30FC\u30BA\u30F337 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 37, stage: 2, round: "", plan: "logic", criteria: "0.4,0.3,0.3", turnCounts: "5,3,4", firstTurns: "0.9,0.1,0", effects: "at:turn { if:turnsElapsed==0 { nullifyGenkiTurns+=7 } limit:1 }; at:startOfTurn { if:turnsElapsed==6 { motivation+=4; at:cardUsed[active] { score+=goodImpressionTurns; drawCard } } limit:1 }", linkTurnCounts: "" }, { id: 132, name: "\u30B7\u30FC\u30BA\u30F337 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 37, stage: 3, round: "", plan: "anomaly", criteria: "0.4,0.3,0.3", turnCounts: "5,3,4", firstTurns: "0.9,0.1,0", effects: "at:stanceChanged { if:isFullPower & genki>=30 { score+=genki*10 }; limit:2 }", linkTurnCounts: "" }, { id: 133, name: "\u30B7\u30FC\u30BA\u30F338 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 38, stage: 1, round: "", plan: "sense", criteria: "0.4,0.4,0.2", turnCounts: "5,4,3", firstTurns: "0.9,0.1,0", effects: "at:cardUsed { if:cardSourceType==pIdol & concentration>=8 { goodConditionTurns+=3; concentration*=1.3 }; limit:3 }", linkTurnCounts: "" }, { id: 134, name: "\u30B7\u30FC\u30BA\u30F338 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 38, stage: 2, round: "", plan: "logic", criteria: "0.4,0.4,0.2", turnCounts: "5,4,3", firstTurns: "0.9,0.1,0", effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.25 { goodImpressionTurns+=10; motivation+=6 }; limit:1 }; at:beforeStartOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 135, name: "\u30B7\u30FC\u30BA\u30F338 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 38, stage: 3, round: "", plan: "anomaly", criteria: "0.4,0.4,0.2", turnCounts: "5,4,3", firstTurns: "0.9,0.1,0", effects: "at:stanceChanged { if:isFullPower & genki>=30 { score+=genki*10 }; limit:2 }", linkTurnCounts: "" }, { id: 136, name: "\u30B7\u30FC\u30BA\u30F339 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 39, stage: 1, round: "", plan: "sense", criteria: "0.35,0.25,0.4", turnCounts: "4,3,5", firstTurns: "0.1,0,0.9", effects: "at:cardUsed { if:cardSourceType==pIdol & concentration>=8 { goodConditionTurns+=3; concentration*=1.3 }; limit:3 }", linkTurnCounts: "" }, { id: 137, name: "\u30B7\u30FC\u30BA\u30F339 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 39, stage: 2, round: "", plan: "logic", criteria: "0.35,0.25,0.4", turnCounts: "4,3,5", firstTurns: "0.1,0,0.9", effects: "at:afterStartOfTurn { if:stamina<=maxStamina*0.25 { goodImpressionTurns+=10; motivation+=6 }; limit:1 }; at:beforeStartOfTurn { if:turnsElapsed==8 { goodImpressionTurns*=1.5 }; limit:1 }", linkTurnCounts: "" }, { id: 138, name: "\u30B7\u30FC\u30BA\u30F339 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 39, stage: 3, round: "", plan: "logic", criteria: "0.35,0.25,0.4", turnCounts: "4,3,5", firstTurns: "0.1,0,0.9", effects: "at:cardUsed { if:cardSourceType==pIdol & genki>=30 { motivation+=10; genki+=2 }; limit:4 }", linkTurnCounts: "" }, { id: 139, name: "\u30B7\u30FC\u30BA\u30F340 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 40, stage: 1, round: "", plan: "sense", criteria: "0.35,0.4,0.25", turnCounts: "4,5,3", firstTurns: "0.1,0.9,0", effects: "at:cardUsed { if:cardSourceType==pIdol { setConcentrationBuff(0.5,3) }; limit:4 }", linkTurnCounts: "" }, { id: 140, name: "\u30B7\u30FC\u30BA\u30F340 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 40, stage: 2, round: "", plan: "logic", criteria: "0.35,0.4,0.25", turnCounts: "4,5,3", firstTurns: "0.1,0.9,0", effects: "at:cardUsed { if:cardSourceType==pIdol & genki>=30 { motivation+=10; genki+=2 }; limit:4 }", linkTurnCounts: "" }, { id: 141, name: "\u30B7\u30FC\u30BA\u30F340 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 40, stage: 3, round: "", plan: "anomaly", criteria: "0.35,0.4,0.25", turnCounts: "4,5,3", firstTurns: "0.1,0.9,0", effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%2==1 { target:pIdol { g.score+=25 } }; limit:4 }", linkTurnCounts: "" }, { id: 142, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u6E0B\u8C37\u7DE8", type: "event", preview: false, season: 3, stage: "A", round: 1, plan: "sense", criteria: "0.35,0.4,0.25", turnCounts: "3,4,3", firstTurns: "0.1,0.9,0", effects: "at:cardUsed { if:cardSourceType==pIdol { setConcentrationBuff(0.5,2) }; limit:3 }; at:startOfTurn { if:turnsElapsed==3 & concentration>=6 { cardUsesRemaining+=2 }; limit:1 }", linkTurnCounts: "" }, { id: 143, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u6E0B\u8C37\u7DE8", type: "event", preview: false, season: 3, stage: "B", round: 1, plan: "logic", criteria: "0.45,0.35,0.2", turnCounts: "5,3,2", firstTurns: "1,0,0", effects: "at:cardUsed[active] { if:turnsElapsed>=3 { score+=goodImpressionTurns; score+=genki*0.3 } }; at:startOfTurn { if:turnsElapsed==5 & motivation>=6 { goodImpressionTurns+=14 }; limit:1 }", linkTurnCounts: "" }, { id: 144, name: "\u30E9\u30A4\u30D6\u30C4\u30A2\u30FC\u30A4\u30D9\u30F3\u30C8 \u6E0B\u8C37\u7DE8", type: "event", preview: false, season: 3, stage: "C", round: 1, plan: "anomaly", criteria: "0.2,0.4,0.4", turnCounts: "2,4,4", firstTurns: "0,0.9,0.1", effects: "at:stanceChanged { if:isDirectEffect & stanceChangedByDirectEffectTimes%2==1 { target:active { g.score+=5 } } }; at:afterCardUsed { if:cardSourceType==pIdol & turnsElapsed>=4 { setStance(preservation) } }", linkTurnCounts: "" }, { id: 145, name: "\u30B7\u30FC\u30BA\u30F341 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 41, stage: 1, round: "", plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:cardUsed { if:cardSourceType==pIdol { setConcentrationBuff(0.5,3) }; limit:4 }", linkTurnCounts: "" }, { id: 146, name: "\u30B7\u30FC\u30BA\u30F341 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 41, stage: 2, round: "", plan: "logic", criteria: "0.2,0.35,0.45", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==6 { goodImpressionTurns*=1.5 }; limit:1 }; at:cardUsed { if:cardHasEffect(goodImpressionTurns) { effectCounter+=1; if:effectCounter%3==2 { setGoodImpressionTurnsEffectBuff(0.5,3); goodImpressionTurns+=2; limit:3 } } }", linkTurnCounts: "" }, { id: 147, name: "\u30B7\u30FC\u30BA\u30F341 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 41, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:stanceChanged { if:stance!=none { target:pIdol { g.score+=12 } }; limit:8 }", linkTurnCounts: "" }, { id: 148, name: "\u30B7\u30FC\u30BA\u30F342 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 42, stage: 1, round: "", plan: "sense", criteria: "0.2,0.4,0.4", turnCounts: "3,5,4", firstTurns: "0,0.9,0.1", effects: "at:endOfTurn { if:goodConditionTurns>=15 { concentration+=3; score+=goodConditionTurns*2.3 }; limit:3 }", linkTurnCounts: "" }, { id: 149, name: "\u30B7\u30FC\u30BA\u30F342 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 42, stage: 2, round: "", plan: "logic", criteria: "0.2,0.4,0.4", turnCounts: "2,4,4", firstTurns: "0,0.9,0.1", effects: "at:startOfTurn { if:turnsElapsed==6 { goodImpressionTurns*=1.5 }; limit:1 }; at:cardUsed { if:cardHasEffect(goodImpressionTurns) { effectCounter+=1; if:effectCounter%3==2 { setGoodImpressionTurnsEffectBuff(0.5,3); goodImpressionTurns+=2; limit:3 } } }", linkTurnCounts: "" }, { id: 150, name: "\u30B7\u30FC\u30BA\u30F342 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 42, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.4,0.4", turnCounts: "3,5,4", firstTurns: "0,0.9,0.1", effects: "at:endOfTurn { if:cumulativeFullPowerCharge>=13 { setStance(preservation); target:pIdol { g.score+=30 } }; limit:2 }", linkTurnCounts: "" }, { id: 151, name: "\u30B7\u30FC\u30BA\u30F343 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 43, stage: 1, round: "", plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:endOfTurn { if:goodConditionTurns>=15 { concentration+=3; score+=goodConditionTurns*2.3 }; limit:3 }", linkTurnCounts: "" }, { id: 152, name: "\u30B7\u30FC\u30BA\u30F343 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 43, stage: 2, round: "", plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "3,5,2", firstTurns: "0,1,0", effects: "at:endOfTurn { if:turnsRemaining<=3 { score+=consumedGenki*0.9 }; limit:3 }", linkTurnCounts: "" }, { id: 153, name: "\u30B7\u30FC\u30BA\u30F343 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 43, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:endOfTurn { if:cumulativeFullPowerCharge>=13 { setStance(preservation); target:pIdol { g.score+=30 } }; limit:2 }", linkTurnCounts: "" }, { id: 154, name: "\u30B7\u30FC\u30BA\u30F344 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 44, stage: 1, round: "", plan: "sense", criteria: "0.2,0.45,0.35", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:cardUsed { if:turnsRemaining<=3 & cardRarity==SSR { setScoreBuff(0.25,3) }; limit:3 }", linkTurnCounts: "" }, { id: 155, name: "\u30B7\u30FC\u30BA\u30F344 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 44, stage: 2, round: "", plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "3,5,2", firstTurns: "0,1,0", effects: "at:endOfTurn { if:turnsRemaining<=3 { score+=consumedGenki*0.9 }; limit:3 }", linkTurnCounts: "" }, { id: 156, name: "\u30B7\u30FC\u30BA\u30F344 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 44, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:afterCardUsed { if:prevStance!=none & cardHasEffect(strength) { effectCounter+=1; if:effectCounter%3==2 { setEnthusiasmBonus(8); doubleCostTurns+=1 } } }", linkTurnCounts: "" }, { id: 157, name: "\u30B7\u30FC\u30BA\u30F345 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 45, stage: 1, round: "", plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:cardUsed { if:cardSourceType==pIdol & goodConditionTurns>=10 { goodConditionTurns+=4; fixedStamina+=maxStamina*0.05 }; limit:5 }", linkTurnCounts: "" }, { id: 158, name: "\u30B7\u30FC\u30BA\u30F345 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 45, stage: 2, round: "", plan: "sense", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:startOfTurn { setConcentrationEffectBuff(0.15); limit:1 }", linkTurnCounts: "" }, { id: 159, name: "\u30B7\u30FC\u30BA\u30F345 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 45, stage: 3, round: "", plan: "logic", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardSourceType==pIdol & motivation>=12  { motivation+=5; genki+=2 }; limit:3 }", linkTurnCounts: "" }, { id: 160, name: "\u30B7\u30FC\u30BA\u30F346 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 46, stage: 1, round: "", plan: "sense", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:turnsElapsed==0 { target:pIdol { g.cost+=5 }; target:pIdol & cost(stamina) { g.typedCost+=5 } }; setConcentrationEffectBuff(0.15); limit:1 }", linkTurnCounts: "" }, { id: 161, name: "\u30B7\u30FC\u30BA\u30F346 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 46, stage: 2, round: "", plan: "logic", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==0 { target:pIdol { g.cost+=5 }; target:pIdol & cost(stamina) { g.typedCost+=5 } } }; at:motivationIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%5==4 { genki+=2; score+=motivation*3.5; limit:4 } } }", linkTurnCounts: "" }, { id: 162, name: "\u30B7\u30FC\u30BA\u30F346 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 46, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:stanceChanged { if:stance==fullPower & turnsRemaining<=3 { score+=consumedStamina*1.5 }; limit:3 }", linkTurnCounts: "" }, { id: 163, name: "\u30B7\u30FC\u30BA\u30F347 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 47, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:afterCardUsed[mental] { if:goodConditionTurns>=5 { effectCounter+=1; if:effectCounter%3==2 { goodConditionTurns+=7; cardUsesRemaining+=1; limit:3 } } }", linkTurnCounts: "" }, { id: 164, name: "\u30B7\u30FC\u30BA\u30F347 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 47, stage: 2, round: "", plan: "anomaly", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isFullPower & fullPowerTimes>=2 { setScoreBuff(0.8,2); nullifyGenkiTurns+=1; target:effect(fullPowerCharge) { g.score+=20 }; limit:4 } }", linkTurnCounts: "" }, { id: 165, name: "\u30B7\u30FC\u30BA\u30F347 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 47, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:afterCardUsed[active] { if:stance==strength2 { genki+=3; setEnthusiasmBuff(2.5,1); drawCard; limit:3 } }", linkTurnCounts: "" }, { id: 166, name: "\u30B7\u30FC\u30BA\u30F348 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 48, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:cardUsed[mental] { if:goodConditionTurns>=5 & effectCounter<effectCounter(times)*3+3 { effectCounter+=1 } }; at:afterCardUsed[mental] { if:goodConditionTurns>=5 & effectCounter%3==0 & effectCounter>effectCounter(times)*3 { goodConditionTurns+=7; cardUsesRemaining+=1; effectCounter(times)+=1; limit:3 } }", linkTurnCounts: "" }, { id: 167, name: "\u30B7\u30FC\u30BA\u30F348 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 48, stage: 2, round: "", plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==5 { goodImpressionTurns*=1.5 } }; at:startOfTurn { if:turnsRemaining<=3 { goodImpressionTurns+=15; moveRandomToHand[pIdol & (deck | discarded)]; at:cardUsed[active] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 }; limit:1 } }", linkTurnCounts: "" }, { id: 168, name: "\u30B7\u30FC\u30BA\u30F348 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 48, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isFullPower & fullPowerTimes>=2 { setScoreBuff(0.8,2); nullifyGenkiTurns+=1; target:effect(fullPowerCharge) { g.score+=20 }; limit:4 } }", linkTurnCounts: "" }, { id: 169, name: "\u30B7\u30FC\u30BA\u30F349 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 49, stage: 1, round: "", plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==5 { goodImpressionTurns*=1.5 } }; at:startOfTurn { if:turnsRemaining<=3 { goodImpressionTurns+=15; moveRandomToHand[pIdol & (deck | discarded)]; at:cardUsed[active] { if:cardRarity!=L { doubleCardEffectCards+=1 }; limit:1; ttl:1 }; limit:1 } }", linkTurnCounts: "" }, { id: 170, name: "\u30B7\u30FC\u30BA\u30F349 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 49, stage: 2, round: "", plan: "anomaly", criteria: "0.2,0.35,0.45", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsRemaining<=3 { setEnthusiasmBuff(0.3,1); target:pIdol { g.score+=10 } }; limit:3 }", linkTurnCounts: "" }, { id: 171, name: "\u30B7\u30FC\u30BA\u30F349 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 49, stage: 3, round: "", plan: "anomaly", criteria: "0.35,0.45,0.2", turnCounts: "4,6,2", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isFullPower { setFullPowerEffectBuff(0.2,4); target:effect(fullPowerCharge) { g.score+=8 } } }", linkTurnCounts: "" }, { id: 172, name: "\u30B7\u30FC\u30BA\u30F350 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 50, stage: 1, round: "", plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:cardUsed { if:cardSourceType==pIdol & goodConditionTurns>=10 { goodConditionTurns+=4; fixedStamina+=maxStamina*0.05 }; limit:5 }", linkTurnCounts: "" }, { id: 173, name: "\u30B7\u30FC\u30BA\u30F350 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 50, stage: 2, round: "", plan: "logic", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardSourceType==pIdol & motivation>=12 { motivation+=5; genki+=2 }; limit:3 }", linkTurnCounts: "" }, { id: 174, name: "\u30B7\u30FC\u30BA\u30F350 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 50, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:stance==strength2 { moveRandomToHand[effect(strength) & (deck | discarded)]; target:effect(strength) { g.score+=20 } }; limit:2 }", linkTurnCounts: "" }, { id: 175, name: "\u30B7\u30FC\u30BA\u30F351 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 51, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:buffCostConsumed { moveRandomToHand[active & (deck | discarded)]; cardUsesRemaining+=1; limit:5 }", linkTurnCounts: "" }, { id: 176, name: "\u30B7\u30FC\u30BA\u30F351 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 51, stage: 2, round: "", plan: "logic", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==0 { target:pIdol { g.cost+=5 }; target:pIdol & cost(stamina) { g.typedCost+=5 } } }; at:motivationIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%5==4 { genki+=2; score+=motivation*3.5; limit:4 } } }", linkTurnCounts: "" }, { id: 177, name: "\u30B7\u30FC\u30BA\u30F351 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 51, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "6,4,2", firstTurns: "1,0,0", effects: "at:startOfTurn { if:stance==strength2 { moveRandomToHand[effect(strength) & (deck | discarded)]; target:effect(strength) { g.score+=20 } }; limit:2 }", linkTurnCounts: "" }, { id: 178, name: "\u3055\u3044\u3054\u306E\u6587\u5316\u796D HAPPY STAGE", type: "event", preview: false, season: 4, stage: "A", round: 1, plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:cardUsed { if:cardSourceType==pIdol & goodConditionTurns>=10 { goodConditionTurns+=4; fixedStamina+=maxStamina*0.05 }; limit:5 }; at:startOfTurn { if:turnsElapsed==7 & goodConditionTurns>=22 { score+=goodConditionTurns*5 } }", linkTurnCounts: "" }, { id: 179, name: "\u3055\u3044\u3054\u306E\u6587\u5316\u796D POP STAGE", type: "event", preview: false, season: 4, stage: "B", round: 1, plan: "logic", criteria: "0.35,0.45,0.2", turnCounts: "3,5,2", firstTurns: "0,1,0", effects: "at:startOfTurn { if:turnsElapsed==2 & goodImpressionTurns>=6 { setGoodImpressionTurnsEffectBuff(0.3) } }; at:startOfTurn { if:turnsRemaining<=3 { moveRandomToHand[pIdol & (deck | discarded)]; doubleCardEffectCards+=1 } }", linkTurnCounts: "" }, { id: 180, name: "\u3055\u3044\u3054\u306E\u6587\u5316\u796D BEAT STAGE", type: "event", preview: false, season: 4, stage: "C", round: 1, plan: "anomaly", criteria: "0.35,0.45,0.2", turnCounts: "3,5,2", firstTurns: "0,1,0", effects: "at:stanceChanged { if:isFullPower { setFullPowerEffectBuff(0.2,4); target:effect(fullPowerCharge) { g.score+=8 } } }; at:startOfTurn { if:turnsElapsed==7 { at:stanceChanged { if:isFullPower { score+=cumulativeFullPowerCharge*8 }; limit:1 } } }", linkTurnCounts: "" }, { id: 181, name: "\u30B7\u30FC\u30BA\u30F352 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 52, stage: 1, round: "", plan: "sense", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:buffCostConsumed { moveRandomToHand[active & (deck | discarded)]; cardUsesRemaining+=1; limit:5 }", linkTurnCounts: "" }, { id: 182, name: "\u30B7\u30FC\u30BA\u30F352 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 52, stage: 2, round: "", plan: "logic", criteria: "0.35,0.2,0.45", turnCounts: "2,2,4", firstTurns: "0,0,1", effects: "at:startOfTurn { if:turnsElapsed==5 { goodImpressionTurns*=1.5 } }; at:endOfTurn { if:turnsRemaining<=3 { score+=goodImpressionTurns } }", linkTurnCounts: "" }, { id: 183, name: "\u30B7\u30FC\u30BA\u30F352 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 52, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardSourceType==pIdol & isFullPower { fullPowerCharge+=9; target:active { g.score+=25 } }; limit:1 }", linkTurnCounts: "" }, { id: 184, name: "\u30B7\u30FC\u30BA\u30F353 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 53, stage: 1, round: "", plan: "sense", criteria: "0.2,0.35,0.45", turnCounts: "2,3,5", firstTurns: "0,0,1", effects: "at:startOfTurn { if:countCards[!removed & trouble]>=2 { setScoreBuff(0.5); perfectConditionTurns+=3 }; limit:2 }", linkTurnCounts: "" }, { id: 185, name: "\u30B7\u30FC\u30BA\u30F353 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 53, stage: 2, round: "", plan: "logic", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:cardUsed[active] { if:stamina>=maxStamina*0.8 { genki+=6; motivation+=8 }; limit:3 }", linkTurnCounts: "" }, { id: 186, name: "\u30B7\u30FC\u30BA\u30F353 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 53, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.35,0.2", turnCounts: "4,2,2", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardSourceType==pIdol & isFullPower { fullPowerCharge+=9; target:active { g.score+=25 } }; limit:1 }", linkTurnCounts: "" }, { id: 187, name: "\u30B7\u30FC\u30BA\u30F354 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 54, stage: 1, round: "", plan: "sense", criteria: "0.35,0.2,0.45", turnCounts: "3,2,5", firstTurns: "0,0,1", effects: "at:cardUsed { if:turnsRemaining<=5 & turnCardsUsed%2==1 { concentration+=4; setConcentrationEffectBuff(0.15) }; limit:5 }", linkTurnCounts: "" }, { id: 188, name: "\u30B7\u30FC\u30BA\u30F354 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 54, stage: 2, round: "", plan: "logic", criteria: "0.2,0.35,0.45", turnCounts: "2,4,6", firstTurns: "0,0,1", effects: "at:cardUsed[active] { if:stamina>=maxStamina*0.8 { genki+=6; motivation+=8 }; limit:3 }", linkTurnCounts: "" }, { id: 189, name: "\u30B7\u30FC\u30BA\u30F354 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 54, stage: 3, round: "", plan: "anomaly", criteria: "0.35,0.45,0.2", turnCounts: "2,4,2", firstTurns: "0,1,0", effects: "at:cardUsed { if:cardHasEffect(strength) & cumulativeFullPowerCharge>=10 { setEnthusiasmBonus(5,1); at:turn { drawCard(2); limit:1 } }; limit:3 }", linkTurnCounts: "" }, { id: 190, name: "\u30B7\u30FC\u30BA\u30F355 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 55, stage: 1, round: "", plan: "sense", criteria: "0.35,0.2,0.45", turnCounts: "3,2,5", firstTurns: "0,0,1", effects: "at:cardUsed { if:turnsRemaining<=5 & turnCardsUsed%2==1 { concentration+=4; setConcentrationEffectBuff(0.15) }; limit:5 }", linkTurnCounts: "" }, { id: 191, name: "\u30B7\u30FC\u30BA\u30F355 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 55, stage: 2, round: "", plan: "logic", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%4==3 { goodImpressionTurns+=7; setGoodImpressionTurnsTimesBuff(1,1); limit:4 } } }", linkTurnCounts: "" }, { id: 192, name: "\u30B7\u30FC\u30BA\u30F355 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 55, stage: 3, round: "", plan: "anomaly", criteria: "0.2,0.45,0.35", turnCounts: "2,6,4", firstTurns: "0,1,0", effects: "at:cardUsed { if:cumulativeFullPowerCharge>=10 { effectCounter+=1; if:effectCounter%5==4 { target:effect(fullPowerCharge) { g.score+=20; g.scoreTimes+=1; limit:3 } } } }; at:beforeStartOfTurn { if:effectCounter>0 { effectCounter=0 } }", linkTurnCounts: "" }, { id: 193, name: "\u30B7\u30FC\u30BA\u30F356 \u30B9\u30C6\u30FC\u30B81", type: "contest", preview: false, season: 56, stage: 1, round: "", plan: "sense", criteria: "0.35,0.2,0.45", turnCounts: "4,2,6", firstTurns: "0,0,1", effects: "at:afterCardUsed[mental] { if:goodConditionTurns>=8 { concentration+=6; at:turn { score+=10; limit:1; delay:4 }; at:turn { score+=10; limit:1; delay:5 } }; limit:3 }", linkTurnCounts: "" }, { id: 194, name: "\u30B7\u30FC\u30BA\u30F356 \u30B9\u30C6\u30FC\u30B82", type: "contest", preview: false, season: 56, stage: 2, round: "", plan: "logic", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:goodImpressionTurnsIncreased { if:isDirectEffect { effectCounter+=1; if:effectCounter%4==3 { goodImpressionTurns+=7; setGoodImpressionTurnsTimesBuff(1,1); limit:4 } } }", linkTurnCounts: "" }, { id: 195, name: "\u30B7\u30FC\u30BA\u30F356 \u30B9\u30C6\u30FC\u30B83", type: "contest", preview: false, season: 56, stage: 3, round: "", plan: "anomaly", criteria: "0.45,0.2,0.35", turnCounts: "6,2,4", firstTurns: "1,0,0", effects: "at:cardUsed { if:cardHasEffect(strength) { fullPowerCharge+=5; target:effect(strength) { g.score+=25; g.scoreTimes+=1 } }; limit:2 }", linkTurnCounts: "" }];

  // vendor/gakumas-data/data/stages.js
  stages_default.forEach((stage) => {
    const [vo, da, vi] = stage.criteria.split(",").map((p) => parseFloat(p));
    stage.criteria = { vocal: vo, dance: da, visual: vi };
    const [voT, daT, viT] = stage.turnCounts.split(",").map((p) => parseInt(p, 10));
    stage.turnCounts = { vocal: voT, dance: daT, visual: viT };
    const [voFt, daFt, viFt] = stage.firstTurns.split(",").map((p) => parseFloat(p));
    stage.firstTurns = { vocal: voFt, dance: daFt, visual: viFt };
    stage.linkTurnCounts = String(stage.linkTurnCounts ?? "").split(",").map((p) => parseInt(p, 10));
  });
  var parsed4 = lazyParse(stages_default, (stage) => {
    stage.effects = deserializeEffectSequence(stage.effects);
  });
  var STAGES_BY_ID = stages_default.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, /* @__PURE__ */ Object.create(null));
  var Stages = class {
    static getAll() {
      return parsed4.all();
    }
    static getById(id) {
      return parsed4.one(STAGES_BY_ID[id]);
    }
    static findLast(predicate) {
      return parsed4.one(stages_default.findLast(predicate));
    }
  };
  var stages_default2 = Stages;

  // vendor/gakumas-engine/normalizeEffect.js
  function normalizeEffect(effect) {
    const normalized = {
      phase: effect.phase,
      filter: effect.filter,
      conditions: effect.conditions,
      targets: effect.targets,
      actions: effect.actions,
      effects: effect.effects,
      limit: effect.limit,
      ttl: effect.ttl,
      delay: effect.delay,
      group: effect.group,
      anchor: effect.anchor,
      type: effect.type,
      source: effect.source,
      effectInstanceId: effect.effectInstanceId
    };
    for (const key in effect) {
      if (!(key in normalized)) normalized[key] = effect[key];
    }
    return normalized;
  }

  // vendor/gakumas-engine/constants.js
  var DEBUG = false;
  var STANCES = [
    "none",
    "strength",
    "strength2",
    "preservation",
    "preservation2",
    "leisure",
    "fullPower"
  ];
  var SKILL_CARD_TYPES = ["active", "mental", "trouble"];
  var SOURCE_TYPES = ["default", "produce", "pIdol", "support"];
  var RARITIES = ["N", "R", "SR", "SSR", "L", "T"];
  function parseEffect(effectStr, source) {
    const effects = deserializeEffectSequence(effectStr);
    return effects.map((effect) => normalizeEffect({ ...effect, source }));
  }
  var DEFAULT_EFFECTS = parseEffect(
    "at:cardUsed { if:stance==strength2 { do:fixedStamina-=1 } }",
    { type: "default", id: "\u5F37\u6C172" }
  );
  var FULL_POWER_EFFECTS = [
    ...parseEffect("if:stance==fullPower { do:setStance(none) }", {
      type: "default",
      id: "\u5168\u529B"
    }),
    ...parseEffect(
      "if:lockStanceTurns==0 & fullPowerCharge>=10 { do:fullPowerCharge-=10; do:setStance(fullPower) }",
      { type: "default", id: "\u5168\u529B" }
    )
  ];
  var GOOD_IMPRESSION_EFFECTS = parseEffect(
    "if:goodImpressionTurns>=1 { do:score+=goodImpressionTurns*goodImpressionTurnsEffectBuff }",
    { type: "default", id: "\u597D\u5370\u8C61" }
  );
  var STANCE_CHANGED_EFFECTS = [
    ...parseEffect(
      "if:prevStance==preservation & stance!=leisure { do:enthusiasm+=5; do:cardUsesRemaining+=1 }",
      { type: "default", id: "\u6E29\u5B58" }
    ),
    ...parseEffect(
      "if:prevStance==preservation2 & stance!=leisure { do:enthusiasm+=8; do:fixedGenki+=5; do:cardUsesRemaining+=1 }",
      { type: "default", id: "\u6E29\u5B582" }
    ),
    ...parseEffect(
      "if:prevStance==leisure { do:fixedGenki+=5; do:cardUsesRemaining+=1 }",
      { type: "default", id: "\u306E\u3093\u3073\u308A" }
    ),
    ...parseEffect(
      "if:prevStance==leisure & stance==fullPower { target:all { do:g.score+=10 } }",
      { type: "default", id: "\u306E\u3093\u3073\u308A" }
    ),
    ...parseEffect(
      "if:prevStance==leisure & stance!=fullPower { do:enthusiasm+=10 }",
      { type: "default", id: "\u306E\u3093\u3073\u308A" }
    )
  ];
  var FULL_POWER_CHANGED_EFFECTS = [
    ...parseEffect(
      "if:stance==fullPower { do:cardUsesRemaining+=1; do:moveHeldCardsToHand }",
      { type: "default", id: "\u5168\u529B" }
    )
  ];
  var PHASES = [
    "activeCardUsed",
    "afterActiveCardUsed",
    "afterCardUsed",
    "afterMentalCardUsed",
    "afterStartOfStage",
    "afterStartOfTurn",
    "beforeCardUsed",
    "beforeStartOfTurn",
    "buffCostConsumed",
    "cardUsed",
    "cardMovedToHand",
    "cardMovedToHeld",
    "cardRemoved",
    "concentrationIncreased",
    "endOfTurn",
    "everyTurn",
    "fullPowerChargeIncreased",
    "genkiIncreased",
    "goodConditionTurnsIncreased",
    "goodImpressionTurnsIncreased",
    "mentalCardUsed",
    "motivationIncreased",
    "prestage",
    "processCard",
    "processCost",
    "checkCost",
    "staminaDecreased",
    "stanceChanged",
    "stanceValueChanged",
    "startOfStage",
    "startOfTurn",
    "turn",
    "turnSkipped"
  ];
  var ALL_FIELDS = [
    // Logging
    "logs",
    "graphData",
    // General
    "cardUsesRemaining",
    "stamina",
    "consumedStamina",
    "genki",
    "consumedGenki",
    "consumedGoodImpressionTurns",
    "score",
    // Turns
    "turnsElapsed",
    "turnsRemaining",
    "turnTypes",
    "linkPhase",
    // Buffs
    "halfCostTurns",
    "doubleCostTurns",
    "doubleBuffCostTurns",
    "costReduction",
    "costIncrease",
    "nullifyCostCards",
    "nullifyCostActiveCards",
    "nullifyDebuff",
    "nullifyGenkiTurns",
    "doubleCardEffectCards",
    "noActiveTurns",
    "noMentalTurns",
    "noGoodConditionTurnsTurns",
    "noConcentrationTurns",
    "noGoodImpressionTurnsTurns",
    "noMotivationTurns",
    "noStrengthTurns",
    "noFullPowerChargeTurns",
    "poorConditionTurns",
    "uneaseTurns",
    "scoreBuffs",
    "scoreDebuffs",
    "goodImpressionTurnsBuffs",
    "goodImpressionTurnsEffectBuffs",
    "goodImpressionTurnsTimesBuffs",
    "concentrationBuffs",
    "concentrationAdditionBuffs",
    "concentrationEffectBuffs",
    "goodConditionTurns",
    "goodConditionTurnsMultiplier",
    "goodConditionTurnsBuffs",
    "goodConditionTurnsAdditionBuffs",
    "perfectConditionTurns",
    "concentration",
    "concentrationMultiplier",
    "goodImpressionTurns",
    "motivation",
    "motivationMultiplier",
    "motivationBuffs",
    "motivationAdditionBuffs",
    "prideTurns",
    "metamorphosis",
    "stance",
    "prevStance",
    "lockStanceTurns",
    "strengthEffectBuffs",
    "handDecreases",
    "fullPowerCharge",
    "fullPowerChargeBuffs",
    "fullPowerEffectBuffs",
    "cumulativeFullPowerCharge",
    "enthusiasm",
    "enthusiasmExtensionTurns",
    "enthusiasmMultiplier",
    "enthusiasmBonusBuffs",
    "enthusiasmBuffs",
    "strengthTimes",
    "preservationTimes",
    "leisureTimes",
    "fullPowerTimes",
    "stanceChangedByDirectEffectTimes",
    "freshBuffs",
    // Cards
    "scoreTimes",
    "cardMap",
    "deckCards",
    "handCards",
    "discardedCards",
    "removedCards",
    "heldCards",
    "cardsUsed",
    "activeCardsUsed",
    "turnCardsUsed",
    "turnCardsUpgraded",
    "thisCardHeld",
    "usedCard",
    "lastUsedCard",
    "movedCard",
    "noCardUseTurns",
    // Effects
    "effects",
    "phase",
    "parentPhase",
    "effectInstanceId",
    "effectCounters",
    "currentEffectInstanceId",
    "triggeredEffect",
    // Special
    "nullifySelect",
    "freeCardUses",
    "paidCardUses",
    "unfreshPhase",
    "buffCostConsumed",
    // Delta
    "goodImpressionTurnsDelta",
    "motivationDelta",
    "genkiDelta",
    "goodConditionTurnsDelta",
    "concentrationDelta",
    "staminaDelta"
  ];
  var S = ALL_FIELDS.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});
  var BUFF_LIST_FIELDS = [
    S.scoreBuffs,
    S.scoreDebuffs,
    S.goodImpressionTurnsBuffs,
    S.goodImpressionTurnsEffectBuffs,
    S.goodImpressionTurnsTimesBuffs,
    S.motivationBuffs,
    S.motivationAdditionBuffs,
    S.goodConditionTurnsBuffs,
    S.goodConditionTurnsAdditionBuffs,
    S.concentrationBuffs,
    S.concentrationAdditionBuffs,
    S.concentrationEffectBuffs,
    S.enthusiasmBuffs,
    S.enthusiasmBonusBuffs,
    S.fullPowerChargeBuffs,
    S.fullPowerEffectBuffs,
    S.strengthEffectBuffs,
    S.handDecreases
  ];
  var COPY_ON_WRITE_FIELDS = [
    S.logs,
    S.graphData,
    S.turnTypes,
    S.effectCounters,
    ...BUFF_LIST_FIELDS
  ];
  var GROWTH_FIELDS = [
    "g.score",
    "g.scoreTimes",
    "g.cost",
    "g.typedCost",
    "g.genki",
    "g.goodConditionTurns",
    "g.perfectConditionTurns",
    "g.concentration",
    "g.goodImpressionTurns",
    "g.motivation",
    "g.fullPowerCharge",
    "g.halfCostTurns",
    "g.scoreByGoodImpressionTurns",
    "g.scoreByMotivation",
    "g.scoreByGenki",
    "g.stanceLevel"
  ];
  var G = GROWTH_FIELDS.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});
  var CARD_PILES = [
    S.deckCards,
    S.handCards,
    S.discardedCards,
    S.removedCards,
    S.heldCards
  ];
  var COST_FIELDS = [
    S.stamina,
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.fullPowerCharge
  ];
  var EOT_DECREMENT_FIELDS = [
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.goodImpressionTurns,
    S.prideTurns,
    S.lockStanceTurns,
    S.halfCostTurns,
    S.doubleCostTurns,
    S.doubleBuffCostTurns,
    S.nullifyGenkiTurns,
    S.poorConditionTurns,
    S.noActiveTurns,
    S.noMentalTurns,
    S.noGoodConditionTurnsTurns,
    S.noConcentrationTurns,
    S.noGoodImpressionTurnsTurns,
    S.noMotivationTurns,
    S.noStrengthTurns,
    S.noFullPowerChargeTurns,
    S.uneaseTurns,
    S.noCardUseTurns
  ];
  var BUFF_FIELDS = [
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.fullPowerCharge
  ];
  var DEBUFF_FIELDS = [
    S.doubleCostTurns,
    S.doubleBuffCostTurns,
    S.costIncrease,
    S.nullifyGenkiTurns,
    S.noActiveTurns,
    S.noMentalTurns,
    S.noGoodConditionTurnsTurns,
    S.noConcentrationTurns,
    S.noGoodImpressionTurnsTurns,
    S.noMotivationTurns,
    S.noStrengthTurns,
    S.noFullPowerChargeTurns,
    S.uneaseTurns,
    S.poorConditionTurns,
    S.lockStanceTurns,
    S.noCardUseTurns
  ];
  var DEBUFF_SPECIAL_ACTIONS = [
    "setScoreDebuff",
    "decreaseFullPowerCharge",
    "setHandDecrease"
  ];
  var INCREASE_TRIGGER_FIELDS = [
    S.goodImpressionTurns,
    S.motivation,
    S.genki,
    S.goodConditionTurns,
    S.concentration,
    S.fullPowerCharge
  ];
  var DECREASE_TRIGGER_FIELDS = [S.stamina];
  var GROWABLE_FIELDS = [
    S.genki,
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.fullPowerCharge,
    S.halfCostTurns
  ];
  var WHOLE_FIELDS = [
    S.stamina,
    S.genki,
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.prideTurns,
    S.fullPowerCharge,
    S.cumulativeFullPowerCharge,
    S.enthusiasm
  ];
  var NON_NEGATIVE_FIELDS = [
    S.stamina,
    S.genki,
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.fullPowerCharge
  ];
  var LOGGED_FIELDS = [
    S.stamina,
    S.genki,
    S.stance,
    S.score,
    S.goodConditionTurns,
    S.perfectConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.prideTurns,
    S.metamorphosis,
    S.enthusiasm,
    S.enthusiasmExtensionTurns,
    S.fullPowerCharge,
    S.lockStanceTurns,
    S.halfCostTurns,
    S.doubleCostTurns,
    S.doubleBuffCostTurns,
    S.costReduction,
    S.costIncrease,
    S.doubleCardEffectCards,
    S.nullifyGenkiTurns,
    S.nullifyDebuff,
    S.poorConditionTurns,
    S.nullifyCostCards,
    S.nullifyCostActiveCards,
    S.turnsRemaining,
    S.cardUsesRemaining,
    S.noActiveTurns,
    S.noMentalTurns,
    S.noGoodConditionTurnsTurns,
    S.noConcentrationTurns,
    S.noGoodImpressionTurnsTurns,
    S.noMotivationTurns,
    S.noStrengthTurns,
    S.noFullPowerChargeTurns,
    S.noCardUseTurns,
    S.uneaseTurns
  ];
  var GRAPHED_FIELDS = [
    S.stamina,
    S.genki,
    S.score,
    S.goodConditionTurns,
    S.concentration,
    S.goodImpressionTurns,
    S.motivation,
    S.prideTurns,
    S.cumulativeFullPowerCharge,
    S.strengthTimes,
    S.preservationTimes,
    S.fullPowerTimes
  ];
  var FIELDS_TO_DIFF = [
    ...new Set(
      LOGGED_FIELDS.concat(
        INCREASE_TRIGGER_FIELDS,
        DECREASE_TRIGGER_FIELDS,
        EOT_DECREMENT_FIELDS
      )
    )
  ];

  // vendor/gakumas-engine/utils.js
  var seed = 610397104;
  function mulberry32(a) {
    return function() {
      let t = a += 1831565813;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var _getRand = DEBUG ? mulberry32(seed) : Math.random;
  var _getRandCount = 0;
  var _randTape = null;
  var _randTapePos = 0;
  function getRand() {
    _getRandCount++;
    if (_randTape) {
      if (_randTapePos < _randTape.length) return _randTape[_randTapePos++];
      const value = _getRand();
      _randTape.push(value);
      _randTapePos++;
      return value;
    }
    return _getRand();
  }
  function recordRand() {
    _randTape = [];
    _randTapePos = 0;
  }
  function rewindRand() {
    _randTapePos = 0;
  }
  function stopRecordingRand() {
    _randTape = null;
  }
  function resetRand(customSeed) {
    _getRand = mulberry32(customSeed ?? seed);
    _getRandCount = 0;
    _randTape = null;
  }
  function shuffle(arr) {
    let currentIndex = arr.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(getRand() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex]
      ];
    }
    return arr;
  }
  function formatDiffField(value) {
    if (isNaN(value)) return value;
    if (Number.isInteger(value)) return value;
    return parseFloat(value.toFixed(2));
  }
  function safeCeil(value) {
    const rounded = Math.round(value);
    if (Math.abs(value - rounded) < 1e-9) return rounded;
    return Math.ceil(value);
  }
  function shallowCopy(state) {
    return state.slice();
  }
  function cloneValue(v) {
    if (Array.isArray(v)) return v.slice();
    if (v.effectInstanceId !== void 0) return v;
    if (v.baseId !== void 0) return v;
    const out = {};
    for (const k in v) {
      const val = v[k];
      if (val === null || typeof val !== "object") {
        out[k] = val;
      } else {
        out[k] = cloneValue(val);
      }
    }
    return out;
  }
  var SHARED_SLOTS = new Uint8Array(ALL_FIELDS.length);
  for (const field of COPY_ON_WRITE_FIELDS) SHARED_SLOTS[field] = 1;
  function deepCopy(state) {
    const out = state.slice();
    for (let i = 0; i < out.length; i++) {
      if (SHARED_SLOTS[i]) continue;
      const v = out[i];
      if (v !== null && typeof v === "object") {
        out[i] = cloneValue(v);
      }
    }
    return out;
  }
  function isUniqueCard(card) {
    return card.unique && !["L", "T"].includes(card.rarity);
  }
  function getBaseId(entity) {
    if (entity.upgraded) return entity.id - 1;
    return entity.id;
  }

  // vendor/gakumas-engine/config/IdolConfig.js
  var IdolConfig = class {
    constructor(loadout) {
      const {
        params,
        supportBonus,
        pItemIds,
        skillCardIdGroups,
        customizationGroups
      } = loadout;
      let skillCardIds = [];
      let cards = [];
      let k = 0;
      for (let i = 0; i < skillCardIdGroups.length; i++) {
        for (let j = 0; j < skillCardIdGroups[i].length; j++) {
          if (skillCardIdGroups[i][j]) {
            let customizations = customizationGroups?.[i]?.[j];
            if (customizations) {
              customizations = { ...customizations };
              Object.keys(customizations).forEach((k2) => {
                if (!customizations_default2.getById(k2) || !customizations[k2]) {
                  delete customizations[k2];
                }
              });
            }
            cards.push({
              id: skillCardIdGroups[i][j],
              customizations,
              index: k
            });
            skillCardIds.push(skillCardIdGroups[i][j]);
          }
          k++;
        }
      }
      this.pItemIds = [...new Set(pItemIds.filter((id) => id))];
      const { dedupedCards, dupeIndices } = this.getDedupedCards(cards);
      dedupedCards.forEach((c) => {
        delete c.index;
      });
      this.cards = dedupedCards;
      this.dupeIndices = dupeIndices;
      this.pIdolId = this.inferPIdolId(this.pItemIds, skillCardIds);
      const pIdol = pIdols_default.getById(this.pIdolId);
      if (pIdol) {
        this.idolId = pIdol.idolId;
        this.plan = pIdol.plan;
        this.recommendedEffect = pIdol.recommendedEffect;
      }
      if (!this.plan) {
        this.plan = this.inferPlan(this.pItemIds, skillCardIds);
      }
      const [vocal, dance, visual, stamina] = params.map((p) => p || 0);
      this.params = { vocal, dance, visual, stamina };
      this.supportBonus = supportBonus || 0;
    }
    inferPIdolId(pItemIds, skillCardIds) {
      const signatureSkillCardId = skillCardIds.find(
        (id) => skillCards_default.getById(id)?.sourceType == "pIdol"
      );
      if (signatureSkillCardId)
        return skillCards_default.getById(signatureSkillCardId).pIdolId;
      const signaturePItemId = pItemIds.find(
        (id) => pItems_default.getById(id)?.sourceType == "pIdol"
      );
      if (signaturePItemId) return pItems_default.getById(signaturePItemId).pIdolId;
      return null;
    }
    inferPlan(pItemIds, skillCardIds) {
      for (let id of skillCardIds) {
        const { plan } = skillCards_default.getById(id);
        if (plan != "free") return plan;
      }
      for (let id of pItemIds) {
        const { plan } = pItems_default.getById(id);
        if (plan != "free") return plan;
      }
      return null;
    }
    countCustomizations(customizations) {
      if (!customizations) return 0;
      return Object.values(customizations).reduce((acc, cur) => acc + cur, 0);
    }
    // If the loadout contains dupes of a unique skill card,
    // keep only the most upgraded copy
    getDedupedCards(cards) {
      const sortedCards = cards.sort(
        (a, b) => b.id + (b.customizations ? this.countCustomizations(b.customizations) : 0) - a.id - (a.customizations ? this.countCustomizations(a.customizations) : 0)
      );
      let dedupedCards = [];
      let dupeIndices = [];
      for (let i = 0; i < sortedCards.length; i++) {
        const skillCard = skillCards_default.getById(sortedCards[i].id);
        if (isUniqueCard(skillCard)) {
          const baseId = getBaseId(skillCard);
          if (dedupedCards.some((d) => [baseId, baseId + 1].includes(d.id))) {
            dupeIndices.push(sortedCards[i].index);
            continue;
          }
        }
        dedupedCards.push(sortedCards[i]);
      }
      return {
        dedupedCards,
        dupeIndices
      };
    }
  };

  // vendor/gakumas-engine/config/StageConfig.js
  var StageConfig = class {
    constructor(stage) {
      const {
        id,
        type,
        plan,
        season,
        defaultCardSet,
        turnCounts,
        firstTurns,
        criteria,
        effects,
        linkTurnCounts
      } = stage;
      this.id = id;
      this.type = type;
      this.plan = plan;
      this.defaultCardSet = defaultCardSet;
      this.season = season;
      this.turnCounts = turnCounts;
      this.firstTurns = firstTurns;
      this.criteria = criteria;
      this.effects = effects;
      this.turnCount = turnCounts.vocal + turnCounts.dance + turnCounts.visual;
      this.linkTurnCounts = linkTurnCounts;
      this.linkPhaseChangeTurns = this.calculateLinkPhaseChangeTurns();
    }
    calculateLinkPhaseChangeTurns() {
      let cumulativeTurns = 0;
      return this.linkTurnCounts.map((turnCount) => {
        cumulativeTurns += turnCount;
        return cumulativeTurns;
      });
    }
  };

  // vendor/gakumas-engine/typeMultipliers.js
  function getParamCap(season) {
    if (season < 10) return 1800;
    if (season < 16) return 2160;
    if (season < 25) return 2400;
    if (season < 37) return 2760;
    return 3360;
  }
  function getShortfallRate(params, criteria, season) {
    if (season < 55) return 1;
    let rate = 1;
    for (const key of Object.keys(criteria)) {
      const threshold = 900 * criteria[key];
      if (params[key] < threshold) {
        rate -= 0.0979 + 0.1512 * (1 - params[key] / threshold);
      }
    }
    return rate;
  }
  function calculateTypeMultipliers(params, stage, supportBonus = 0, enterPercents = false) {
    const { type, criteria, season } = stage;
    if (type !== "contest" || enterPercents) {
      return {
        vocal: params.vocal / 100,
        dance: params.dance / 100,
        visual: params.visual / 100
      };
    }
    const hasFlatBonus = season == 13;
    const hasFlatterBonus = season == 23;
    const multipliers = {};
    const shortfallRate = getShortfallRate(params, criteria, season);
    for (const key of Object.keys(criteria)) {
      const param = Math.min(params[key], getParamCap(season));
      const criterion = criteria[key];
      let multiplier = 0;
      if (season < 25) {
        if (param > 1200) {
          multiplier = param + 3e3;
          if (hasFlatBonus) multiplier += param - 1200;
        } else if (param > 900) {
          multiplier = param * 2 + 1800;
        } else if (param > 600) {
          multiplier = param * 3 + 900;
        } else if (param > 300) {
          multiplier = param * 4 + 300;
        } else if (param > 0) {
          multiplier = param * 5;
        }
      } else if (season < 37) {
        if (param > 2500) {
          multiplier = param + 3e3 + (param - 2500) * 0.2;
        } else if (param > 1800) {
          multiplier = param * 1.5 + 1800;
        } else if (param > 1200) {
          multiplier = param * 2 + 900;
        } else if (param > 600) {
          multiplier = param * 2.5 + 300;
        } else if (param > 300) {
          multiplier = param * 3;
        } else if (param > 0) {
          multiplier = param * 4 - 250;
        }
      } else if (season < 39) {
        if (param > 2800) {
          multiplier = param * 0.8525 + 3095;
        } else if (param > 2100) {
          multiplier = param * 1.275 + 1915;
        } else if (param > 1500) {
          multiplier = param * 1.7 + 1020;
        } else if (param > 900) {
          multiplier = param * 2.1225 + 387.5;
        } else if (param > 0) {
          multiplier = param * 2.55;
        }
      } else {
        if (param > 2800) {
          multiplier = param * 0.6 + 4300;
        } else if (param > 2100) {
          multiplier = param * 1 + 3180;
        } else if (param > 1500) {
          multiplier = param * 1.8 + 1500;
        } else if (param > 900) {
          multiplier = param * 2.5 + 450;
        } else if (param > 0) {
          multiplier = param * 3;
        }
      }
      if (hasFlatterBonus) multiplier += param;
      multiplier = multiplier * criterion * shortfallRate + 100;
      multiplier = Math.ceil(multiplier) * (1 + supportBonus + (hasFlatterBonus ? 0.01 : 0));
      multiplier = Math.ceil(Math.floor(multiplier * 10) / 10);
      multipliers[key] = multiplier / 100;
    }
    return multipliers;
  }

  // vendor/gakumas-engine/config/IdolStageConfig.js
  var CONTEST_DEFAULT_CARD_IDS_BY_PLAN = {
    sense: [5, 7, 1, 1, 15, 15, 17, 17],
    logic: [9, 11, 19, 19, 21, 21, 13, 13],
    anomaly: [370, 372, 1, 1, 374, 374, 376, 376]
  };
  var EVENT_DEFAULT_CARD_IDS_BY_RECOMMENDED_EFFECT = {
    goodConditionTurns: [15, 15, 5, 1, 1, 3, 13, 13],
    concentration: [17, 17, 7, 1, 1, 3, 13, 13],
    goodImpressionTurns: [19, 19, 9, 1, 1, 3, 13, 13],
    motivation: [21, 21, 11, 1, 1, 3, 13, 13],
    strength: [376, 376, 370, 1, 1, 368, 13, 13],
    fullPower: [370, 372, 1, 1, 374, 374, 376, 376]
    // TODO: Fix
  };
  var IdolStageConfig = class {
    constructor(idolConfig, stageConfig, enterPercents) {
      if (stageConfig.type === "idolRoad") {
        stageConfig = new StageConfig(
          idolRoad_default.resolveStage({ ...stageConfig }, idolConfig.pIdolId)
        );
      }
      this.idol = idolConfig;
      this.stage = stageConfig;
      this.typeMultipliers = this.calculateTypeMultipliers(
        idolConfig,
        stageConfig,
        enterPercents
      );
      this.defaultCardIds = this.getDefaultCardIds(idolConfig, stageConfig);
    }
    calculateTypeMultipliers(idolConfig, stageConfig, enterPercents) {
      return calculateTypeMultipliers(
        idolConfig.params,
        stageConfig,
        idolConfig.supportBonus,
        enterPercents
      );
    }
    getDefaultCardIds(idolConfig, stageConfig) {
      if (stageConfig.type === "linkContest") {
        return [];
      }
      const defaultCardSet = stageConfig.defaultCardSet || stageConfig.type;
      if (defaultCardSet == "event" && idolConfig.recommendedEffect) {
        if (stageConfig.season >= 4) {
          return [];
        }
        const eventCardIds = EVENT_DEFAULT_CARD_IDS_BY_RECOMMENDED_EFFECT[idolConfig.recommendedEffect];
        if (eventCardIds) return eventCardIds;
      }
      if (idolConfig.plan) {
        return CONTEST_DEFAULT_CARD_IDS_BY_PLAN[idolConfig.plan];
      } else if (stageConfig.plan != "free") {
        return CONTEST_DEFAULT_CARD_IDS_BY_PLAN[stageConfig.plan];
      } else {
        return CONTEST_DEFAULT_CARD_IDS_BY_PLAN.sense;
      }
    }
  };

  // vendor/gakumas-engine/engine/EngineComponent.js
  var EngineComponent = class {
    constructor(engine) {
      this.engine = engine;
      this.logger = engine.logger;
    }
    getConfig(state) {
      return this.engine.getConfig(state);
    }
  };

  // vendor/gakumas-engine/engine/BuffManager.js
  var BUFF_TYPES = [
    { action: "setScoreBuff", field: S.scoreBuffs },
    { action: "setScoreDebuff", field: S.scoreDebuffs },
    { action: "setGoodImpressionTurnsBuff", field: S.goodImpressionTurnsBuffs },
    {
      action: "setGoodImpressionTurnsEffectBuff",
      field: S.goodImpressionTurnsEffectBuffs
    },
    {
      action: "setGoodImpressionTurnsTimesBuff",
      field: S.goodImpressionTurnsTimesBuffs
    },
    { action: "setMotivationBuff", field: S.motivationBuffs },
    { action: "setMotivationAdditionBuff", field: S.motivationAdditionBuffs },
    { action: "setGoodConditionTurnsBuff", field: S.goodConditionTurnsBuffs },
    {
      action: "setGoodConditionTurnsAdditionBuff",
      field: S.goodConditionTurnsAdditionBuffs
    },
    { action: "setConcentrationBuff", field: S.concentrationBuffs },
    { action: "setConcentrationAdditionBuff", field: S.concentrationAdditionBuffs },
    { action: "setConcentrationEffectBuff", field: S.concentrationEffectBuffs },
    { action: "setEnthusiasmBuff", field: S.enthusiasmBuffs },
    { action: "setEnthusiasmBonus", field: S.enthusiasmBonusBuffs },
    { action: "setFullPowerChargeBuff", field: S.fullPowerChargeBuffs },
    { action: "setFullPowerEffectBuff", field: S.fullPowerEffectBuffs },
    { action: "setStrengthEffectBuff", field: S.strengthEffectBuffs },
    // 手札減少: draw this many fewer cards at the start of each turn it lasts.
    // UNVERIFIED: not yet checked against a capture.
    { action: "setHandDecrease", field: S.handDecreases }
  ];
  var DEBUFF_LIST_FIELDS = [S.scoreDebuffs, S.handDecreases];
  var BuffManager = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.variableResolvers = {
        isPreservation: (state) => state[S.stance].startsWith("pre") || state[S.stance] === "leisure",
        isStrength: (state) => state[S.stance].startsWith("str"),
        isFullPower: (state) => state[S.stance] === "fullPower",
        isDirectEffect: (state) => state[S.parentPhase] === "processCard" || state[S.parentPhase] === "processCost" || state[S.parentPhase] === "cardMovedToHand" || state[S.parentPhase] === "cardMovedToHeld" || state[S.triggeredEffect]?.type === "reservation" && state[S.triggeredEffect]?.source?.type === "skillCardEffect" || state[S.phase] == "stanceChanged" && state[S.prevStance] != "fullPower" && state[S.stance] == "fullPower",
        stanceChangedTimes: (state) => state[S.strengthTimes] + state[S.preservationTimes] + state[S.fullPowerTimes],
        goodImpressionTurnsEffectBuff: (state) => state[S.goodImpressionTurnsEffectBuffs].reduce(
          (acc, buff) => acc + buff.amount,
          1
        ),
        // UNVERIFIED: our reading of 低下状態の数 (each active debuff counter,
        // plus each score-debuff and hand-decrease entry); not checked against
        // a capture.
        countDebuffs: (state) => this.countDebuffs(state)
      };
      this.specialActions = {
        removeDebuffs: (state, amount) => this.removeDebuffs(state, parseInt(amount, 10)),
        setStance: (state, stance) => this.setStance(state, stance),
        setMetamorphosis: (state) => {
          state[S.metamorphosis] = "metamorphosisPreparation";
        },
        decreaseFullPowerCharge: (state, amount) => {
          state[S.fullPowerCharge] = Math.max(
            0,
            state[S.fullPowerCharge] - parseInt(amount, 10)
          );
        },
        incrementPIdolPItemLimit: (state, amount = 1) => this.incrementPIdolPItemLimit(state, parseInt(amount, 10))
      };
      for (const { action, field } of BUFF_TYPES) {
        this[action] = (state, amount, turns) => this.setBuff(state, field, amount, turns, action);
        this.specialActions[action] = (state, amount, turns) => this[action](
          state,
          parseFloat(amount),
          turns ? parseInt(turns, 10) : null
        );
      }
    }
    initializeState(state) {
      state[S.halfCostTurns] = 0;
      state[S.doubleCostTurns] = 0;
      state[S.doubleBuffCostTurns] = 0;
      state[S.costReduction] = 0;
      state[S.costIncrease] = 0;
      state[S.nullifyCostCards] = 0;
      state[S.nullifyCostActiveCards] = 0;
      state[S.nullifyDebuff] = 0;
      state[S.nullifyGenkiTurns] = 0;
      state[S.doubleCardEffectCards] = 0;
      state[S.noActiveTurns] = 0;
      state[S.noMentalTurns] = 0;
      state[S.noGoodConditionTurnsTurns] = 0;
      state[S.noConcentrationTurns] = 0;
      state[S.noGoodImpressionTurnsTurns] = 0;
      state[S.noMotivationTurns] = 0;
      state[S.noStrengthTurns] = 0;
      state[S.noFullPowerChargeTurns] = 0;
      state[S.noCardUseTurns] = 0;
      state[S.poorConditionTurns] = 0;
      state[S.uneaseTurns] = 0;
      state[S.scoreBuffs] = [];
      state[S.scoreDebuffs] = [];
      state[S.goodImpressionTurnsBuffs] = [];
      state[S.goodImpressionTurnsEffectBuffs] = [];
      state[S.goodImpressionTurnsTimesBuffs] = [];
      state[S.motivationBuffs] = [];
      state[S.motivationAdditionBuffs] = [];
      state[S.goodConditionTurnsBuffs] = [];
      state[S.goodConditionTurnsAdditionBuffs] = [];
      state[S.concentrationBuffs] = [];
      state[S.concentrationAdditionBuffs] = [];
      state[S.concentrationEffectBuffs] = [];
      state[S.enthusiasmBuffs] = [];
      state[S.enthusiasmBonusBuffs] = [];
      state[S.fullPowerChargeBuffs] = [];
      state[S.fullPowerEffectBuffs] = [];
      state[S.strengthEffectBuffs] = [];
      state[S.handDecreases] = [];
      state[S.goodConditionTurns] = 0;
      state[S.perfectConditionTurns] = 0;
      state[S.concentration] = 0;
      state[S.goodImpressionTurns] = 0;
      state[S.motivation] = 0;
      state[S.prideTurns] = 0;
      state[S.metamorphosis] = "none";
      state[S.stance] = "none";
      state[S.lockStanceTurns] = 0;
      state[S.fullPowerCharge] = 0;
      state[S.cumulativeFullPowerCharge] = 0;
      state[S.enthusiasm] = 0;
      state[S.enthusiasmExtensionTurns] = 0;
      state[S.strengthTimes] = 0;
      state[S.preservationTimes] = 0;
      state[S.fullPowerTimes] = 0;
      state[S.leisureTimes] = 0;
      state[S.stanceChangedByDirectEffectTimes] = 0;
      state[S.freshBuffs] = 0;
      state[S.goodImpressionTurnsDelta] = 0;
      state[S.motivationDelta] = 0;
      state[S.genkiDelta] = 0;
      state[S.goodConditionTurnsDelta] = 0;
      state[S.concentrationDelta] = 0;
      state[S.staminaDelta] = 0;
      state[S.nullifySelect] = 0;
      state[S.freeCardUses] = 0;
      state[S.paidCardUses] = 0;
      state[S.scoreTimes] = 0;
      state[S.buffCostConsumed] = false;
    }
    setBuff(state, field, amount, turns, logLabel) {
      const arr = state[field].slice();
      state[field] = arr;
      const buffIndex = arr.findIndex((b) => b.turns == turns);
      if (buffIndex != -1) {
        const old = arr[buffIndex];
        arr[buffIndex] = { ...old, amount: old.amount + amount };
      } else {
        arr.push({
          amount,
          turns,
          fresh: !state[S.unfreshPhase]
        });
      }
      this.logger.log(state, logLabel, {
        amount,
        turns
      });
    }
    removeDebuffs(state, amount) {
      for (let i = 0; i < DEBUFF_FIELDS.length; i++) {
        const field = DEBUFF_FIELDS[i];
        if (state[field] > 0) {
          state[field] = 0;
          amount--;
          if (amount <= 0) {
            break;
          }
        }
      }
    }
    decrementBuffTurns(state) {
      for (let i = 0; i < EOT_DECREMENT_FIELDS.length; i++) {
        const field = EOT_DECREMENT_FIELDS[i];
        const bit = 1 << i;
        if (state[S.freshBuffs] & bit) {
          state[S.freshBuffs] &= ~bit;
        } else if (state[field]) {
          state[field]--;
        }
      }
      for (const { field } of BUFF_TYPES) {
        const buffs = state[field];
        if (!buffs.length) continue;
        const next = [];
        for (let i = 0; i < buffs.length; i++) {
          const b = buffs[i];
          let nb;
          if (b.fresh) nb = { ...b, fresh: false };
          else if (b.turns) nb = { ...b, turns: b.turns - 1 };
          else nb = b;
          if (nb.turns != 0) next.push(nb);
        }
        state[field] = next;
      }
    }
    setStance(state, stance) {
      if (state[S.stance] == "fullPower") {
        if (stance != "none") return;
      } else if (state[S.lockStanceTurns]) return;
      if (state[S.stance] == "leisure" && stance.startsWith("preservation"))
        return;
      state[S.prevStance] = state[S.stance];
      if (stance.startsWith("preservation")) {
        if (state[S.stance].startsWith("preservation")) {
          state[S.stance] = "preservation2";
        } else {
          state[S.stance] = stance;
        }
      } else if (stance.startsWith("strength")) {
        if (state[S.stance].startsWith("strength")) {
          state[S.stance] = "strength2";
        } else {
          state[S.stance] = stance;
        }
      } else {
        state[S.stance] = stance;
      }
      if (state[S.stance] != state[S.prevStance] && state[S.stance] != `${state[S.prevStance]}2`) {
        this.engine.effectManager.triggerEffects(state, STANCE_CHANGED_EFFECTS);
        this.engine.effectManager.triggerEffectsForPhase(state, "stanceChanged");
        if (state[S.stance].startsWith("preservation")) {
          state[S.preservationTimes]++;
        } else if (state[S.stance].startsWith("strength")) {
          state[S.strengthTimes]++;
        } else if (state[S.stance] == "fullPower") {
          state[S.fullPowerTimes]++;
        } else if (state[S.stance] == "leisure") {
          state[S.leisureTimes]++;
        }
        if (state[S.phase] == "processCard" || state[S.phase] == "processCost" || state[S.phase] == "cardMovedToHand" || state[S.phase] == "cardMovedToHeld" || state[S.triggeredEffect]?.type === "reservation" && state[S.triggeredEffect]?.source?.type === "skillCardEffect") {
          state[S.stanceChangedByDirectEffectTimes]++;
        }
      }
      if (state[S.stance] != state[S.prevStance]) {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "stanceValueChanged"
        );
      }
    }
    resetStance(state) {
      state[S.prevStance] = state[S.stance];
      state[S.stance] = "none";
    }
    countDebuffs(state) {
      let count = 0;
      for (let i = 0; i < DEBUFF_FIELDS.length; i++) {
        if (state[DEBUFF_FIELDS[i]] > 0) count++;
      }
      for (let i = 0; i < DEBUFF_LIST_FIELDS.length; i++) {
        count += state[DEBUFF_LIST_FIELDS[i]].length;
      }
      return count;
    }
    getHandDecrease(state) {
      return state[S.handDecreases].reduce((acc, buff) => acc + buff.amount, 0);
    }
    // Raises the use limit of the P-idol's own p-item (the one that comes with
    // the P-idol card), including one already used up.
    // UNVERIFIED: not yet checked against a capture.
    incrementPIdolPItemLimit(state, amount) {
      for (let i = 0; i < state[S.effects].length; i++) {
        const effect = state[S.effects][i];
        if (!isPIdolPItemEffect(effect)) continue;
        state[S.effects][i] = { ...effect, limit: effect.limit + amount };
        this.logger.log(state, "incrementPIdolPItemLimit", {
          type: "pItem",
          id: effect.source.id,
          amount
        });
      }
    }
  };
  function isPIdolPItemEffect(effect) {
    if (effect?.limit == null) return false;
    if (effect.source?.type !== "pItem" || !effect.source.primary) return false;
    return pItems_default.getById(effect.source.id)?.sourceType === "pIdol";
  }

  // vendor/gakumas-engine/engine/CardManager/targeting.js
  function getTargetRuleCards(state, targetRule, source, getCardEffects, getCardCosts, getCardRarity) {
    if (targetRule && typeof targetRule === "object") {
      return evaluateTargetAST(state, targetRule, source, getCardEffects, getCardCosts, getCardRarity);
    }
    if (typeof targetRule === "string") {
      return getTargetCards(state, targetRule, source, getCardRarity);
    }
    return /* @__PURE__ */ new Set();
  }
  function evaluateTargetAST(state, node, source, getCardEffects, getCardCosts, getCardRarity) {
    switch (node.type) {
      case "binary": {
        const left = evaluateTargetAST(state, node.left, source, getCardEffects, getCardCosts, getCardRarity);
        const right = evaluateTargetAST(state, node.right, source, getCardEffects, getCardCosts, getCardRarity);
        if (node.op === "&") {
          const result = /* @__PURE__ */ new Set();
          for (let card of left) {
            if (right.has(card)) result.add(card);
          }
          return result;
        } else if (node.op === "|") {
          const result = new Set(left);
          for (let card of right) result.add(card);
          return result;
        }
        return /* @__PURE__ */ new Set();
      }
      case "unary": {
        if (node.op === "!") {
          const operand = evaluateTargetAST(state, node.operand, source, getCardEffects, getCardCosts, getCardRarity);
          const result = /* @__PURE__ */ new Set();
          for (let k = 0; k < state[S.cardMap].length; k++) {
            if (!operand.has(k)) result.add(k);
          }
          return result;
        }
        return /* @__PURE__ */ new Set();
      }
      case "call": {
        const name = node.name;
        const args = node.args;
        if (name === "effect" && args.length > 0) {
          const effectName = args[0].type === "identifier" ? args[0].name : String(args[0].value);
          const result = /* @__PURE__ */ new Set();
          for (let k = 0; k < state[S.cardMap].length; k++) {
            if (getCardEffects(state, k).has(effectName)) {
              result.add(k);
            }
          }
          return result;
        }
        if (name === "cost" && args.length > 0) {
          const costName = args[0].type === "identifier" ? args[0].name : String(args[0].value);
          const result = /* @__PURE__ */ new Set();
          for (let k = 0; k < state[S.cardMap].length; k++) {
            if (getCardCosts(state, k).has(costName)) {
              result.add(k);
            }
          }
          return result;
        }
        if (name === "baseId" && args.length > 0) {
          const wantId = args[0].type === "number" ? args[0].value : parseInt(args[0].name, 10);
          const result = /* @__PURE__ */ new Set();
          for (let k = 0; k < state[S.cardMap].length; k++) {
            if (state[S.cardMap][k].baseId == wantId) result.add(k);
          }
          return result;
        }
        if (name === "id" && args.length > 0) {
          const wantId = args[0].type === "number" ? args[0].value : parseInt(args[0].name, 10);
          const result = /* @__PURE__ */ new Set();
          for (let k = 0; k < state[S.cardMap].length; k++) {
            if (state[S.cardMap][k].id == wantId) result.add(k);
          }
          return result;
        }
        console.warn(`Unknown target function: ${name}`);
        return /* @__PURE__ */ new Set();
      }
      case "identifier":
        return getTargetCards(state, node.name, source, getCardRarity);
      case "number":
        return getTargetCards(state, String(node.value), source, getCardRarity);
      default:
        console.warn("Unknown target AST node type:", node.type);
        return /* @__PURE__ */ new Set();
    }
  }
  function getTargetCards(state, target, source, getCardRarity) {
    let targetCards = /* @__PURE__ */ new Set();
    if (target === "this") {
      if (!source || !("idx" in source)) {
        console.warn("Growth target not found");
      } else {
        targetCards.add(source.idx);
      }
    } else if (target === "hand") {
      for (let k = 0; k < state[S.handCards].length; k++) {
        targetCards.add(state[S.handCards][k]);
      }
    } else if (target === "deck") {
      for (let k = 0; k < state[S.deckCards].length; k++) {
        targetCards.add(state[S.deckCards][k]);
      }
    } else if (target === "discarded") {
      for (let k = 0; k < state[S.discardedCards].length; k++) {
        targetCards.add(state[S.discardedCards][k]);
      }
    } else if (target === "held") {
      for (let k = 0; k < state[S.heldCards].length; k++) {
        targetCards.add(state[S.heldCards][k]);
      }
    } else if (target === "removed") {
      for (let k = 0; k < state[S.removedCards].length; k++) {
        targetCards.add(state[S.removedCards][k]);
      }
    } else if (target === "all") {
      for (let k = 0; k < state[S.cardMap].length; k++) {
        targetCards.add(k);
      }
    } else if (["active", "mental", "trouble"].includes(target)) {
      for (let k = 0; k < state[S.cardMap].length; k++) {
        if (skillCards_default.getById(state[S.cardMap][k].id).type === target) {
          targetCards.add(k);
        }
      }
    } else if (target === "basic") {
      for (let k = 0; k < state[S.cardMap].length; k++) {
        if (skillCards_default.getById(state[S.cardMap][k].id).name.includes("\u57FA\u672C")) {
          targetCards.add(k);
        }
      }
    } else if (target === "pIdol") {
      for (let k = 0; k < state[S.cardMap].length; k++) {
        if (skillCards_default.getById(state[S.cardMap][k].id).sourceType === "pIdol") {
          targetCards.add(k);
        }
      }
    } else if (["T", "N", "R", "SR", "SSR", "L"].includes(target)) {
      const rarity = target;
      for (let k = 0; k < state[S.cardMap].length; k++) {
        if (getCardRarity(state, k) === rarity) {
          targetCards.add(k);
        }
      }
    } else if (/^\d+$/.test(target)) {
      for (let k = 0; k < state[S.cardMap].length; k++) {
        if (state[S.cardMap][k].baseId == target) {
          targetCards.add(k);
        }
      }
    }
    return targetCards;
  }

  // vendor/gakumas-engine/engine/CardManager/index.js
  var NO_EFFECT_CARD_DEBUFFS = [
    { field: S.noGoodConditionTurnsTurns, effect: "goodConditionTurns" },
    { field: S.noConcentrationTurns, effect: "concentration" },
    { field: S.noGoodImpressionTurnsTurns, effect: "goodImpressionTurns" },
    { field: S.noMotivationTurns, effect: "motivation" },
    { field: S.noStrengthTurns, effect: "strength" },
    { field: S.noFullPowerChargeTurns, effect: "fullPowerCharge" }
  ];
  var PATCHABLE_FIELDS = [
    "phase",
    "filter",
    "conditions",
    "targets",
    "actions",
    "effects",
    "limit",
    "ttl",
    "delay",
    "group"
  ];
  function mergePatch(original, delta) {
    const merged = { ...original };
    for (const field of PATCHABLE_FIELDS) {
      if (delta[field] !== void 0) {
        merged[field] = delta[field];
      }
    }
    return merged;
  }
  function actionEffectName(action) {
    if (!action) return null;
    if (action.type === "assignment") return action.lhs;
    if (action.type === "call") {
      if (action.name === "setStance" && action.args.length > 0) {
        const arg = action.args[0];
        return arg.type === "identifier" ? arg.name.replace(/\d/g, "") : String(arg.value).replace(/\d/g, "");
      }
      return action.name;
    }
    if (action.type === "identifier") return action.name;
    return null;
  }
  function isReduction(action) {
    if (action?.type !== "assignment") return false;
    if (action.op === "-=" || action.op === "/=") return true;
    return action.op === "=" && action.rhs?.value === 0;
  }
  function collectActionNames(lines, nestedKey, skipReductions) {
    const names = /* @__PURE__ */ new Set();
    const walk = (entries) => {
      for (const entry of entries || []) {
        for (const action of entry.actions || []) {
          if (skipReductions && isReduction(action)) continue;
          const name = actionEffectName(action);
          if (name) names.add(name);
        }
        if (entry[nestedKey]) walk(entry[nestedKey]);
      }
    };
    walk(lines);
    return names;
  }
  var plainCardProfiles = /* @__PURE__ */ new Map();
  var customizedCardProfiles = /* @__PURE__ */ new WeakMap();
  function getCardProfile(id, c11n) {
    let byId = plainCardProfiles;
    if (c11n) {
      byId = customizedCardProfiles.get(c11n);
      if (!byId) {
        byId = /* @__PURE__ */ new Map();
        customizedCardProfiles.set(c11n, byId);
      }
    }
    let profile = byId.get(id);
    if (!profile) {
      profile = {
        lines: {},
        conditions: null,
        costActions: null,
        effectNames: null,
        costNames: null,
        forceInitialHand: null,
        c11nNoLimit: null
      };
      byId.set(id, profile);
    }
    return profile;
  }
  var CardManager = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.profiledEntries = [];
      this.profiles = [];
      this.variableResolvers = {
        cardHasEffect: (state, effectName) => this.getCardEffects(state, state[S.usedCard]).has(effectName),
        cardHasCost: (state, costName) => this.getCardCosts(state, state[S.usedCard]).has(costName),
        cardSourceType: (state) => this.getCardSourceType(state, state[S.usedCard]),
        cardRarity: (state) => this.getCardRarity(state, state[S.usedCard]),
        usedCardId: (state) => state[S.usedCard] != null && state[S.cardMap][state[S.usedCard]].id,
        usedCardBaseId: (state) => state[S.usedCard] != null && state[S.cardMap][state[S.usedCard]].baseId,
        lastUsedCardType: (state) => state[S.lastUsedCard] != null && skillCards_default.getById(state[S.cardMap][state[S.lastUsedCard]].id).type,
        movedCardId: (state) => state[S.movedCard] != null && state[S.cardMap][state[S.movedCard]].id,
        movedCardBaseId: (state) => state[S.movedCard] != null && state[S.cardMap][state[S.movedCard]].baseId,
        countCards: (state, targetRule) => this.getTargetRuleCards(state, targetRule, null).size
      };
      this.specialActions = {
        drawCard: (state, num) => {
          const n = num == null ? 1 : parseInt(num, 10);
          for (let i = 0; i < n; i++) this.drawCard(state);
        },
        upgradeHand: (state) => this.upgradeHand(state),
        exchangeHand: (state) => this.exchangeHand(state),
        upgradeRandomCardInHand: (state) => this.upgradeRandomCardInHand(state),
        addRandomUpgradedCardToHand: (state) => this.addRandomUpgradedCardToHand(state),
        addRandomUpgradedSSRCardToHand: (state) => this.addRandomUpgradedCardToHand(state, ["SSR"]),
        addRandomBasicCardToDeckAtRandom: (state, num) => this.addRandomBasicCardToDeckAtRandom(state, parseInt(num, 10)),
        addCardToTopOfDeck: (state, cardId) => this.addCardToTopOfDeck(state, cardId),
        addCardToDeck: (state, cardId) => this.addCardToDeck(state, cardId),
        addCardToHand: (state, cardId) => this.addCardToHand(state, cardId),
        addCardToDiscarded: (state, cardId) => this.addCardToDiscarded(state, cardId),
        moveCardToTopOfDeck: (state, cardId, exact) => this.moveCardToTopOfDeck(state, cardId, parseInt(exact, 10)),
        moveCardToHand: (state, cardId, exact) => this.moveCardToHand(state, cardId, parseInt(exact, 10)),
        moveCardToHandFromDeckOrDiscards: (state, cardId, exact) => this.moveCardToHandFromDeckOrDiscards(
          state,
          cardId,
          parseInt(exact, 10)
        ),
        moveSelectedToHand: (state, targetRule, num = 1) => this.moveSelectedToHandByTarget(state, targetRule, parseInt(num, 10)),
        holdCard: (state, cardBaseId) => this.holdCard(state, parseInt(cardBaseId, 10)),
        holdThisCard: (state) => this.holdThisCard(state),
        holdSelected: (state, targetRule, num = 1) => this.holdSelectedByTarget(state, targetRule, parseInt(num, 10)),
        holdSelectedUpto: (state, targetRule, num = 1) => this.holdSelectedByTarget(state, targetRule, parseInt(num, 10), true),
        moveHeldCardsToHand: (state) => this.moveHeldCardsToHand(state),
        useRandomCardFree: (state, targetRule) => this.useRandomCardFree(state, targetRule),
        useAllCardsFree: (state, targetRule) => this.useAllCardsFree(state, targetRule),
        useSelectedCardFree: (state, targetRule, num = 1) => this.useSelectedCardFree(state, targetRule, parseInt(num, 10)),
        // Standardized target-rule card-manipulation actions.
        // Naming: moveRandom* / moveSelected* / moveAll* indicates picking mode.
        moveRandomToHand: (state, targetRule, num = 1) => this.moveToHandByTarget(state, targetRule, parseInt(num, 10)),
        moveSelectedToHand: (state, targetRule, num = 1) => this.moveSelectedToHandByTarget(state, targetRule, parseInt(num, 10)),
        moveAllToHand: (state, targetRule) => this.moveAllToHandByTarget(state, targetRule),
        moveRandomToTopOfDeck: (state, targetRule, num = 1) => this.moveToTopOfDeckByTarget(state, targetRule, parseInt(num, 10)),
        moveSelectedToTopOfDeck: (state, targetRule, num = 1) => this.moveSelectedToTopOfDeckByTarget(
          state,
          targetRule,
          parseInt(num, 10)
        ),
        moveAllToTopOfDeck: (state, targetRule) => this.moveAllToTopOfDeckByTarget(state, targetRule),
        moveAllToBottomOfDeck: (state, targetRule) => this.moveAllToBottomOfDeckByTarget(state, targetRule),
        moveAllToDeck: (state, targetRule) => this.moveToDeckByTarget(state, targetRule),
        holdRandom: (state, targetRule, num = 1) => this.holdRandomByTarget(state, targetRule, parseInt(num, 10)),
        holdAll: (state, targetRule) => this.holdAllByTarget(state, targetRule),
        holdThis: (state) => this.holdThisCard(state),
        useRandomFree: (state, targetRule) => this.useRandomCardFree(state, targetRule),
        useSelected: (state, targetRule, num = 1) => this.useSelectedCard(state, targetRule, parseInt(num, 10)),
        useSelectedFree: (state, targetRule, num = 1) => this.useSelectedCardFree(state, targetRule, parseInt(num, 10)),
        useAllFree: (state, targetRule) => this.useAllCardsFree(state, targetRule),
        removeRandom: (state, targetRule) => this.removeCardByTarget(state, targetRule),
        removeAll: (state, targetRule) => this.removeAllCardsByTarget(state, targetRule),
        copySelectedToBottomOfDeck: (state, targetRule, num = 1) => this.copySelectedToBottomOfDeckByTarget(
          state,
          targetRule,
          parseInt(num, 10)
        ),
        copySelectedToBottomOfDeckUpto: (state, targetRule, num = 1) => this.copySelectedToBottomOfDeckByTarget(
          state,
          targetRule,
          parseInt(num, 10),
          true
        ),
        // Legacy action aliases (keep for backward-compat during migration).
        moveToHand: (state, targetRule, num = 1) => this.moveToHandByTarget(state, targetRule, parseInt(num, 10)),
        moveToTopOfDeck: (state, targetRule, num = 1) => this.moveToTopOfDeckByTarget(state, targetRule, num),
        moveToDeck: (state, targetRule) => this.moveToDeckByTarget(state, targetRule)
      };
    }
    // Targeting delegation
    getTargetRuleCards(state, targetRule, source) {
      return getTargetRuleCards(
        state,
        targetRule,
        source,
        (s, k) => this.getCardEffects(s, k),
        (s, k) => this.getCardCosts(s, k),
        (s, k) => this.getCardRarity(s, k)
      );
    }
    findCardPile(state, card) {
      for (let i = 0; i < CARD_PILES.length; i++) {
        if (state[CARD_PILES[i]].includes(card)) {
          return CARD_PILES[i];
        }
      }
      return null;
    }
    // State initialization
    initializeState(state) {
      this.initialCardMap ??= this.buildInitialCardMap(state);
      state[S.cardMap] = this.initialCardMap.slice();
      this.changeIdol(state);
      state[S.heldCards] = [];
      state[S.cardsUsed] = 0;
      state[S.activeCardsUsed] = 0;
      state[S.usedCard] = null;
      state[S.lastUsedCard] = null;
      state[S.movedCard] = null;
    }
    buildInitialCardMap(state) {
      const config = this.getConfig(state);
      let configs = [config];
      if (config.stage.type === "linkContest") {
        configs = this.engine.linkConfigs || [];
      }
      const cardMaps = [];
      for (let c = 0; c < configs.length; c++) {
        const cards = configs[c].idol.cards.concat(
          configs[c].defaultCardIds.map((id) => ({ id }))
        );
        const cardMap = cards.map(({ id, customizations }) => {
          const card = {
            id,
            baseId: getBaseId(skillCards_default.getById(id))
          };
          if (customizations && Object.keys(customizations).length) {
            card.c11n = customizations;
          }
          return card;
        });
        cardMaps.push(cardMap);
      }
      return cardMaps.flat();
    }
    changeIdol(state) {
      const config = this.getConfig(state);
      let configs = [config];
      if (config.stage.type === "linkContest") {
        configs = this.engine.linkConfigs || [];
      }
      let index = 0;
      for (let c = 0; c < state[S.linkPhase]; c++) {
        index += configs[c].idol.cards.length + configs[c].defaultCardIds.length;
      }
      let deckCards = [];
      const numCards = config.idol.cards.length + config.defaultCardIds.length;
      for (let i = 0; i < numCards; i++) {
        deckCards.push(index + i);
      }
      state[S.deckCards] = deckCards;
      shuffle(state[S.deckCards]);
      state[S.deckCards].sort((a, b) => {
        if (this.isForceInitialHand(state, a)) return 1;
        if (this.isForceInitialHand(state, b)) return -1;
        return 0;
      });
      state[S.handCards] = [];
      state[S.discardedCards] = [];
      state[S.removedCards] = [];
      state[S.turnCardsUsed] = 0;
      state[S.turnCardsUpgraded] = 0;
    }
    profileOf(state, card) {
      const entry = state[S.cardMap][card];
      if (this.profiledEntries[card] === entry) return this.profiles[card];
      const profile = getCardProfile(entry.id, entry.c11n);
      this.profiledEntries[card] = entry;
      this.profiles[card] = profile;
      return profile;
    }
    isForceInitialHand(state, card) {
      const profile = this.profileOf(state, card);
      if (profile.forceInitialHand === null) {
        const { id, c11n } = state[S.cardMap][card];
        profile.forceInitialHand = !!(skillCards_default.getById(id).forceInitialHand || c11n && Object.keys(c11n).filter((k) => c11n[k]).some((k) => customizations_default2.getById(k).forceInitialHand));
      }
      return profile.forceInitialHand;
    }
    // Card queries
    // Returned lines are shared across calls and must not be mutated.
    getLines(state, card, attribute) {
      const profile = this.profileOf(state, card);
      let lines = profile.lines[attribute];
      if (lines === void 0) {
        lines = profile.lines[attribute] = this.computeLines(
          state[S.cardMap][card],
          attribute
        ).map(normalizeEffect);
      }
      return lines;
    }
    computeLines({ id, c11n }, attribute) {
      const skillCard = skillCards_default.getById(id);
      let attr = skillCard[attribute] || [];
      if (!c11n || !Object.keys(c11n).length) return attr;
      attr = attr.map((e) => ({ ...e }));
      for (let k in c11n) {
        const patches = customizations_default2.getById(k)[attribute] || [];
        for (let i = 0; i < patches.length; i++) {
          const patch = patches[i];
          if ((patch.level || 1) != c11n[k]) continue;
          if (patch.op === "append") {
            attr = attr.concat(patch.effect);
          } else if (patch.op === "patch") {
            const idx = attr.findIndex((e) => e.anchor === patch.anchor);
            if (idx < 0) {
              console.warn(
                `Customization ${k} references unknown anchor '@${patch.anchor}' on skill card ${skillCard.id}`
              );
              continue;
            }
            attr[idx] = mergePatch(attr[idx], patch.delta);
          }
        }
      }
      return attr;
    }
    getConditions(state, card) {
      const profile = this.profileOf(state, card);
      if (profile.conditions === null) {
        profile.conditions = this.getLines(state, card, "conditions").map((c) => c.conditions).flat();
      }
      return profile.conditions;
    }
    getCostActions(state, card) {
      const profile = this.profileOf(state, card);
      if (profile.costActions === null) {
        profile.costActions = this.getLines(state, card, "cost").map((c) => c.actions).flat();
      }
      return profile.costActions;
    }
    // Walks every action in every effect, recursing into nested `effects`
    // (from conditional-phase blocks like `if:X { at:phase { Y } }`) so the
    // stage's `cardEffects & X` check matches cards where the relevant
    // action only appears in a deferred/conditional branch — parity with
    // legacy, which reads from a flat effects list where those actions are
    // already top-level entries. The returned Set is shared; don't mutate.
    getCardEffects(state, card) {
      if (card == null) return /* @__PURE__ */ new Set();
      const profile = this.profileOf(state, card);
      if (profile.effectNames === null) {
        profile.effectNames = collectActionNames(
          this.getLines(state, card, "actions"),
          "effects",
          true
        );
      }
      return profile.effectNames;
    }
    getCardCosts(state, card) {
      if (card == null) return /* @__PURE__ */ new Set();
      const profile = this.profileOf(state, card);
      if (profile.costNames === null) {
        profile.costNames = collectActionNames(
          this.getLines(state, card, "cost"),
          "costs"
        );
      }
      return profile.costNames;
    }
    // A limited card is still discarded (not removed) when one of its
    // customizations lifts the limit.
    hasC11nLiftingLimit(state, card) {
      const profile = this.profileOf(state, card);
      if (profile.c11nNoLimit === null) {
        const c11n = state[S.cardMap][card].c11n;
        profile.c11nNoLimit = !!(c11n && Object.keys(c11n).map(customizations_default2.getById).some((c) => c11n[c.id] && c?.limit === 0));
      }
      return profile.c11nNoLimit;
    }
    getCardSourceType(state, card) {
      if (card == null) return null;
      const skillCard = skillCards_default.getById(state[S.cardMap][card].id);
      return skillCard.sourceType;
    }
    getCardRarity(state, card) {
      if (card == null) return null;
      const skillCard = skillCards_default.getById(state[S.cardMap][card].id);
      return skillCard.rarity;
    }
    // Card usability
    isCardUsable(state, card) {
      const skillCard = skillCards_default.getById(state[S.cardMap][card].id);
      if (state[S.noCardUseTurns]) return false;
      if (state[S.noActiveTurns] && skillCard.type == "active") return false;
      if (state[S.noMentalTurns] && skillCard.type == "mental") return false;
      for (let i = 0; i < NO_EFFECT_CARD_DEBUFFS.length; i++) {
        const { field, effect } = NO_EFFECT_CARD_DEBUFFS[i];
        if (state[field] && this.getCardEffects(state, card).has(effect)) {
          return false;
        }
      }
      const conditions = this.getConditions(state, card);
      for (let i = 0; i < conditions.length; i++) {
        if (!this.engine.evaluator.evaluateCondition(state, conditions[i])) {
          return false;
        }
      }
      const cost = this.getCostActions(state, card);
      const growth = state[S.cardMap][card].growth;
      const previewState = shallowCopy(state);
      previewState[S.phase] = "checkCost";
      for (let i = 0; i < cost.length; i++) {
        this.engine.executor.executeAction(previewState, cost[i], growth);
      }
      for (let i = 0; i < COST_FIELDS.length; i++) {
        if (previewState[COST_FIELDS[i]] < 0) return false;
      }
      return true;
    }
    // Card usage
    useCard(state, card, pile = S.handCards) {
      const usingFree = state[S.freeCardUses] > 0;
      const usingPaid = state[S.paidCardUses] > 0;
      const pileIndex = state[pile].indexOf(card);
      const skillCard = skillCards_default.getById(state[S.cardMap][card].id);
      this.logger.log(state, "entityStart", {
        type: "skillCard",
        id: skillCard.id
      });
      this.logger.debug("Using card", skillCard.id, skillCard.name);
      state[S.usedCard] = card;
      this.engine.effectManager.triggerEffectsForPhase(
        state,
        "beforeCardUsed"
      );
      let conditionState = shallowCopy(state);
      this.logger.debug("Applying cost", skillCard.cost);
      const cost = this.getCostActions(state, card);
      const hasStaminaCost = cost.some(
        (action) => action.lhs === "cost" || action.lhs === "stamina"
      );
      let skipActions = false;
      if (usingFree) {
        const conditions = this.getConditions(state, card);
        for (let i = 0; i < conditions.length; i++) {
          if (!this.engine.evaluator.evaluateCondition(state, conditions[i])) {
            skipActions = true;
            break;
          }
        }
      } else if (hasStaminaCost && state[S.nullifyCostCards]) {
        state[S.nullifyCostCards]--;
      } else if (hasStaminaCost && skillCard.type === "active" && state[S.nullifyCostActiveCards]) {
        state[S.nullifyCostActiveCards]--;
      } else {
        state[S.phase] = "processCost";
        this.engine.executor.executeActions(state, cost, card);
        state[S.phase] = void 0;
      }
      state[pile].splice(pileIndex, 1);
      if (!usingFree && !usingPaid) {
        state[S.cardUsesRemaining]--;
      }
      this.engine.effectManager.triggerEffectsForPhase(
        state,
        "cardUsed",
        conditionState
      );
      if (skillCard.type == "active") {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "activeCardUsed",
          conditionState
        );
      } else if (skillCard.type == "mental") {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "mentalCardUsed",
          conditionState
        );
      }
      if (!skipActions) {
        const actions = this.getLines(state, card, "actions");
        state[S.phase] = "processCard";
        if (state[S.doubleCardEffectCards] && skillCard.rarity !== "L") {
          state[S.doubleCardEffectCards]--;
          state[S.effectInstanceId]++;
          this.engine.effectManager.triggerEffects(state, actions, null, card);
        }
        state[S.effectInstanceId]++;
        this.engine.effectManager.triggerEffects(state, actions, null, card);
        state[S.phase] = void 0;
      }
      state[S.cardsUsed]++;
      state[S.turnCardsUsed]++;
      if (skillCard.type == "active") {
        state[S.activeCardsUsed]++;
      }
      const beforeCardUsedState = conditionState;
      conditionState = shallowCopy(state);
      if (state[S.thisCardHeld]) {
        state[S.thisCardHeld] = false;
      } else if (!skillCard.limit) {
        state[S.discardedCards].push(card);
      } else if (this.hasC11nLiftingLimit(state, card)) {
        state[S.discardedCards].push(card);
      } else {
        state[S.removedCards].push(card);
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "cardRemoved",
          conditionState
        );
      }
      if (state[S.buffCostConsumed]) {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "buffCostConsumed",
          beforeCardUsedState
        );
        state[S.buffCostConsumed] = false;
      }
      this.engine.effectManager.triggerEffectsForPhase(
        state,
        "afterCardUsed",
        conditionState
      );
      if (skillCard.type == "active") {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "afterActiveCardUsed",
          conditionState
        );
      } else if (skillCard.type == "mental") {
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "afterMentalCardUsed",
          conditionState
        );
      }
      state[S.lastUsedCard] = state[S.usedCard];
      state[S.usedCard] = null;
      this.logger.log(state, "entityEnd", {
        type: "skillCard",
        id: skillCard.id
      });
      if (!usingFree && !usingPaid && state[S.cardUsesRemaining] < 1) {
        this.engine.turnManager.endTurn(state);
      }
    }
    // Card manipulation
    grow(state, cards, actions) {
      for (let i = 0; i < cards.length; i++) {
        const orig = state[S.cardMap][cards[i]];
        const card = { ...orig, growth: { ...orig.growth } };
        state[S.cardMap][cards[i]] = card;
        this.engine.executor.executeGrowthActions(card.growth, actions);
        this.logger.log(state, "growth", { type: "skillCard", id: card.id });
      }
    }
    drawCard(state) {
      if (state[S.handCards].length >= 5) return;
      if (!state[S.deckCards].length) {
        if (!state[S.discardedCards].length) return;
        this.recycleDiscards(state);
      }
      const card = state[S.deckCards].pop();
      state[S.handCards].push(card);
      state[S.movedCard] = card;
      this.engine.effectManager.triggerEffectsForPhase(state, "cardMovedToHand");
      this.logger.debug(
        "Drew card",
        skillCards_default.getById(state[S.cardMap][card].id).name
      );
      this.logger.log(state, "drawCard", {
        type: "skillCard",
        id: state[S.cardMap][card].id
      });
    }
    recycleDiscards(state) {
      shuffle(state[S.discardedCards]);
      state[S.deckCards] = state[S.discardedCards];
      state[S.discardedCards] = [];
      this.logger.debug("Recycled discard pile");
    }
    peekDeck(state) {
      return state[S.deckCards][state[S.deckCards].length - 1];
    }
    isUpgradable(state, card) {
      const skillCard = skillCards_default.getById(state[S.cardMap][card].id);
      return !skillCard.upgraded && skillCard.type != "trouble" && skillCard.rarity != "L";
    }
    upgrade(state, card) {
      const orig = state[S.cardMap][card];
      state[S.cardMap][card] = { ...orig, id: orig.id + 1 };
      state[S.turnCardsUpgraded]++;
    }
    discardHand(state) {
      while (state[S.handCards].length) {
        state[S.discardedCards].push(state[S.handCards].pop());
      }
    }
    upgradeHand(state) {
      for (let i = 0; i < state[S.handCards].length; i++) {
        if (this.isUpgradable(state, state[S.handCards][i])) {
          this.upgrade(state, state[S.handCards][i]);
        }
      }
      this.logger.log(state, "upgradeHand");
    }
    exchangeHand(state) {
      const numCards = state[S.handCards].length;
      this.discardHand(state);
      this.logger.log(state, "exchangeHand");
      for (let i = 0; i < numCards; i++) {
        this.drawCard(state);
      }
    }
    upgradeRandomCardInHand(state) {
      let unupgradedCards = [];
      for (let i = 0; i < state[S.handCards].length; i++) {
        if (this.isUpgradable(state, state[S.handCards][i])) {
          unupgradedCards.push(state[S.handCards][i]);
        }
      }
      if (!unupgradedCards.length) return;
      const randomCard = unupgradedCards[Math.floor(getRand() * unupgradedCards.length)];
      this.upgrade(state, randomCard);
      this.logger.log(state, "upgradeRandomCardInHand", {
        type: "skillCard",
        id: state[S.cardMap][randomCard].id
      });
    }
    addRandomUpgradedCardToHand(state, rarities = ["R", "SR", "SSR"]) {
      if (state[S.handCards].length >= 5) return;
      const validSkillCards = skillCards_default.getFiltered({
        rarities,
        plans: [this.getConfig(state).idol.plan, "free"],
        sourceTypes: ["produce"]
      }).filter((card) => card.upgraded);
      const skillCard = validSkillCards[Math.floor(getRand() * validSkillCards.length)];
      state[S.cardMap].push({
        id: skillCard.id,
        baseId: getBaseId(skillCard)
      });
      state[S.handCards].push(state[S.cardMap].length - 1);
      this.logger.log(state, "addCardToHand", {
        type: "skillCard",
        id: skillCard.id
      });
    }
    addRandomBasicCardToDeckAtRandom(state, num) {
      const validSkillCards = [...new Set(this.getConfig(state).defaultCardIds)];
      if (!validSkillCards.length) return;
      for (let i = 0; i < num; i++) {
        const cardId = validSkillCards[Math.floor(getRand() * validSkillCards.length)];
        this.addCardToDeck(state, cardId);
      }
    }
    addCardToTopOfDeck(state, cardId) {
      const skillCard = skillCards_default.getById(cardId);
      state[S.cardMap].push({
        id: skillCard.id,
        baseId: getBaseId(skillCard)
      });
      state[S.deckCards].push(state[S.cardMap].length - 1);
      this.logger.log(state, "addCardToTopOfDeck", {
        type: "skillCard",
        id: skillCard.id
      });
    }
    addCardToDeck(state, cardId) {
      const skillCard = skillCards_default.getById(cardId);
      state[S.cardMap].push({
        id: skillCard.id,
        baseId: getBaseId(skillCard)
      });
      const cardIdx = state[S.cardMap].length - 1;
      const insertPos = Math.floor(getRand() * (state[S.deckCards].length + 1));
      state[S.deckCards].splice(insertPos, 0, cardIdx);
      this.logger.log(state, "addCardToDeckAtRandom", {
        type: "skillCard",
        id: skillCard.id
      });
    }
    addCardToHand(state, cardId) {
      if (state[S.handCards].length >= 5) return;
      const skillCard = skillCards_default.getById(cardId);
      state[S.cardMap].push({
        id: skillCard.id,
        baseId: getBaseId(skillCard)
      });
      state[S.handCards].push(state[S.cardMap].length - 1);
      this.logger.log(state, "addCardToHand", {
        type: "skillCard",
        id: skillCard.id
      });
    }
    addCardToDiscarded(state, cardId) {
      const skillCard = skillCards_default.getById(cardId);
      state[S.cardMap].push({
        id: skillCard.id,
        baseId: getBaseId(skillCard)
      });
      state[S.discardedCards].push(state[S.cardMap].length - 1);
      this.logger.log(state, "addCardToDiscarded", {
        type: "skillCard",
        id: skillCard.id
      });
    }
    moveCardToHand(state, cardId, exact) {
      if (state[S.handCards].length >= 5) return;
      let matchingCards = [];
      for (let pile of CARD_PILES) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          const card = state[S.cardMap][cardIdx];
          if (exact && card.id == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          } else if (!exact && card.baseId == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          }
        }
      }
      if (!matchingCards.length) return;
      const pick = matchingCards[Math.floor(getRand() * matchingCards.length)];
      state[pick.pile].splice(pick.index, 1);
      state[S.handCards].push(pick.cardIdx);
      state[S.movedCard] = pick.cardIdx;
      this.engine.effectManager.triggerEffectsForPhase(state, "cardMovedToHand");
      this.logger.log(state, "moveCardToHand", {
        type: "skillCard",
        id: state[S.cardMap][pick.cardIdx].id
      });
    }
    moveCardToHandFromDeckOrDiscards(state, cardId, exact) {
      if (state[S.handCards].length >= 5) return;
      let matchingCards = [];
      for (let pile of [S.deckCards, S.discardedCards]) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          const card = state[S.cardMap][cardIdx];
          if (exact && card.id == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          } else if (!exact && card.baseId == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          }
        }
      }
      if (!matchingCards.length) return;
      const pick = matchingCards[Math.floor(getRand() * matchingCards.length)];
      state[pick.pile].splice(pick.index, 1);
      state[S.handCards].push(pick.cardIdx);
      state[S.movedCard] = pick.cardIdx;
      this.engine.effectManager.triggerEffectsForPhase(state, "cardMovedToHand");
      this.logger.log(state, "moveCardToHand", {
        type: "skillCard",
        id: state[S.cardMap][pick.cardIdx].id
      });
    }
    // Hold actions
    hold(state, card) {
      if (card != null && !state[S.heldCards].includes(card)) {
        state[S.heldCards].push(card);
        this.logger.log(state, "holdCard", {
          type: "skillCard",
          id: state[S.cardMap][card].id
        });
        state[S.movedCard] = card;
        this.engine.effectManager.triggerEffectsForPhase(state, "cardMovedToHeld");
      }
    }
    enforceHoldLimit(state) {
      while (state[S.heldCards].length > 2) {
        const discardedCard = state[S.heldCards].shift();
        state[S.discardedCards].push(discardedCard);
        this.logger.log(state, "discardCard", {
          type: "skillCard",
          id: state[S.cardMap][discardedCard].id
        });
      }
    }
    holdCard(state, cardBaseId) {
      const card = state[S.cardMap].findIndex((c) => c.baseId == cardBaseId);
      for (let i = 0; i < CARD_PILES.length; i++) {
        const index = state[CARD_PILES[i]].indexOf(card);
        if (index != -1) {
          state[CARD_PILES[i]].splice(index, 1);
          this.hold(state, card);
          break;
        }
      }
      this.enforceHoldLimit(state);
    }
    holdThisCard(state) {
      this.hold(state, state[S.usedCard]);
      this.enforceHoldLimit(state);
      state[S.thisCardHeld] = true;
    }
    moveHeldCardsToHand(state) {
      const movedCards = [];
      while (state[S.heldCards].length) {
        const card = state[S.heldCards].pop();
        state[S.handCards].push(card);
        movedCards.push(card);
      }
      for (const card of movedCards) {
        state[S.movedCard] = card;
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "cardMovedToHand"
        );
        this.logger.log(state, "moveCardToHand", {
          type: "skillCard",
          id: state[S.cardMap][card].id
        });
      }
    }
    // Target-based card manipulation
    moveSelectedToHandByTarget(state, targetRule, num = 1) {
      if (state[S.nullifySelect]) return;
      if (state[S.handCards].length >= 5) return;
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const cards = Array.from(targetCards);
      if (!cards.length) return;
      const indicesToMove = this.engine.strategy.pickCardsToMoveToHand(
        state,
        cards,
        Math.min(num, cards.length)
      );
      if (indicesToMove.length === 0) return;
      for (let j = 0; j < indicesToMove.length; j++) {
        if (state[S.handCards].length >= 5) break;
        const cardIdx = cards[indicesToMove[j]];
        for (let i = 0; i < CARD_PILES.length; i++) {
          const pileIndex = state[CARD_PILES[i]].indexOf(cardIdx);
          if (pileIndex !== -1) {
            state[CARD_PILES[i]].splice(pileIndex, 1);
            state[S.handCards].push(cardIdx);
            state[S.movedCard] = cardIdx;
            this.engine.effectManager.triggerEffectsForPhase(
              state,
              "cardMovedToHand"
            );
            this.logger.log(state, "moveCardToHand", {
              type: "skillCard",
              id: state[S.cardMap][cardIdx].id
            });
            break;
          }
        }
      }
    }
    holdSelectedByTarget(state, targetRule, num = 1, optional = false) {
      if (state[S.nullifySelect]) return;
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const cards = Array.from(targetCards);
      if (!cards.length) return;
      const indicesToHold = this.engine.strategy.pickCardsToHold(
        state,
        cards,
        Math.min(num, cards.length),
        optional
      );
      if (indicesToHold.length === 0) return;
      for (let j = 0; j < indicesToHold.length; j++) {
        const cardIdx = cards[indicesToHold[j]];
        for (let i = 0; i < CARD_PILES.length; i++) {
          const pileIndex = state[CARD_PILES[i]].indexOf(cardIdx);
          if (pileIndex !== -1) {
            state[CARD_PILES[i]].splice(pileIndex, 1);
            break;
          }
        }
      }
      for (let j = 0; j < indicesToHold.length; j++) {
        this.hold(state, cards[indicesToHold[j]]);
      }
      this.enforceHoldLimit(state);
    }
    useRandomCardFree(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule);
      if (!targetCards.size) return;
      const card = [...targetCards][Math.floor(getRand() * targetCards.size)];
      const pile = this.findCardPile(state, card);
      if (!pile) return;
      state[S.freeCardUses]++;
      this.useCard(state, card, pile);
      state[S.freeCardUses]--;
    }
    useAllCardsFree(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule);
      if (!targetCards.size) return;
      for (const card of targetCards) {
        const pile = this.findCardPile(state, card);
        if (pile) {
          state[S.freeCardUses]++;
          this.useCard(state, card, pile);
          state[S.freeCardUses]--;
        }
      }
    }
    useSelectedCard(state, targetRule, num = 1) {
      if (state[S.nullifySelect]) return;
      const targetCards = this.getTargetRuleCards(state, targetRule);
      const cards = [...targetCards];
      if (!cards.length) return;
      const indicesToUse = this.engine.strategy.pickCardsToUseFree(
        state,
        cards,
        Math.min(num, cards.length)
      );
      if (!indicesToUse || indicesToUse.length === 0) return;
      for (let j = 0; j < indicesToUse.length; j++) {
        const card = cards[indicesToUse[j]];
        const pile = this.findCardPile(state, card);
        if (pile) {
          if (this.isCardUsable(state, card)) {
            state[S.paidCardUses]++;
            this.useCard(state, card, pile);
            state[S.paidCardUses]--;
          } else {
            const pileIndex = state[pile].indexOf(card);
            state[pile].splice(pileIndex, 1);
            state[S.discardedCards].push(card);
          }
        }
      }
    }
    useSelectedCardFree(state, targetRule, num = 1) {
      if (state[S.nullifySelect]) return;
      const targetCards = this.getTargetRuleCards(state, targetRule);
      const cards = [...targetCards];
      if (!cards.length) return;
      const indicesToUse = this.engine.strategy.pickCardsToUseFree(
        state,
        cards,
        Math.min(num, cards.length)
      );
      if (!indicesToUse || indicesToUse.length === 0) return;
      for (let j = 0; j < indicesToUse.length; j++) {
        const card = cards[indicesToUse[j]];
        const pile = this.findCardPile(state, card);
        if (pile) {
          state[S.freeCardUses]++;
          this.useCard(state, card, pile);
          state[S.freeCardUses]--;
        }
      }
    }
    removeCardByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const piles = [S.deckCards, S.discardedCards, S.handCards];
      let candidates = [];
      for (let pile of piles) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          if (targetCards.has(cardIdx)) {
            candidates.push({ pile, index: i, cardIdx });
          }
        }
      }
      if (!candidates.length) return;
      const pick = candidates[Math.floor(getRand() * candidates.length)];
      state[pick.pile].splice(pick.index, 1);
      state[S.removedCards].push(pick.cardIdx);
      this.logger.log(state, "removeCard", {
        type: "skillCard",
        id: state[S.cardMap][pick.cardIdx].id
      });
    }
    // UNVERIFIED: which piles 全て除外 reaches is not yet checked against a
    // capture.
    removeAllCardsByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const piles = [S.deckCards, S.discardedCards, S.handCards];
      for (const pile of piles) {
        for (let i = state[pile].length - 1; i >= 0; i--) {
          const cardIdx = state[pile][i];
          if (!targetCards.has(cardIdx)) continue;
          state[pile].splice(i, 1);
          state[S.removedCards].push(cardIdx);
          this.logger.log(state, "removeCard", {
            type: "skillCard",
            id: state[S.cardMap][cardIdx].id
          });
        }
      }
    }
    moveAllToHandByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const piles = [S.deckCards, S.discardedCards, S.removedCards];
      let candidates = [];
      for (let pile of piles) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          if (targetCards.has(cardIdx))
            candidates.push({ pile, index: i, cardIdx });
        }
      }
      candidates.sort((a, b) => a.pile === b.pile ? b.index - a.index : 0);
      for (const pick of candidates) {
        if (state[S.handCards].length >= 5) break;
        state[pick.pile].splice(pick.index, 1);
        state[S.handCards].push(pick.cardIdx);
        state[S.movedCard] = pick.cardIdx;
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "cardMovedToHand"
        );
        this.logger.log(state, "moveCardToHand", {
          type: "skillCard",
          id: state[S.cardMap][pick.cardIdx].id
        });
      }
    }
    moveAllToTopOfDeckByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const piles = [S.deckCards, S.discardedCards, S.removedCards];
      let candidates = [];
      for (let pile of piles) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          if (targetCards.has(cardIdx))
            candidates.push({ pile, index: i, cardIdx });
        }
      }
      candidates.sort((a, b) => a.pile === b.pile ? b.index - a.index : 0);
      for (const pick of candidates) {
        state[pick.pile].splice(pick.index, 1);
        state[S.deckCards].push(pick.cardIdx);
        state[S.movedCard] = pick.cardIdx;
        this.logger.log(state, "moveCardToTopOfDeck", {
          type: "skillCard",
          id: state[S.cardMap][pick.cardIdx].id
        });
      }
    }
    // The bottom of the deck is index 0 (cards are drawn from the end).
    // UNVERIFIED: which piles this reaches, and the order the cards end up
    // in, are not yet checked against a capture.
    moveAllToBottomOfDeckByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const piles = [S.handCards, S.deckCards, S.discardedCards, S.removedCards];
      const moved = [];
      for (const pile of piles) {
        const kept = [];
        for (const cardIdx of state[pile]) {
          (targetCards.has(cardIdx) ? moved : kept).push(cardIdx);
        }
        state[pile] = kept;
      }
      if (!moved.length) return;
      state[S.deckCards] = moved.concat(state[S.deckCards]);
      for (const cardIdx of moved) {
        state[S.movedCard] = cardIdx;
        this.logger.log(state, "moveCardToBottomOfDeck", {
          type: "skillCard",
          id: state[S.cardMap][cardIdx].id
        });
      }
    }
    // Copies keep the original's growth and customizations.
    // UNVERIFIED: not yet checked against a capture.
    copySelectedToBottomOfDeckByTarget(state, targetRule, num = 1, optional = false) {
      if (state[S.nullifySelect]) return;
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const cards = Array.from(targetCards);
      if (!cards.length) return;
      const selectedIndices = this.engine.strategy.pickCardsToCopy(
        state,
        cards,
        Math.min(num, cards.length),
        optional
      );
      for (const selectedIndex of selectedIndices) {
        const original = state[S.cardMap][cards[selectedIndex]];
        if (original == null) continue;
        state[S.cardMap].push({ ...original });
        state[S.deckCards].unshift(state[S.cardMap].length - 1);
        this.logger.log(state, "addCardToBottomOfDeck", {
          type: "skillCard",
          id: original.id
        });
      }
    }
    moveSelectedToTopOfDeckByTarget(state, targetRule, num = 1) {
      if (state[S.nullifySelect]) return;
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const cards = Array.from(targetCards);
      if (!cards.length) return;
      const selectedIndices = this.engine.strategy.pickCardsToMoveToTopOfDeck(
        state,
        cards,
        Math.min(num, cards.length)
      );
      for (const selectedIndex of selectedIndices) {
        const cardIdx = cards[selectedIndex];
        if (cardIdx == null) continue;
        for (const pileName of CARD_PILES) {
          const pile = state[pileName];
          const pileIndex = pile.indexOf(cardIdx);
          if (pileIndex === -1) continue;
          pile.splice(pileIndex, 1);
          state[S.deckCards].push(cardIdx);
          state[S.movedCard] = cardIdx;
          this.logger.log(state, "moveCardToTopOfDeck", {
            type: "skillCard",
            id: state[S.cardMap][cardIdx].id
          });
          break;
        }
      }
    }
    holdRandomByTarget(state, targetRule, num = 1) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const cards = Array.from(targetCards);
      if (!cards.length) return;
      for (let j = 0; j < num && cards.length > 0; j++) {
        const pickIndex = Math.floor(getRand() * cards.length);
        const cardIdx = cards.splice(pickIndex, 1)[0];
        for (let i = 0; i < CARD_PILES.length; i++) {
          const pileIdx = state[CARD_PILES[i]].indexOf(cardIdx);
          if (pileIdx !== -1) {
            state[CARD_PILES[i]].splice(pileIdx, 1);
            this.hold(state, cardIdx);
            break;
          }
        }
      }
      this.enforceHoldLimit(state);
    }
    holdAllByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      for (const cardIdx of targetCards) {
        for (let i = 0; i < CARD_PILES.length; i++) {
          const pile = state[CARD_PILES[i]];
          const idx = pile.indexOf(cardIdx);
          if (idx !== -1) {
            pile.splice(idx, 1);
            this.hold(state, cardIdx);
            break;
          }
        }
      }
      this.enforceHoldLimit(state);
    }
    // Shared helper: find candidates matching a target rule in the given piles.
    findCardsMatchingTargetInPiles(state, targetRule, piles) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      const candidates = [];
      for (const pile of piles) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          if (targetCards.has(cardIdx)) {
            candidates.push({ pile, index: i, cardIdx });
          }
        }
      }
      return candidates;
    }
    // Shared helper: move a candidate card from its pile to the destination pile.
    // Caller is responsible for any further effects/logs that depend on the move.
    moveCardBetweenPiles(state, pick, destPile, candidates) {
      if (candidates) {
        for (const c of candidates) {
          if (c.pile === pick.pile && c.index > pick.index) c.index--;
        }
      }
      state[pick.pile].splice(pick.index, 1);
      state[destPile].push(pick.cardIdx);
    }
    moveToHandByTarget(state, targetRule, num = 1) {
      if (state[S.handCards].length >= 5) return;
      const piles = [
        S.deckCards,
        S.discardedCards,
        S.removedCards,
        S.heldCards,
        S.handCards
      ];
      const candidates = this.findCardsMatchingTargetInPiles(
        state,
        targetRule,
        piles
      );
      for (let j = 0; j < num && candidates.length; j++) {
        if (state[S.handCards].length >= 5) break;
        const pickIndex = Math.floor(getRand() * candidates.length);
        const pick = candidates.splice(pickIndex, 1)[0];
        this.moveCardBetweenPiles(state, pick, S.handCards, candidates);
        state[S.movedCard] = pick.cardIdx;
        this.engine.effectManager.triggerEffectsForPhase(
          state,
          "cardMovedToHand"
        );
        this.logger.log(state, "moveCardToHand", {
          type: "skillCard",
          id: state[S.cardMap][pick.cardIdx].id
        });
      }
    }
    moveCardToTopOfDeck(state, cardId, exact = false) {
      let matchingCards = [];
      for (let pile of [S.deckCards, S.discardedCards, S.removedCards]) {
        for (let i = 0; i < state[pile].length; i++) {
          const cardIdx = state[pile][i];
          const card = state[S.cardMap][cardIdx];
          if (exact && card.id == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          } else if (!exact && card.baseId == cardId) {
            matchingCards.push({ pile, index: i, cardIdx });
          }
        }
      }
      if (!matchingCards.length) return;
      const pick = matchingCards[Math.floor(getRand() * matchingCards.length)];
      state[pick.pile].splice(pick.index, 1);
      state[S.deckCards].push(pick.cardIdx);
      state[S.movedCard] = pick.cardIdx;
      this.logger.log(state, "moveCardToTopOfDeck", {
        type: "skillCard",
        id: state[S.cardMap][pick.cardIdx].id
      });
    }
    moveToTopOfDeckByTarget(state, targetRule, num = 1) {
      const candidates = this.findCardsMatchingTargetInPiles(state, targetRule, [
        S.handCards,
        S.deckCards,
        S.discardedCards,
        S.removedCards
      ]);
      for (let j = 0; j < num && candidates.length; j++) {
        const pickIndex = Math.floor(getRand() * candidates.length);
        const pick = candidates.splice(pickIndex, 1)[0];
        this.moveCardBetweenPiles(state, pick, S.deckCards, candidates);
        state[S.movedCard] = pick.cardIdx;
        this.logger.log(state, "moveCardToTopOfDeck", {
          type: "skillCard",
          id: state[S.cardMap][pick.cardIdx].id
        });
      }
    }
    moveToDeckByTarget(state, targetRule) {
      const targetCards = this.getTargetRuleCards(state, targetRule, null);
      let candidates = [];
      for (let i = 0; i < state[S.removedCards].length; i++) {
        const cardIdx = state[S.removedCards][i];
        if (targetCards.has(cardIdx)) {
          candidates.push({ index: i, cardIdx });
        }
      }
      candidates.sort((a, b) => b.index - a.index);
      for (let pick of candidates) {
        state[S.removedCards].splice(pick.index, 1);
        const insertIndex = Math.floor(
          getRand() * (state[S.deckCards].length + 1)
        );
        state[S.deckCards].splice(insertIndex, 0, pick.cardIdx);
        this.logger.log(state, "moveCardToDeckAtRandom", {
          type: "skillCard",
          id: state[S.cardMap][pick.cardIdx].id
        });
      }
    }
  };

  // vendor/gakumas-engine/engine/EffectManager.js
  function anyHasConditions(effects) {
    for (let i = 0; i < effects.length; i++) {
      if (effects[i].conditions) return true;
    }
    return false;
  }
  var EffectManager = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.registeredPhases = /* @__PURE__ */ new Set();
    }
    initializeState(state) {
      const config = this.getConfig(state);
      state[S.effects] = [];
      state[S.effectInstanceId] = 0;
      state[S.effectCounters] = {};
      state[S.currentEffectInstanceId] = null;
      this.logger.debug("Setting default effects", DEFAULT_EFFECTS);
      this.setEffects(state, DEFAULT_EFFECTS);
      this.logger.debug("Setting stage effects", config.stage.effects);
      this.setEffects(state, config.stage.effects, {
        type: "stage",
        primary: true
      });
      state[S.effectInstanceId]++;
      let configs = [config];
      if (config.stage.type === "linkContest") {
        configs = this.engine.linkConfigs || [];
      }
      for (let c = 0; c < configs.length; c++) {
        const { pItemIds } = configs[c].idol;
        for (let i = 0; i < pItemIds.length; i++) {
          const pItem = pItems_default.getById(pItemIds[i]);
          this.logger.debug("Setting p-item effects", pItem.name, pItem.effects);
          this.setEffects(state, pItem.effects, {
            type: "pItem",
            id: pItemIds[i],
            primary: true
          });
          state[S.effectInstanceId]++;
        }
      }
      this.initializeCardEffects(state);
    }
    initializeCardEffects(state) {
      for (let i = 0; i < state[S.cardMap].length; i++) {
        const skillCardId = state[S.cardMap][i].id;
        const skillCard = skillCards_default.getById(skillCardId);
        const cardEffects = this.engine.cardManager.getLines(state, i, "effects");
        if (cardEffects.length) {
          this.logger.debug("Setting card effects", skillCard.name, cardEffects);
          this.setEffects(state, cardEffects, {
            type: "skillCard",
            id: skillCardId,
            idx: i,
            primary: true
          });
          state[S.effectInstanceId]++;
        }
      }
    }
    setEffects(state, effects, source) {
      for (let i = 0; i < effects.length; i++) {
        const effect = normalizeEffect(effects[i]);
        effect.effectInstanceId = state[S.effectInstanceId];
        if (source) {
          effect.source = source;
        }
        if (effect.phase == "turn" && effect.limit == 1) {
          effect.type = "reservation";
        }
        this.registeredPhases.add(effect.phase);
        state[S.effects].push(effect);
      }
    }
    clearPrestageEffects(state) {
      state[S.effects] = state[S.effects].filter(
        (effect) => effect.phase != "prestage"
      );
    }
    clearExpiredEffects(state) {
      state[S.effects] = state[S.effects].map((effect) => {
        if (effect.limit != null && effect.limit < 1 && !isPIdolPItemEffect(effect))
          return {};
        if (effect.ttl != null && effect.ttl < 0) return {};
        return effect;
      });
    }
    triggerEffectsForPhase(state, phase, conditionState, registeredBefore = state[S.effects].length) {
      if (!this.registeredPhases.has(phase)) return;
      const effectList = state[S.effects];
      let anyMatch = false;
      for (let i = 0; i < registeredBefore; i++) {
        if (effectList[i].phase === phase) {
          anyMatch = true;
          break;
        }
      }
      if (!anyMatch) return;
      const outerPhase = state[S.phase];
      const outerParentPhase = state[S.parentPhase];
      state[S.parentPhase] = outerPhase;
      state[S.phase] = phase;
      let matched = null;
      let matchedIndices = null;
      let grouped = false;
      for (let i = 0; i < registeredBefore; i++) {
        const effect = effectList[i];
        if (effect.phase !== phase) continue;
        if (effect.filter) {
          const sourceCard = state[S.usedCard];
          if (sourceCard == null) continue;
          const matching = this.engine.cardManager.getTargetRuleCards(
            state,
            effect.filter,
            null
          );
          if (!matching.has(sourceCard)) continue;
        }
        if (!matched) {
          matched = [];
          matchedIndices = [];
        }
        matched.push(effect);
        matchedIndices.push(i);
        if (effect.group) grouped = true;
      }
      if (matched) {
        this.logger.debug(phase, matched);
        if (!grouped) {
          this.triggerPhaseGroup(
            state,
            effectList,
            matched,
            matchedIndices,
            conditionState
          );
        } else {
          const effectsByGroup = {};
          const indicesByGroup = {};
          for (let m = 0; m < matched.length; m++) {
            const group = matched[m].group || 0;
            if (!effectsByGroup[group]) {
              effectsByGroup[group] = [];
              indicesByGroup[group] = [];
            }
            effectsByGroup[group].push(matched[m]);
            indicesByGroup[group].push(matchedIndices[m]);
          }
          for (const gKey in effectsByGroup) {
            this.triggerPhaseGroup(
              state,
              effectList,
              effectsByGroup[gKey],
              indicesByGroup[gKey],
              conditionState
            );
          }
        }
      }
      state[S.phase] = outerPhase;
      state[S.parentPhase] = outerParentPhase;
    }
    triggerPhaseGroup(state, effectList, effects, indices, conditionState) {
      const triggered = this.triggerEffects(
        state,
        effects,
        conditionState,
        null,
        false,
        indices
      );
      for (let j = 0; j < triggered.length; j++) {
        const idx = triggered[j];
        const eff = effectList[idx];
        if (eff.limit) {
          effectList[idx] = { ...eff, limit: eff.limit - 1 };
        }
      }
    }
    triggerEffects(state, effects, cndState, card, skipConditions, indices) {
      let conditionState = cndState;
      if (!conditionState && !skipConditions && anyHasConditions(effects)) {
        conditionState = shallowCopy(state);
      }
      if (conditionState) {
        conditionState[S.effectCounters] = state[S.effectCounters];
      }
      let triggeredEffects = [];
      this.logger.debug(effects);
      const fromPhase = indices !== void 0 && indices !== null;
      for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        if (!fromPhase && effect.phase) {
          this.logger.debug("Setting delayed effect", effect);
          this.setEffects(
            state,
            [effect],
            card != null ? {
              type: "skillCardEffect",
              id: state[S.cardMap][card].id,
              idx: card
            } : null
          );
          this.logger.log(state, "setEffect");
          continue;
        }
        if (effect.limit != null && effect.limit < 1) {
          this.logger.debug("Effect limit reached", effect.limit);
          continue;
        }
        if (effect.ttl != null && effect.ttl < 0) {
          this.logger.debug("Effect ttl reached", effect.ttl);
          continue;
        }
        if (effect.delay != null && effect.delay >= 0) {
          this.logger.debug("Effect delay", effect.delay);
          continue;
        }
        const prevInstanceId = state[S.currentEffectInstanceId];
        state[S.currentEffectInstanceId] = effect.effectInstanceId;
        if (conditionState) {
          conditionState[S.currentEffectInstanceId] = effect.effectInstanceId;
        }
        if (!skipConditions && effect.conditions) {
          let satisfied = true;
          for (let j = 0; j < effect.conditions.length; j++) {
            const condition = effect.conditions[j];
            if (!this.engine.evaluator.evaluateCondition(conditionState, condition)) {
              satisfied = false;
              break;
            }
          }
          if (!satisfied) {
            state[S.currentEffectInstanceId] = prevInstanceId;
            continue;
          }
        }
        if (effect.source) {
          this.logger.log(state, "entityStart", effect.source);
        }
        this.logger.debug("Executing actions", effect.actions);
        const prevTriggeredEffect = state[S.triggeredEffect];
        state[S.triggeredEffect] = effect;
        if (effect.targets) {
          let growthCards = /* @__PURE__ */ new Set();
          for (let j = 0; j < effect.targets.length; j++) {
            const targetRuleCards = this.engine.cardManager.getTargetRuleCards(
              state,
              effect.targets[j],
              effect.source
            );
            for (let card2 of targetRuleCards) {
              growthCards.add(card2);
            }
          }
          this.engine.cardManager.grow(state, [...growthCards], effect.actions);
        } else {
          if (effect.actions) {
            this.engine.executor.executeActions(state, effect.actions, card);
          }
        }
        if (effect.effects) {
          this.logger.debug("Setting effects", effect.effects);
          const toSet = effect.group != null ? effect.effects.map(
            (e) => e.group != null ? e : { ...e, group: effect.group }
          ) : effect.effects;
          let inheritedSource = effect.source;
          if (inheritedSource?.primary) {
            const { primary, ...rest } = inheritedSource;
            inheritedSource = rest;
          }
          if (!inheritedSource && card != null) {
            inheritedSource = {
              type: "skillCardEffect",
              id: state[S.cardMap][card].id,
              idx: card
            };
          }
          this.setEffects(state, toSet, inheritedSource);
          this.logger.log(state, "setEffect");
        }
        state[S.triggeredEffect] = prevTriggeredEffect;
        if (effect.source) {
          this.logger.log(state, "entityEnd", effect.source);
        }
        state[S.currentEffectInstanceId] = prevInstanceId;
        triggeredEffects.push(fromPhase ? indices[i] : effect.index);
      }
      return triggeredEffects;
    }
    decrementTtl(state) {
      const effects = state[S.effects];
      for (let i = 0; i < effects.length; i++) {
        const eff = effects[i];
        if (eff.ttl == null || eff.ttl == -1) continue;
        effects[i] = { ...eff, ttl: eff.ttl - 1 };
      }
    }
    decrementDelay(state) {
      const effects = state[S.effects];
      for (let i = 0; i < effects.length; i++) {
        const eff = effects[i];
        if (eff.delay == null || eff.delay == -1) continue;
        effects[i] = { ...eff, delay: eff.delay - 1 };
      }
    }
  };

  // vendor/gakumas-engine/engine/Evaluator.js
  var FIELD_INDEX = new Map(Object.entries(S));
  var CONSTANT_NAMES = /* @__PURE__ */ new Set([
    ...STANCES,
    ...PHASES,
    ...SOURCE_TYPES,
    ...RARITIES,
    ...SKILL_CARD_TYPES
  ]);
  function warning(message) {
    return () => {
      console.warn(message);
      return void 0;
    };
  }
  var Evaluator = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.variableResolvers = {
        maxStamina: (state) => this.getConfig(state).idol.params.stamina,
        clearRatio: () => 0,
        effectCounter: (state, name = "main") => {
          const id = state[S.currentEffectInstanceId];
          return state[S.effectCounters]?.[id]?.[name] ?? 0;
        },
        ...this.engine.turnManager.variableResolvers,
        ...this.engine.cardManager.variableResolvers,
        ...this.engine.buffManager.variableResolvers
      };
      this.compiled = /* @__PURE__ */ new WeakMap();
    }
    /**
     * Evaluate a condition (AST node)
     */
    evaluateCondition(state, condition) {
      const result = this.evaluateAST(state, condition);
      this.logger.debug("Condition", condition, result);
      return result;
    }
    /**
     * Evaluate an expression (AST node)
     */
    evaluateExpression(state, expr) {
      return this.evaluateAST(state, expr);
    }
    /**
     * Evaluate an AST node
     */
    evaluateAST(state, node) {
      if (!node) {
        console.warn("Null AST node");
        return void 0;
      }
      let evaluate = this.compiled.get(node);
      if (evaluate === void 0) {
        evaluate = this.compile(node);
        this.compiled.set(node, evaluate);
      }
      return evaluate(state);
    }
    compileChild(node) {
      if (!node) return warning("Null AST node");
      return this.compile(node);
    }
    compile(node) {
      switch (node.type) {
        case "number": {
          const value = node.value;
          return () => value;
        }
        case "identifier":
          return this.compileIdentifier(node.name);
        case "call":
          return this.compileCall(node);
        case "binary":
          return this.compileBinary(node);
        case "unary":
          return this.compileUnary(node);
        case "comparison":
          return this.compileComparison(node);
        case "assignment":
          return this.compileChild(node.rhs);
        default:
          return warning(`Unknown AST node type: ${node.type}`);
      }
    }
    /**
     * Resolve an identifier to its value: state variables, then variable
     * resolvers, then stance/phase/source type/rarity/card type names.
     */
    compileIdentifier(name) {
      const fallback = this.compileNonStateIdentifier(name);
      const index = FIELD_INDEX.get(name);
      if (index === void 0) return fallback;
      return (state) => index in state ? state[index] : fallback(state);
    }
    compileNonStateIdentifier(name) {
      if (name in this.variableResolvers) {
        const resolver = this.variableResolvers[name];
        return (state) => resolver(state);
      }
      if (CONSTANT_NAMES.has(name)) {
        return () => name;
      }
      return warning(`Unknown identifier: ${name}`);
    }
    /**
     * Function calls: target (passed as its AST node) followed by evaluated
     * args, with identifier args passed by name
     */
    compileCall(node) {
      const { name, target, args } = node;
      if (name === "floor") {
        const value = this.compileChild(args[0]);
        return (state) => Math.floor(value(state));
      }
      if (!(name in this.variableResolvers)) {
        return warning(`Unknown function: ${name}`);
      }
      const resolver = this.variableResolvers[name];
      const argFns = args.map((arg) => {
        if (arg.type === "identifier") {
          const argName = arg.name;
          return () => argName;
        }
        return this.compileChild(arg);
      });
      if (!target && argFns.length === 0) {
        return (state) => resolver(state);
      }
      if (!target && argFns.length === 1) {
        const arg = argFns[0];
        return (state) => resolver(state, arg(state));
      }
      if (target && argFns.length === 0) {
        return (state) => resolver(state, target);
      }
      return (state) => {
        const evaluatedArgs = [];
        if (target) {
          evaluatedArgs.push(target);
        }
        for (let i = 0; i < argFns.length; i++) {
          evaluatedArgs.push(argFns[i](state));
        }
        return resolver(state, ...evaluatedArgs);
      };
    }
    compileBinary(node) {
      const { op } = node;
      const left = this.compileChild(node.left);
      if (op === "|") {
        const right2 = this.compileChild(node.right);
        return (state) => {
          if (left(state)) return true;
          return !!right2(state);
        };
      }
      if (op === "&") {
        const rightNode = node.right;
        const rightIsIdentifier = rightNode.type === "identifier";
        const rightName = rightIsIdentifier ? rightNode.name : null;
        const right2 = rightIsIdentifier ? null : this.compileChild(rightNode);
        const boolRight = rightIsIdentifier ? this.compileChild(rightNode) : right2;
        return (state) => {
          const leftVal = left(state);
          if (leftVal && leftVal.has) {
            return leftVal.has(rightIsIdentifier ? rightName : right2(state));
          }
          if (!leftVal) return false;
          return !!boolRight(state);
        };
      }
      const right = this.compileChild(node.right);
      switch (op) {
        case "+":
          return (state) => left(state) + right(state);
        case "-":
          return (state) => left(state) - right(state);
        case "*":
          return (state) => left(state) * right(state);
        case "/":
          return (state) => left(state) / right(state);
        case "%":
          return (state) => left(state) % right(state);
        default: {
          const warn = warning(`Unknown binary operator: ${op}`);
          return (state) => {
            left(state);
            right(state);
            return warn();
          };
        }
      }
    }
    compileUnary(node) {
      const { op } = node;
      const operand = this.compileChild(node.operand);
      switch (op) {
        case "!":
          return (state) => !operand(state);
        case "-":
          return (state) => -operand(state);
        default: {
          const warn = warning(`Unknown unary operator: ${op}`);
          return (state) => {
            operand(state);
            return warn();
          };
        }
      }
    }
    compileComparison(node) {
      const { op } = node;
      const left = this.compileChild(node.left);
      const right = this.compileChild(node.right);
      switch (op) {
        case "==":
          return (state) => left(state) == right(state);
        case "!=":
          return (state) => left(state) != right(state);
        case "<":
          return (state) => left(state) < right(state);
        case ">":
          return (state) => left(state) > right(state);
        case "<=":
          return (state) => left(state) <= right(state);
        case ">=":
          return (state) => left(state) >= right(state);
        default: {
          const warn = warning(`Unknown comparison operator: ${op}`);
          return (state) => {
            left(state);
            right(state);
            return warn();
          };
        }
      }
    }
  };

  // vendor/gakumas-engine/engine/Executor/resolvers.js
  function astContainsIdentifier(node, identifierName) {
    if (!node) return false;
    switch (node.type) {
      case "identifier":
        return node.name === identifierName;
      case "number":
        return false;
      case "binary":
        return astContainsIdentifier(node.left, identifierName) || astContainsIdentifier(node.right, identifierName);
      case "unary":
        return astContainsIdentifier(node.operand, identifierName);
      case "comparison":
        return astContainsIdentifier(node.left, identifierName) || astContainsIdentifier(node.right, identifierName);
      case "call":
        return node.args.some(
          (arg) => astContainsIdentifier(arg, identifierName)
        );
      default:
        return false;
    }
  }
  function resolveCost(state, cost, growth) {
    if (growth[G["g.cost"]]) {
      cost += growth[G["g.cost"]];
      if (cost > 0) cost = 0;
    }
    if (state[S.stance].startsWith("strength")) {
      cost *= 2;
    } else if (state[S.stance] == "preservation") {
      cost *= 0.5;
    } else if (state[S.stance] == "preservation2") {
      cost *= 0.25;
    } else if (state[S.stance] == "leisure") {
      cost *= 0;
    }
    if (state[S.halfCostTurns]) {
      cost *= 0.5;
    }
    if (state[S.doubleCostTurns]) {
      cost *= 2;
    }
    cost = Math.floor(cost);
    cost += state[S.costReduction];
    cost -= state[S.costIncrease];
    cost = Math.min(cost, 0);
    state[S.genki] += cost;
    if (state[S.genki] < 0) {
      state[S.stamina] += state[S.genki];
      state[S.consumedStamina] -= state[S.genki];
      state[S.genki] = 0;
    }
  }
  function resolveFixedGenki(state, fixedGenki) {
    state[S.genki] += fixedGenki;
  }
  function resolveFixedStamina(state, fixedStamina) {
    state[S.stamina] += fixedStamina;
    if (fixedStamina < 0) {
      state[S.consumedStamina] -= fixedStamina;
    }
  }
  function resolveScore(state, score, growth, rhsNode, getTurnMultiplier) {
    if (growth[G["g.scoreByGoodImpressionTurns"]] && astContainsIdentifier(rhsNode, "goodImpressionTurns")) {
      score += state[S.goodImpressionTurns] * growth[G["g.scoreByGoodImpressionTurns"]];
    } else if (growth[G["g.scoreByMotivation"]] && astContainsIdentifier(rhsNode, "motivation")) {
      score += state[S.motivation] * growth[G["g.scoreByMotivation"]];
    } else if (growth[G["g.scoreByGenki"]] && astContainsIdentifier(rhsNode, "genki")) {
      score += state[S.genki] * growth[G["g.scoreByGenki"]];
    } else if (growth[G["g.score"]]) {
      score += growth[G["g.score"]];
    }
    if (score > 0) {
      const concentrationEffectBuff = state[S.concentrationEffectBuffs].reduce(
        (acc, cur) => acc + cur.amount,
        1
      );
      score += state[S.concentration] * state[S.concentrationMultiplier] * concentrationEffectBuff;
      score += state[S.enthusiasm] * state[S.enthusiasmMultiplier];
      score = safeCeil(score);
      if (state[S.goodConditionTurns]) {
        score *= 1 + (0.5 + (state[S.perfectConditionTurns] ? state[S.goodConditionTurns] * 0.1 : 0)) * state[S.goodConditionTurnsMultiplier];
      }
      if (state[S.stance] == "strength") {
        score *= state[S.strengthEffectBuffs].reduce(
          (acc, cur) => acc + cur.amount,
          2
        );
      } else if (state[S.stance] == "strength2") {
        score *= state[S.strengthEffectBuffs].reduce(
          (acc, cur) => acc + cur.amount,
          2.5
        );
      } else if (state[S.stance] == "preservation") {
        score *= 0.5;
      } else if (state[S.stance] == "preservation2") {
        score *= 0.25;
      } else if (state[S.stance] == "fullPower") {
        score *= state[S.fullPowerEffectBuffs].reduce(
          (acc, cur) => acc + cur.amount,
          3
        );
      } else if (state[S.stance] == "leisure") {
        score *= 0;
      }
      let scoreBuff = state[S.scoreBuffs].reduce(
        (acc, cur) => acc + cur.amount,
        0
      );
      if (state[S.prideTurns]) {
        const buffAmount = Math.min(
          state[S.goodImpressionTurns],
          state[S.motivation]
        );
        scoreBuff += Math.min(buffAmount * 0.02, 0.5);
      }
      if (state[S.metamorphosis] == "metamorphosisPerformance") {
        scoreBuff += 0.25;
      }
      score *= 1 + scoreBuff;
      score *= Math.max(
        state[S.scoreDebuffs].reduce(
          (acc, cur) => acc - cur.amount,
          // メタモルフォーゼ (支度): パラメータ上昇量を25%減少
          state[S.metamorphosis] == "metamorphosisPreparation" ? 0.75 : 1
        ),
        0
      );
      if (state[S.poorConditionTurns]) {
        score *= 0.67;
      }
      score = safeCeil(score);
      score *= getTurnMultiplier(state);
      score = safeCeil(score);
    }
    state[S.score] += score;
  }
  function resolveGoodImpressionTurns(state, goodImpressionTurns) {
    goodImpressionTurns *= state[S.goodImpressionTurnsBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      1
    );
    state[S.goodImpressionTurns] += goodImpressionTurns;
  }
  function resolveMotivation(state, motivation) {
    motivation += state[S.motivationAdditionBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    motivation *= state[S.motivationBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      1
    );
    state[S.motivation] += motivation;
  }
  function metamorphosisAddition(state, amount) {
    if (amount <= 0) return 0;
    if (state[S.metamorphosis] == "metamorphosisPreparation") return 1;
    if (state[S.metamorphosis] == "metamorphosisPerformance") return -1;
    return 0;
  }
  function resolveGoodConditionTurns(state, goodConditionTurns) {
    goodConditionTurns += metamorphosisAddition(state, goodConditionTurns);
    goodConditionTurns += state[S.goodConditionTurnsAdditionBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    goodConditionTurns *= state[S.goodConditionTurnsBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      1
    );
    state[S.goodConditionTurns] += goodConditionTurns;
  }
  function resolveConcentration(state, concentration) {
    concentration += metamorphosisAddition(state, concentration);
    concentration += state[S.concentrationAdditionBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    concentration *= state[S.concentrationBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      1
    );
    state[S.concentration] += concentration;
  }
  function resolvePerfectConditionTurns(state, perfectConditionTurns) {
    perfectConditionTurns += metamorphosisAddition(state, perfectConditionTurns);
    state[S.perfectConditionTurns] += perfectConditionTurns;
  }
  function resolveGenki(state, genki) {
    if (state[S.nullifyGenkiTurns]) return;
    genki += state[S.motivation] * state[S.motivationMultiplier];
    if (state[S.uneaseTurns]) {
      genki *= 0.67;
    }
    state[S.genki] += genki;
  }
  function resolveStamina(state, stamina) {
    if (state[S.stance].startsWith("strength")) {
      stamina *= 2;
    } else if (state[S.stance] == "preservation") {
      stamina *= 0.5;
    } else if (state[S.stance] == "preservation2") {
      stamina *= 0.25;
    }
    if (state[S.halfCostTurns]) {
      stamina *= 0.5;
    }
    if (state[S.doubleCostTurns]) {
      stamina *= 2;
    }
    stamina = Math.floor(stamina);
    if (stamina <= 0) {
      stamina += state[S.costReduction];
      stamina -= state[S.costIncrease];
      stamina = Math.min(stamina, 0);
    }
    state[S.stamina] += stamina;
    if (stamina < 0) {
      state[S.consumedStamina] -= stamina;
    }
  }
  function resolveEnthusiasm(state, enthusiasm) {
    enthusiasm += state[S.enthusiasmBonusBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    enthusiasm *= state[S.enthusiasmBuffs].reduce(
      (acc, cur) => acc + cur.amount,
      1
    );
    state[S.enthusiasm] += enthusiasm;
  }
  function resolveFullPowerCharge(state, fullPowerCharge) {
    if (fullPowerCharge > 0) {
      fullPowerCharge *= state[S.fullPowerChargeBuffs].reduce(
        (acc, cur) => acc + cur.amount,
        1
      );
      state[S.cumulativeFullPowerCharge] += fullPowerCharge;
    }
    state[S.fullPowerCharge] += fullPowerCharge;
  }

  // vendor/gakumas-engine/engine/Executor/index.js
  var INCREASE_DELTA_FIELDS = INCREASE_TRIGGER_FIELDS.map(
    (f) => S[`${ALL_FIELDS[f]}Delta`]
  );
  var INCREASE_PHASES = INCREASE_TRIGGER_FIELDS.map(
    (f) => `${ALL_FIELDS[f]}Increased`
  );
  var DECREASE_DELTA_FIELDS = DECREASE_TRIGGER_FIELDS.map(
    (f) => S[`${ALL_FIELDS[f]}Delta`]
  );
  var DECREASE_PHASES = DECREASE_TRIGGER_FIELDS.map(
    (f) => `${ALL_FIELDS[f]}Decreased`
  );
  var CHANGE_WATCH_FIELDS = [
    .../* @__PURE__ */ new Set([
      ...BUFF_FIELDS,
      ...INCREASE_TRIGGER_FIELDS,
      ...DECREASE_TRIGGER_FIELDS
    ])
  ];
  var watchIndex = (f) => CHANGE_WATCH_FIELDS.indexOf(f);
  var BUFF_WATCH = BUFF_FIELDS.map(watchIndex);
  var INCREASE_WATCH = INCREASE_TRIGGER_FIELDS.map(watchIndex);
  var DECREASE_WATCH = DECREASE_TRIGGER_FIELDS.map(watchIndex);
  function snapshotWatchedFields(state) {
    const snap = new Array(CHANGE_WATCH_FIELDS.length);
    for (let i = 0; i < CHANGE_WATCH_FIELDS.length; i++) {
      snap[i] = state[CHANGE_WATCH_FIELDS[i]];
    }
    return snap;
  }
  var ALWAYS_INTERMEDIATE = /* @__PURE__ */ new Set(["cost", "fixedGenki", "fixedStamina"]);
  var INTERMEDIATE_ON_ADD = /* @__PURE__ */ new Set([
    "score",
    "goodImpressionTurns",
    "motivation",
    "goodConditionTurns",
    "concentration",
    "perfectConditionTurns",
    "enthusiasm",
    "fullPowerCharge",
    "genki"
  ]);
  var GROWTH_INDEX_BY_FIELD = new Map(
    ALL_FIELDS.map((name) => [name, G[`g.${name}`]])
  );
  var Executor = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.diffSnapshots = [];
      this.snapshotPool = [];
      this.specialActions = {
        ...this.engine.cardManager.specialActions,
        ...this.engine.buffManager.specialActions
      };
      this.intermediateResolvers = {
        cost: (state, value, growth) => resolveCost(state, value, growth),
        fixedGenki: (state, value) => resolveFixedGenki(state, value),
        fixedStamina: (state, value) => resolveFixedStamina(state, value),
        score: (state, value, growth, rhs) => resolveScore(
          state,
          value,
          growth,
          rhs,
          (s) => this.engine.turnManager.getTurnMultiplier(s)
        ),
        goodImpressionTurns: (state, value) => resolveGoodImpressionTurns(state, value),
        motivation: (state, value) => resolveMotivation(state, value),
        goodConditionTurns: (state, value) => resolveGoodConditionTurns(state, value),
        concentration: (state, value) => resolveConcentration(state, value),
        perfectConditionTurns: (state, value) => resolvePerfectConditionTurns(state, value),
        genki: (state, value) => resolveGenki(state, value),
        stamina: (state, value) => resolveStamina(state, value),
        enthusiasm: (state, value) => resolveEnthusiasm(state, value),
        fullPowerCharge: (state, value) => resolveFullPowerCharge(state, value)
      };
    }
    executeGrowthActions(growth, actions) {
      for (let i = 0; i < actions.length; i++) {
        this.executeGrowthAction(growth, actions[i]);
      }
    }
    executeGrowthAction(growth, action) {
      if (action.type === "assignment") {
        const { lhs, op, rhs } = action;
        if (rhs.type !== "number") {
          throw new Error(`Invalid growth action RHS: expected number`);
        }
        const rhsValue = rhs.value;
        let intermediate = growth[G[lhs]] || 0;
        if (op === "=") {
          intermediate = rhsValue;
        } else if (op === "+=") {
          intermediate += rhsValue;
        } else if (op === "-=") {
          intermediate -= rhsValue;
        }
        growth[G[lhs]] = intermediate;
        return;
      }
      console.warn(`Invalid growth action:`, action);
    }
    executeActions(state, actions, card) {
      const growth = state[S.cardMap][card]?.growth;
      const eotPrev = new Array(EOT_DECREMENT_FIELDS.length);
      for (let i = 0; i < EOT_DECREMENT_FIELDS.length; i++) {
        eotPrev[i] = state[EOT_DECREMENT_FIELDS[i]];
      }
      const prevGoodConditionTurnsMultiplier = state[S.goodConditionTurnsMultiplier];
      const prevConcentrationMultiplier = state[S.concentrationMultiplier];
      const prevEnthusiasmMultiplier = state[S.enthusiasmMultiplier];
      const prevMotivationMultiplier = state[S.motivationMultiplier];
      const prevScoreTimes = state[S.scoreTimes];
      state[S.goodConditionTurnsMultiplier] = 1;
      state[S.concentrationMultiplier] = 1;
      state[S.enthusiasmMultiplier] = 1;
      state[S.motivationMultiplier] = 1;
      state[S.scoreTimes] = growth?.[G["g.scoreTimes"]] || 0;
      const logging = !this.logger.disabled;
      const snapshotDepth = this.diffSnapshots.length;
      const diffSnap = logging ? this.pushDiffSnapshot(state) : null;
      try {
        for (let i = 0; i < actions.length; i++) {
          const phase = state[S.phase];
          const needsChangeTrigger = phase === "processCard" || phase === "processCost" || phase === "cardMovedToHand" || phase === "cardMovedToHeld" || state[S.triggeredEffect]?.type === "reservation" && state[S.triggeredEffect]?.source?.type === "skillCardEffect";
          const actionPrev = needsChangeTrigger ? snapshotWatchedFields(state) : null;
          const prevGenki = state[S.genki];
          const prevGoodImpressionTurns = state[S.goodImpressionTurns];
          this.executeAction(state, actions[i], growth);
          let repeats = 0;
          if (state[S.scoreTimes]) {
            const action = actions[i];
            if (action.type === "assignment" && action.lhs === "score") {
              repeats = state[S.scoreTimes];
              state[S.scoreTimes] = 0;
            }
          }
          this.clampFields(state);
          if (logging) this.logDiffs(state, diffSnap);
          for (let j = 0; j < repeats; j++) {
            this.executeAction(state, actions[i], growth);
            this.clampFields(state);
            if (logging) this.logDiffs(state, diffSnap);
          }
          if (needsChangeTrigger) {
            this.triggerChangeEffects(state, actionPrev);
          }
          if (state[S.genki] < prevGenki) {
            state[S.consumedGenki] += prevGenki - state[S.genki];
          }
          if (phase === "processCost" && state[S.goodImpressionTurns] < prevGoodImpressionTurns) {
            state[S.consumedGoodImpressionTurns] += prevGoodImpressionTurns - state[S.goodImpressionTurns];
          }
        }
      } finally {
        while (this.diffSnapshots.length > snapshotDepth) {
          this.diffSnapshots.pop().state = null;
        }
      }
      state[S.goodConditionTurnsMultiplier] = prevGoodConditionTurnsMultiplier;
      state[S.concentrationMultiplier] = prevConcentrationMultiplier;
      state[S.enthusiasmMultiplier] = prevEnthusiasmMultiplier;
      state[S.motivationMultiplier] = prevMotivationMultiplier;
      state[S.scoreTimes] = prevScoreTimes;
      if (!state[S.unfreshPhase]) {
        for (let i = 0; i < EOT_DECREMENT_FIELDS.length; i++) {
          const field = EOT_DECREMENT_FIELDS[i];
          if (state[field] > 0 && eotPrev[i] == 0) {
            state[S.freshBuffs] |= 1 << i;
          }
        }
      }
    }
    pushDiffSnapshot(state) {
      const depth = this.diffSnapshots.length;
      let frame = this.snapshotPool[depth];
      if (!frame) {
        frame = this.snapshotPool[depth] = {
          state: null,
          snap: new Array(LOGGED_FIELDS.length)
        };
      }
      frame.state = state;
      const snap = frame.snap;
      for (let i = 0; i < LOGGED_FIELDS.length; i++) {
        snap[i] = state[LOGGED_FIELDS[i]];
      }
      this.diffSnapshots.push(frame);
      return snap;
    }
    // Log a diff for every logged field that changed since `snap`, then
    // patch the changed fields into every same-state snapshot on the stack
    // (including `snap` itself, re-baselining it for the caller's next
    // action). Patching keeps a delta from being reported twice: a nested
    // execution (free-use chain, stance-transition effect) logs it in its
    // own frame, and the enclosing action's later diff sees the patched
    // value as its baseline. Frames whose state differs are speculative
    // preview runs (strategy hold/free-use evaluation on fresh states) —
    // patching across states would corrupt the real run's baselines.
    // Known limitation: an action that both writes a field directly and
    // nested-triggers a change to the same field would under-report its own
    // share; no current action does both.
    logDiffs(state, snap) {
      const stack = this.diffSnapshots;
      for (let i = 0; i < LOGGED_FIELDS.length; i++) {
        const field = LOGGED_FIELDS[i];
        const curr = state[field];
        if (curr == snap[i]) continue;
        this.logger.log(state, "diff", {
          field,
          prev: formatDiffField(snap[i]),
          next: formatDiffField(curr)
        });
        for (let d = 0; d < stack.length; d++) {
          if (stack[d].state === state) {
            stack[d].snap[i] = curr;
          }
        }
      }
    }
    clampFields(state) {
      const config = this.getConfig(state);
      if (state[S.stamina] > config.idol.params.stamina) {
        state[S.stamina] = config.idol.params.stamina;
      }
      for (let i = 0; i < NON_NEGATIVE_FIELDS.length; i++) {
        if (state[NON_NEGATIVE_FIELDS[i]] < 0) {
          state[NON_NEGATIVE_FIELDS[i]] = 0;
        }
      }
    }
    triggerChangeEffects(state, prev) {
      if (state[S.phase] == "processCost") {
        for (let i = 0; i < BUFF_FIELDS.length; i++) {
          if (state[BUFF_FIELDS[i]] < prev[BUFF_WATCH[i]]) {
            state[S.buffCostConsumed] = true;
            break;
          }
        }
      }
      for (let i = 0; i < INCREASE_TRIGGER_FIELDS.length; i++) {
        const curr = state[INCREASE_TRIGGER_FIELDS[i]];
        const prior = prev[INCREASE_WATCH[i]];
        if (curr > prior) {
          const deltaField = INCREASE_DELTA_FIELDS[i];
          const phase = INCREASE_PHASES[i];
          state[deltaField] = curr - prior;
          this.engine.effectManager.triggerEffectsForPhase(state, phase);
          state[deltaField] = 0;
        }
      }
      for (let i = 0; i < DECREASE_TRIGGER_FIELDS.length; i++) {
        const curr = state[DECREASE_TRIGGER_FIELDS[i]];
        const prior = prev[DECREASE_WATCH[i]];
        if (curr < prior) {
          const deltaField = DECREASE_DELTA_FIELDS[i];
          const phase = DECREASE_PHASES[i];
          state[deltaField] = curr - prior;
          this.engine.effectManager.triggerEffectsForPhase(state, phase);
          state[deltaField] = 0;
        }
      }
    }
    executeAction(state, action, growth) {
      if (action.type === "identifier") {
        this.executeSpecialAction(state, action.name, growth);
        return;
      }
      if (action.type === "call") {
        this.executeCallAction(state, action, growth);
        return;
      }
      if (action.type === "assignment") {
        this.executeAssignment(state, action, growth);
        return;
      }
      console.warn(`Invalid action:`, action);
    }
    executeAssignment(state, action, growth) {
      const { lhs, lhsName, op, rhs } = action;
      if (lhs === "effectCounter") {
        const id = state[S.currentEffectInstanceId];
        const name = lhsName || "main";
        const rhsValue2 = this.engine.evaluator.evaluateExpression(state, rhs);
        const counters = { ...state[S.effectCounters] };
        const counter = { ...counters[id] };
        counters[id] = counter;
        state[S.effectCounters] = counters;
        if (counter[name] === void 0) {
          counter[name] = 0;
        }
        if (op === "+=") {
          counter[name] += rhsValue2;
        } else if (op === "=") {
          counter[name] = rhsValue2;
        } else {
          console.warn(`Unsupported effectCounter operation: ${op}`);
        }
        return;
      }
      if (state[S.nullifyDebuff] && DEBUFF_FIELDS.includes(S[lhs])) {
        state[S.nullifyDebuff]--;
        return;
      }
      let rhsValue = this.engine.evaluator.evaluateExpression(state, rhs);
      let intermediate = state[S[lhs]] || 0;
      let intermediateField = null;
      if (ALWAYS_INTERMEDIATE.has(lhs) || op === "+=" && INTERMEDIATE_ON_ADD.has(lhs) || lhs === "stamina" && op === "-=") {
        intermediate = 0;
        intermediateField = lhs;
      }
      if (op === "=") {
        intermediate = rhsValue;
      } else if (op === "+=") {
        intermediate += rhsValue;
        const growthIndex = GROWTH_INDEX_BY_FIELD.get(lhs);
        if (growth?.[growthIndex] && GROWABLE_FIELDS.includes(S[lhs])) {
          intermediate += growth[growthIndex];
        }
      } else if (op === "-=") {
        if (state[S.phase] === "processCost" || state[S.phase] === "checkCost") {
          if (growth?.[G["g.typedCost"]]) {
            rhsValue -= growth[G["g.typedCost"]];
            if (rhsValue < 0) rhsValue = 0;
          }
          if (state[S.doubleBuffCostTurns] > 0 && BUFF_FIELDS.includes(S[lhs])) {
            rhsValue *= 2;
          }
        }
        intermediate -= rhsValue;
      } else if (op === "*=") {
        intermediate *= rhsValue;
      } else if (op === "/=") {
        intermediate /= rhsValue;
      } else if (op === "%=") {
        intermediate %= rhsValue;
      } else {
        console.warn(`Unrecognized assignment operator: ${op}`);
      }
      if (intermediateField) {
        if (intermediateField in this.intermediateResolvers) {
          this.intermediateResolvers[intermediateField](
            state,
            intermediate,
            growth || {},
            rhs
          );
        } else {
          console.warn(`Unresolved intermediate: ${intermediateField}`);
        }
      } else {
        state[S[lhs]] = intermediate;
      }
      for (let i = 0; i < WHOLE_FIELDS.length; i++) {
        const field = WHOLE_FIELDS[i];
        const v = state[field];
        if (v === void 0 || Number.isInteger(v)) continue;
        state[field] = Math.ceil(v.toFixed(2));
      }
    }
    executeCallAction(state, action, growth) {
      const { name, target, args } = action;
      if (name in this.specialActions) {
        if (state[S.nullifyDebuff] && DEBUFF_SPECIAL_ACTIONS.includes(name)) {
          state[S.nullifyDebuff]--;
          return;
        }
        const evaluatedArgs = [];
        if (target) {
          evaluatedArgs.push(target);
        }
        for (const arg of args) {
          if (arg.type === "identifier") {
            evaluatedArgs.push(arg.name);
          } else {
            evaluatedArgs.push(this.engine.evaluator.evaluateAST(state, arg));
          }
        }
        if (growth && growth[G["g.stanceLevel"]] && name === "setStance") {
          if (evaluatedArgs[0].startsWith("str")) {
            evaluatedArgs[0] = "strength2";
          } else if (evaluatedArgs[0].startsWith("pre")) {
            evaluatedArgs[0] = "preservation2";
          }
        }
        this.specialActions[name](state, ...evaluatedArgs);
        return;
      }
      console.warn(`Unrecognized function call: ${name}`);
    }
    executeSpecialAction(state, actionName) {
      if (actionName in this.specialActions) {
        if (state[S.nullifyDebuff] && DEBUFF_SPECIAL_ACTIONS.includes(actionName)) {
          state[S.nullifyDebuff]--;
          return;
        }
        this.specialActions[actionName](state);
        return;
      }
      console.warn(`Unrecognized special action: ${actionName}`);
    }
  };

  // vendor/gakumas-engine/engine/StageLogger.js
  var LOGGED_BUFFS_FIELDS = [
    S.scoreBuffs,
    S.scoreDebuffs,
    S.goodImpressionTurnsBuffs,
    S.goodImpressionTurnsEffectBuffs,
    S.goodImpressionTurnsTimesBuffs,
    S.motivationBuffs,
    S.motivationAdditionBuffs,
    S.goodConditionTurnsBuffs,
    S.goodConditionTurnsAdditionBuffs,
    S.concentrationBuffs,
    S.concentrationAdditionBuffs,
    S.concentrationEffectBuffs,
    S.enthusiasmBuffs,
    S.enthusiasmBonusBuffs,
    S.fullPowerChargeBuffs,
    S.fullPowerEffectBuffs,
    S.strengthEffectBuffs,
    S.handDecreases
  ];
  var HAND_STATE_FIELDS = LOGGED_FIELDS.filter(
    (field) => field != S.turnsRemaining && field != S.cardUsesRemaining
  );
  var StageLogger = class {
    constructor(engine) {
      this.engine = engine;
      this.reset();
    }
    initializeState(state) {
      state[S.logs] = null;
      state[S.graphData] = null;
    }
    reset() {
      this.disabled = false;
    }
    disable() {
      this.disabled = true;
    }
    enable() {
      this.disabled = false;
    }
    getLogs(state) {
      const logs = [];
      for (let node = state[S.logs]; node; node = node.prev) {
        logs.push(node.entry);
      }
      return logs.reverse();
    }
    log(state, logType, data) {
      if (this.disabled) return;
      const entry = { logType, data };
      state[S.logs] = { entry, prev: state[S.logs] };
      return entry;
    }
    debug(...args) {
      if (!DEBUG || this.disabled) return;
      console.log(...args);
    }
    pushGraphData(state) {
      if (this.disabled) return;
      const values = new Array(GRAPHED_FIELDS.length);
      for (let i = 0; i < GRAPHED_FIELDS.length; i++) {
        values[i] = state[GRAPHED_FIELDS[i]];
      }
      state[S.graphData] = { values, prev: state[S.graphData] };
    }
    getGraphData(state) {
      const snapshots = [];
      for (let node = state[S.graphData]; node; node = node.prev) {
        snapshots.push(node.values);
      }
      snapshots.reverse();
      const graphData = {};
      for (let i = 0; i < GRAPHED_FIELDS.length; i++) {
        graphData[GRAPHED_FIELDS[i]] = snapshots.map((values) => values[i]);
      }
      return graphData;
    }
    getHandStateForLogging(state) {
      let res = {};
      for (let i = 0; i < HAND_STATE_FIELDS.length; i++) {
        const field = HAND_STATE_FIELDS[i];
        if (state[field]) {
          res[field] = state[field];
        }
      }
      for (let field of LOGGED_BUFFS_FIELDS) {
        if (state[field]?.length) {
          res[field] = state[field].slice();
        }
      }
      res.turn = {
        types: state[S.turnTypes],
        elapsed: state[S.turnsElapsed],
        remaining: state[S.turnsRemaining],
        multiplier: this.engine.turnManager.getTurnMultiplier(state)
      };
      return res;
    }
  };

  // vendor/gakumas-engine/engine/TurnManager.js
  var TurnManager = class extends EngineComponent {
    constructor(engine) {
      super(engine);
      this.variableResolvers = {
        isVocalTurn: (state) => this.getTurnType(state) == "vocal",
        isDanceTurn: (state) => this.getTurnType(state) == "dance",
        isVisualTurn: (state) => this.getTurnType(state) == "visual"
      };
    }
    initializeState(state) {
      state[S.turnsElapsed] = 0;
      state[S.turnsRemaining] = this.getConfig(state).stage.turnCount;
      state[S.turnTypes] = this.generateTurnTypes();
      state[S.linkPhase] = 0;
      state[S.unfreshPhase] = false;
    }
    getTurnType(state) {
      return state[S.turnTypes][Math.min(state[S.turnsElapsed], this.getConfig(state).stage.turnCount - 1)];
    }
    getTurnMultiplier(state) {
      const turnType = this.getTurnType(state);
      return this.getConfig(state).typeMultipliers[turnType];
    }
    generateTurnTypes() {
      const { turnCounts, firstTurns, criteria } = this.engine.config.stage;
      const remainingTurns = { ...turnCounts };
      const rand = getRand();
      let firstTurn = "vocal";
      if (rand > firstTurns.vocal) firstTurn = "dance";
      if (rand > firstTurns.vocal + firstTurns.dance) firstTurn = "visual";
      remainingTurns[firstTurn]--;
      const sortedTypes = Object.keys(criteria).sort(
        (a, b) => criteria[b] - criteria[a]
      );
      const lastTurns = sortedTypes.slice().reverse().filter((type) => remainingTurns[type] > 0);
      lastTurns.forEach((t) => remainingTurns[t]--);
      let randomTurns = [];
      for (let k in remainingTurns) {
        for (let i = 0; i < remainingTurns[k]; i++) {
          randomTurns.push(k);
        }
      }
      shuffle(randomTurns);
      return [firstTurn, ...randomTurns, ...lastTurns];
    }
    startTurn(state, forceInitialHand = false) {
      this.logger.debug("Starting turn", state[S.turnsElapsed] + 1);
      this.logger.log(state, "startTurn", {
        num: state[S.turnsElapsed] + 1,
        type: this.getTurnType(state),
        multiplier: this.getTurnMultiplier(state)
      });
      state[S.cardUsesRemaining] = 1;
      state[S.unfreshPhase] = true;
      const effectsBeforeTurnStart = state[S.effects].length;
      state[S.prevStance] = "none";
      this.engine.effectManager.triggerEffects(state, FULL_POWER_EFFECTS);
      this.engine.effectManager.triggerEffectsForPhase(
        state,
        "beforeStartOfTurn"
      );
      this.engine.effectManager.triggerEffectsForPhase(state, "startOfTurn");
      const cardsToDraw = Math.max(
        3 - this.engine.buffManager.getHandDecrease(state),
        0
      );
      for (let i = 0; i < cardsToDraw; i++) {
        this.engine.cardManager.drawCard(state);
      }
      this.engine.effectManager.triggerEffects(state, FULL_POWER_CHANGED_EFFECTS);
      if (state[S.turnsElapsed] == 0 || forceInitialHand) {
        for (let i = 0; i < 2; i++) {
          const card = this.engine.cardManager.peekDeck(state);
          if (card != null && this.engine.cardManager.isForceInitialHand(state, card)) {
            this.engine.cardManager.drawCard(state);
          }
        }
      }
      this.engine.effectManager.triggerEffectsForPhase(state, "afterStartOfTurn");
      this.engine.effectManager.triggerEffectsForPhase(
        state,
        "turn",
        null,
        effectsBeforeTurnStart
      );
      this.engine.effectManager.triggerEffectsForPhase(state, "everyTurn");
      state[S.unfreshPhase] = false;
    }
    endTurn(state) {
      if (state[S.cardUsesRemaining] > 0) {
        state[S.stamina] = Math.min(
          state[S.stamina] + 2,
          this.getConfig(state).idol.params.stamina
        );
        this.engine.effectManager.triggerEffectsForPhase(state, "turnSkipped");
      }
      this.engine.effectManager.triggerEffectsForPhase(state, "endOfTurn");
      const goodImpressionTurnsTimes = state[S.goodImpressionTurnsTimesBuffs].reduce(
        (acc, cur) => acc + cur.amount,
        1
      );
      for (let i = 0; i < goodImpressionTurnsTimes; i++) {
        this.engine.effectManager.triggerEffects(state, GOOD_IMPRESSION_EFFECTS);
      }
      this.engine.buffManager.decrementBuffTurns(state);
      state[S.cardUsesRemaining] = 0;
      state[S.turnCardsUsed] = 0;
      state[S.turnCardsUpgraded] = 0;
      if (state[S.enthusiasmExtensionTurns] > 0) {
        state[S.enthusiasmExtensionTurns]--;
      } else {
        state[S.enthusiasm] = 0;
      }
      this.engine.effectManager.decrementTtl(state);
      this.engine.effectManager.decrementDelay(state);
      this.engine.effectManager.clearExpiredEffects(state);
      this.engine.cardManager.discardHand(state);
      state[S.turnsElapsed]++;
      state[S.turnsRemaining]--;
      if (state[S.metamorphosis] == "metamorphosisPreparation" && state[S.turnsElapsed] >= Math.floor(this.getConfig(state).stage.turnCount / 2)) {
        state[S.metamorphosis] = "metamorphosisPerformance";
      }
      this.logger.pushGraphData(state);
      if (state[S.turnsRemaining] > 0) {
        let forceInitialHand = false;
        const stageConfig = this.getConfig(state).stage;
        if (stageConfig.type === "linkContest") {
          const { linkPhaseChangeTurns } = stageConfig;
          for (let i = 0; i < linkPhaseChangeTurns.length; i++) {
            if (state[S.turnsElapsed] == linkPhaseChangeTurns[i] && i < this.engine.linkConfigs.length - 1) {
              this.engine.changeIdol(state);
              forceInitialHand = true;
              break;
            }
          }
        }
        this.startTurn(state, forceInitialHand);
      }
    }
  };

  // vendor/gakumas-engine/engine/StageEngine.js
  var StageEngine = class {
    constructor(config, linkConfigs) {
      this.config = config;
      this.linkConfigs = linkConfigs;
      this.logger = new StageLogger(this);
      this.cardManager = new CardManager(this);
      this.effectManager = new EffectManager(this);
      this.buffManager = new BuffManager(this);
      this.turnManager = new TurnManager(this);
      this.evaluator = new Evaluator(this);
      this.executor = new Executor(this);
    }
    getConfig(state) {
      if (this.config.stage.type === "linkContest") {
        return this.linkConfigs[state[S.linkPhase] || 0];
      }
      return this.config;
    }
    getInitialState(skipEffects = false) {
      const state = [];
      for (let i = 0; i < ALL_FIELDS.length; i++) state.push(void 0);
      this.logger.initializeState(state);
      state[S.cardUsesRemaining] = 0;
      state[S.stamina] = this.getConfig(state).idol.params.stamina;
      state[S.consumedStamina] = 0;
      state[S.genki] = 0;
      state[S.consumedGenki] = 0;
      state[S.consumedGoodImpressionTurns] = 0;
      state[S.score] = 0;
      this.turnManager.initializeState(state);
      this.buffManager.initializeState(state);
      this.cardManager.initializeState(state);
      if (skipEffects) {
        state[S.effects] = [];
        state[S.effectInstanceId] = 0;
        state[S.effectCounters] = {};
        state[S.currentEffectInstanceId] = null;
      } else {
        this.effectManager.initializeState(state);
      }
      return state;
    }
    changeIdol(state) {
      state[S.linkPhase] += 1;
      state[S.stamina] = this.getConfig(state).idol.params.stamina;
      this.cardManager.changeIdol(state);
      this.logger.log(state, "linkPhaseChange", { phase: state[S.linkPhase] });
    }
    startStage(state) {
      this.logger.disable();
      this.effectManager.triggerEffectsForPhase(state, "prestage");
      this.effectManager.clearPrestageEffects(state);
      this.logger.enable();
      this.effectManager.triggerEffectsForPhase(state, "startOfStage");
      this.effectManager.triggerEffectsForPhase(state, "afterStartOfStage");
      this.logger.pushGraphData(state);
      this.turnManager.startTurn(state);
      return state;
    }
    isCardUsable(state, card) {
      return this.cardManager.isCardUsable(state, card);
    }
    executeDecision(state, decision) {
      if (decision.state) {
        return decision.state;
      } else if (decision.card !== null) {
        return this.useCard(state, decision.card);
      } else {
        return this.endTurn(state);
      }
    }
    useCard(prevState, card) {
      const state = deepCopy(prevState);
      this.cardManager.useCard(state, card);
      return state;
    }
    endTurn(prevState) {
      const state = deepCopy(prevState);
      this.turnManager.endTurn(state);
      return state;
    }
  };

  // vendor/gakumas-engine/engine/StagePlayer.js
  var StagePlayer = class {
    constructor(engine, strategy) {
      this.engine = engine;
      this.strategy = strategy;
    }
    async play() {
      this.engine.logger.reset();
      let state = this.engine.getInitialState();
      state = this.engine.startStage(state);
      while (state[S.turnsRemaining] > 0) {
        const decision = await this.strategy.evaluate(state);
        try {
          state = this.engine.executeDecision(state, decision);
        } catch (e) {
          let exception = e;
          while (true) {
            try {
              state = await this.strategy.handleException(
                exception,
                state,
                decision
              );
              break;
            } catch (newException) {
              if (newException === exception) throw exception;
              exception = newException;
            }
          }
        }
      }
      return {
        score: state[S.score],
        logs: this.engine.logger.getLogs(state),
        graphData: this.engine.logger.getGraphData(state)
      };
    }
  };

  // vendor/gakumas-engine/strategies/BaseStrategy.js
  var BaseStrategy = class {
    constructor(engine) {
      this.engine = engine;
    }
    /**
     * Evaluates the given state, and selects a card to play.
     * Returns the next state and numeric evaluation of the future state.
     * Can be async for strategies that need to await user input (ManualStrategy).
     */
    evaluate(state) {
      throw new Error("evaluate is not implemented!");
    }
    /**
     * Given a state and list of cards, selects a card to move to hand.
     * Returns the indices of the cards to move.
     * Can be async for strategies that need to await user input (ManualStrategy).
     */
    pickCardsToMoveToHand(state, cards, num = 1) {
      throw new Error("pickCardsToMoveToHand is not implemented!");
    }
    /**
     * Given a state and list of cards, selects cards to move to the top of deck.
     * Returns the indices of the cards to move.
     * Can be async for strategies that need to await user input (ManualStrategy).
     */
    pickCardsToMoveToTopOfDeck(state, cards, num = 1) {
      throw new Error("pickCardsToMoveToTopOfDeck is not implemented!");
    }
    /**
     * Given a state and list of cards, selects a card to hold.
     * Returns the indices of the cards to hold.
     * Can be async for strategies that need to await user input (ManualStrategy).
     */
    pickCardsToHold(state, cards, num = 1) {
      throw new Error("pickCardsToHold is not implemented!");
    }
    /**
     * Given a state and list of cards, selects cards to copy.
     * Returns the indices of the cards to copy. Picks like holding by default.
     */
    pickCardsToCopy(state, cards, num = 1, optional = false) {
      return this.pickCardsToHold(state, cards, num, optional);
    }
    /**
     * Given a state and list of cards, selects a card to use for free.
     * Returns the indices of the cards to use.
     * Can be async for strategies that need to await user input (ManualStrategy).
     */
    pickCardsToUseFree(state, cards, num = 1) {
      throw new Error("pickCardsToUseFree is not implemented!");
    }
    /**
     * Handles exceptions that occur while executing a decision.
     * Returns the next state.
     * Can be async for strategies that need to await user input.
     * Rethrowing the exception ends the stage with it; throwing another one
     * hands that one back to this handler.
     */
    handleException(exception) {
      throw exception;
    }
  };

  // vendor/gakumas-engine/strategies/HeuristicStrategy.js
  var MAX_DEPTH = 3;
  function sumBuffWeight(buffs, turnsRemaining) {
    let total = 0;
    for (let i = 0; i < buffs.length; i++) {
      const b = buffs[i];
      total += b.amount * (b.turns || turnsRemaining);
    }
    return total;
  }
  var GROWTH_SCORE_MULTIPLIER_BY_INDEX = [];
  var GROWTH_SCORE_MULTIPLIERS = {
    [G["g.score"]]: 2,
    [G["g.scoreTimes"]]: 20,
    [G["g.cost"]]: 1,
    [G["g.typedCost"]]: 1,
    [G["g.genki"]]: 1,
    [G["g.goodConditionTurns"]]: 1,
    [G["g.perfectConditionTurns"]]: 1,
    [G["g.concentration"]]: 2,
    [G["g.goodImpressionTurns"]]: 1,
    [G["g.motivation"]]: 1,
    [G["g.fullPowerCharge"]]: 1,
    [G["g.halfCostTurns"]]: 1,
    [G["g.scoreByGoodImpressionTurns"]]: 20,
    [G["g.scoreByMotivation"]]: 20,
    [G["g.scoreByGenki"]]: 20,
    [G["g.stanceLevel"]]: 2
  };
  for (let k = 0; k < GROWTH_FIELDS.length; k++) {
    GROWTH_SCORE_MULTIPLIER_BY_INDEX[k] = GROWTH_SCORE_MULTIPLIERS[k] || 1;
  }
  var HeuristicStrategy = class extends BaseStrategy {
    constructor(engine) {
      super(engine);
      this.depth = 0;
      this.rootEffectCount = 0;
      this._configCache = /* @__PURE__ */ new Map();
    }
    _getScoringConfig(state) {
      const linkPhase = state[S.linkPhase] || 0;
      let cache = this._configCache.get(linkPhase);
      if (cache) return cache;
      const config = this.engine.getConfig(state);
      const { recommendedEffect, pIdolId, plan } = config.idol;
      let goodConditionTurnsMultiplier = recommendedEffect == "goodConditionTurns" ? 1.75 : 1;
      if (pIdolId == 114) goodConditionTurnsMultiplier = 8;
      const { typeMultipliers, stage } = config;
      let averageTypeMultiplier = 0;
      for (const type in typeMultipliers) {
        averageTypeMultiplier += typeMultipliers[type] * stage.turnCounts[type] / stage.turnCount;
      }
      cache = {
        config,
        recommendedEffect,
        pIdolId,
        plan,
        goodConditionTurnsMultiplier,
        concentrationMultiplier: recommendedEffect == "concentration" ? 3 : 1,
        goodImpressionTurnsMultiplier: recommendedEffect == "goodImpressionTurns" ? 3.5 : 1,
        motivationMultiplier: recommendedEffect == "motivation" ? 5.5 : 1,
        fullPowerMultiplier: recommendedEffect == "fullPower" ? 5 : 1,
        averageTypeMultiplier
      };
      this._configCache.set(linkPhase, cache);
      return cache;
    }
    evaluate(state) {
      if (this.depth == 0) {
        this.rootEffectCount = state[S.effects].length;
      }
      const handLog = this.engine.logger.log(state, "hand", null);
      const futures = state[S.handCards].map(
        (card) => this.getFuture(state, card)
      );
      let nextState;
      const scores = futures.map((f) => f ? f.score : -Infinity);
      let maxScore = Math.max(...scores);
      let selectedIndex = null;
      if (maxScore > 0) {
        selectedIndex = scores.indexOf(maxScore);
        nextState = futures[selectedIndex].state;
      } else {
        nextState = this.engine.endTurn(state);
        maxScore = this.getStateScore(nextState);
      }
      handLog.data = {
        handCards: state[S.handCards].map((card) => ({
          id: state[S.cardMap][card].id,
          c: state[S.cardMap][card].c11n
        })),
        scores,
        selectedIndex,
        state: this.engine.logger.getHandStateForLogging(state)
      };
      return { score: maxScore, state: nextState };
    }
    getFuture(state, card) {
      if (!this.engine.isCardUsable(state, card)) {
        return null;
      }
      const previewState = this.engine.useCard(state, card);
      this.depth++;
      if (previewState[S.turnsRemaining] >= state[S.turnsRemaining] && this.depth < MAX_DEPTH) {
        const future = this.evaluate(previewState);
        this.depth--;
        return { score: future.score, state: future.state };
      }
      let score = 0;
      const previewScore = this.getStateScore(previewState);
      const effectsDiff = previewState[S.effects].length - this.rootEffectCount;
      for (let i = 0; i < effectsDiff; i++) {
        const effect = previewState[S.effects][previewState[S.effects].length - i - 1];
        let limit = previewState[S.turnsRemaining];
        if (effect.limit != null && effect.limit < previewState[S.turnsRemaining]) {
          limit = effect.limit + 1;
        }
        if (limit == 0) continue;
        const postEffectState = deepCopy(previewState);
        this.engine.effectManager.triggerEffects(
          postEffectState,
          [
            {
              ...effect,
              phase: null,
              delay: effect.delay - previewState[S.turnsRemaining]
            }
          ],
          null,
          null,
          true
        );
        const scoreDelta = this.getStateScore(postEffectState) - previewScore;
        score += 3 * scoreDelta * Math.min(limit, 6);
      }
      if (this.engine.getConfig(state).idol.plan != "anomaly") {
        score += (state[S.removedCards].length - previewState[S.removedCards].length) * (previewState[S.score] - state[S.score]) / this.getAverageTypeMultiplier(state) * Math.floor(previewState[S.turnsRemaining] / 13);
      }
      score += previewScore;
      this.depth--;
      return { score: Math.round(score), state: previewState };
    }
    getAverageTypeMultiplier(state) {
      return this._getScoringConfig(state).averageTypeMultiplier;
    }
    scaleScore(score, state) {
      return Math.ceil(score * this.getAverageTypeMultiplier(state));
    }
    getStateScore(state) {
      if (state[S.turnsRemaining] == 0) return state[S.score];
      const sc = this._getScoringConfig(state);
      this.goodConditionTurnsMultiplier = sc.goodConditionTurnsMultiplier;
      this.concentrationMultiplier = sc.concentrationMultiplier;
      this.goodImpressionTurnsMultiplier = sc.goodImpressionTurnsMultiplier;
      this.motivationMultiplier = sc.motivationMultiplier;
      this.fullPowerMultiplier = sc.fullPowerMultiplier;
      const turnsRemaining = state[S.turnsRemaining];
      const goodConditionTurns = state[S.goodConditionTurns];
      let score = 0;
      score += state[S.handCards].length * 3;
      score += state[S.cardsUsed] * 8;
      score += state[S.stamina] * turnsRemaining * 0.05;
      score += state[S.genki] * Math.tanh(turnsRemaining / 3) * 0.7 * sc.motivationMultiplier;
      if (sc.pIdolId == 114) {
        if (turnsRemaining > 0) {
          score += goodConditionTurns * 3 * sc.goodConditionTurnsMultiplier;
        }
      } else {
        score += Math.min(goodConditionTurns, turnsRemaining) * 1.6 * sc.goodConditionTurnsMultiplier;
      }
      score += Math.min(state[S.perfectConditionTurns], turnsRemaining) * goodConditionTurns * sc.goodConditionTurnsMultiplier * 1.5;
      score += state[S.concentration] * turnsRemaining * sc.concentrationMultiplier;
      if (sc.plan == "anomaly" && (turnsRemaining || state[S.cardUsesRemaining])) {
        score += state[S.strengthTimes] * 40;
        score += state[S.preservationTimes] * 80;
        score += state[S.leisureTimes] * 80;
        score += state[S.fullPowerTimes] * 80 * sc.fullPowerMultiplier;
        score += state[S.enthusiasm] * 5;
        score += state[S.enthusiasm] * Math.min(state[S.enthusiasmExtensionTurns], turnsRemaining) * 5;
        score += state[S.cumulativeFullPowerCharge] * 3 * sc.fullPowerMultiplier;
        score += sumBuffWeight(state[S.enthusiasmBuffs], turnsRemaining) * 5;
        score += sumBuffWeight(state[S.fullPowerChargeBuffs], turnsRemaining) * sc.fullPowerMultiplier;
        score += sumBuffWeight(state[S.fullPowerEffectBuffs], turnsRemaining) * sc.fullPowerMultiplier;
        score += sumBuffWeight(state[S.strengthEffectBuffs], turnsRemaining);
        score += this.getGrowthScore(state) * 0.2 * turnsRemaining;
      }
      score += state[S.goodImpressionTurns] * turnsRemaining * sc.goodImpressionTurnsMultiplier;
      score += state[S.motivation] * turnsRemaining * 0.45 * sc.motivationMultiplier;
      score += state[S.prideTurns] * turnsRemaining * 0.2;
      score += sumBuffWeight(state[S.scoreBuffs], turnsRemaining) * 8;
      score += Math.min(state[S.halfCostTurns], turnsRemaining) * 6;
      score += Math.min(state[S.doubleCostTurns], turnsRemaining) * -6;
      score += Math.min(state[S.doubleBuffCostTurns], turnsRemaining) * -6;
      score += state[S.costReduction] * turnsRemaining * 0.5;
      score += state[S.doubleCardEffectCards] * 50;
      score += state[S.cardUsesRemaining] * 50;
      score += sumBuffWeight(state[S.goodImpressionTurnsBuffs], turnsRemaining) * 10 * sc.goodImpressionTurnsMultiplier;
      score += sumBuffWeight(state[S.goodImpressionTurnsEffectBuffs], turnsRemaining) * state[S.goodImpressionTurns] * sc.goodImpressionTurnsMultiplier;
      score += sumBuffWeight(state[S.goodImpressionTurnsTimesBuffs], turnsRemaining) * state[S.goodImpressionTurns] * sc.goodImpressionTurnsMultiplier;
      score += sumBuffWeight(state[S.goodConditionTurnsBuffs], turnsRemaining) * sc.goodConditionTurnsMultiplier;
      score += sumBuffWeight(state[S.goodConditionTurnsAdditionBuffs], turnsRemaining) * sc.goodConditionTurnsMultiplier;
      score += sumBuffWeight(state[S.motivationBuffs], turnsRemaining) * sc.motivationMultiplier;
      score += sumBuffWeight(state[S.motivationAdditionBuffs], turnsRemaining) * sc.motivationMultiplier;
      score += sumBuffWeight(state[S.concentrationBuffs], turnsRemaining) * sc.concentrationMultiplier;
      score += sumBuffWeight(state[S.concentrationAdditionBuffs], turnsRemaining) * sc.concentrationMultiplier;
      score += state[S.nullifyGenkiTurns] * -9;
      score += state[S.turnCardsUpgraded] * 20;
      score = Math.ceil(score * sc.averageTypeMultiplier);
      const recommendedEffect = sc.recommendedEffect;
      if (recommendedEffect == "goodConditionTurns") {
        score += state[S.score] * 0.4;
      } else if (recommendedEffect == "concentration") {
        score += state[S.score] * 0.6;
      } else if (recommendedEffect == "goodImpressionTurns") {
        score += state[S.score] * 1.1;
      } else if (recommendedEffect == "motivation") {
        score += state[S.score] * 0.6;
      } else if (recommendedEffect == "strength") {
        score += state[S.score] * 0.65;
      } else if (recommendedEffect == "preservation") {
        score += state[S.score] * 0.65;
      } else if (recommendedEffect == "fullPower") {
        score += state[S.score] * 0.8;
      } else {
        score += state[S.score];
      }
      return Math.round(score);
    }
    getGrowthScore(state) {
      let growthScore = 0;
      const cardMap = state[S.cardMap];
      for (let i = 0; i < cardMap.length; i++) {
        const growth = cardMap[i].growth;
        if (!growth) continue;
        for (let k = 0; k < GROWTH_FIELDS.length; k++) {
          const value = growth[k];
          if (value !== void 0) {
            growthScore += value * GROWTH_SCORE_MULTIPLIER_BY_INDEX[k];
          }
        }
      }
      return growthScore;
    }
    evaluateForHold(state, card) {
      let previewState = this.engine.getInitialState(true);
      previewState[S.cardMap] = state[S.cardMap].slice();
      this.engine.buffManager.setStance(previewState, "fullPower");
      previewState[S.nullifySelect] = 1;
      previewState = this.engine.useCard(previewState, card);
      return Math.round(previewState[S.score]);
    }
    pickCardsToHold(state, cards, num = 1, optional = false) {
      const evalCards = optional ? cards.concat(state[S.heldCards]) : cards;
      const scores = evalCards.map((c) => this.evaluateForHold(state, c));
      return scores.map((score, index) => ({ score, index })).sort((a, b) => b.score - a.score).slice(0, 2).map((item) => item.index).filter((index) => index < cards.length).slice(0, num);
    }
    pickCardsToMoveToHand(state, cards, num = 1) {
      return this.pickCardsToHold(state, cards, num);
    }
    pickCardsToMoveToTopOfDeck(state, cards, num = 1) {
      return this.pickCardsToHold(state, cards, num);
    }
    // evaluateForHold scores a card in a fresh full-power state, but the
    // selected use plays it in the real one, where a card whose conditions
    // fail does nothing (and a paid use discards it). Pick among the cards
    // whose conditions pass, if any do.
    pickCardsToUseFree(state, cards, num = 1) {
      const playable = [];
      for (let i = 0; i < cards.length; i++) {
        const conditions = this.engine.cardManager.getConditions(state, cards[i]);
        if (conditions.every(
          (condition) => this.engine.evaluator.evaluateCondition(state, condition)
        )) {
          playable.push(i);
        }
      }
      if (!playable.length) return this.pickCardsToHold(state, cards, num);
      return this.pickCardsToHold(
        state,
        playable.map((i) => cards[i]),
        num
      ).map((j) => playable[j]);
    }
  };

  // vendor/gakumas-engine/strategies/ManualStrategy.js
  var HoldSelectionRequest = class extends Error {
    constructor(state, cards, num, optional = false) {
      super("Hold selection required");
      this.name = "HoldSelectionRequest";
      this.state = state;
      this.cards = cards;
      this.num = num;
      this.optional = optional;
    }
  };
  var MoveToHandSelectionRequest = class extends Error {
    constructor(state, cards, num) {
      super("Move to hand selection required");
      this.name = "MoveToHandSelectionRequest";
      this.state = state;
      this.cards = cards;
      this.num = num;
    }
  };
  var MoveToTopOfDeckSelectionRequest = class extends Error {
    constructor(state, cards, num) {
      super("Move to top of deck selection required");
      this.name = "MoveToTopOfDeckSelectionRequest";
      this.state = state;
      this.cards = cards;
      this.num = num;
    }
  };
  var UseCardFreeSelectionRequest = class extends Error {
    constructor(state, cards, num) {
      super("Use card free selection required");
      this.name = "UseCardFreeSelectionRequest";
      this.state = state;
      this.cards = cards;
      this.num = num;
    }
  };
  var REQUEST_TYPES = [
    [HoldSelectionRequest, "HOLD_SELECTION"],
    [MoveToHandSelectionRequest, "MOVE_TO_HAND_SELECTION"],
    [MoveToTopOfDeckSelectionRequest, "MOVE_TO_TOP_OF_DECK_SELECTION"],
    [UseCardFreeSelectionRequest, "USE_CARD_FREE_SELECTION"]
  ];
  var ManualStrategy = class extends BaseStrategy {
    constructor(engine, inputCallback) {
      super(engine);
      this.inputCallback = inputCallback;
      this.answers = [];
      this.answerCursor = 0;
    }
    async evaluate(state) {
      stopRecordingRand();
      this.answers = [];
      this.answerCursor = 0;
      const handLog = this.engine.logger.log(state, "hand", null);
      const usableCards = state[S.handCards].filter(
        (card) => this.engine.isCardUsable(state, card)
      );
      handLog.data = {
        handCards: state[S.handCards].map((card) => ({
          id: state[S.cardMap][card].id,
          c: state[S.cardMap][card].c11n
        })),
        scores: state[S.handCards].map(
          (card) => usableCards.includes(card) ? 0 : -Infinity
        ),
        selectedIndex: null,
        state: this.engine.logger.getHandStateForLogging(state)
      };
      const selectedCard = await this.inputCallback({
        type: "CARD_SELECTION",
        state,
        handCards: state[S.handCards],
        usableCards
      });
      recordRand();
      return { card: selectedCard };
    }
    // Answers to this card use's selection prompts, in the order the use asks
    // them. A prompt aborts the use; once it's answered, the use replays from
    // the start and earlier prompts take their answers from here.
    nextAnswer(RequestType, state, cards, num, optional) {
      if (this.answerCursor < this.answers.length) {
        return this.answers[this.answerCursor++];
      }
      throw new RequestType(state, cards, num, optional);
    }
    pickCardsToMoveToHand(state, cards, num = 1) {
      return this.nextAnswer(MoveToHandSelectionRequest, state, cards, num);
    }
    pickCardsToMoveToTopOfDeck(state, cards, num = 1) {
      return this.nextAnswer(MoveToTopOfDeckSelectionRequest, state, cards, num);
    }
    pickCardsToHold(state, cards, num = 1, optional = false) {
      return this.nextAnswer(HoldSelectionRequest, state, cards, num, optional);
    }
    pickCardsToUseFree(state, cards, num = 1) {
      return this.nextAnswer(UseCardFreeSelectionRequest, state, cards, num);
    }
    async handleException(exception, state, decision) {
      const type = REQUEST_TYPES.find(
        ([RequestType]) => exception instanceof RequestType
      )?.[1];
      if (!type) throw exception;
      const selectedIndices = await this.inputCallback({
        type,
        state: exception.state,
        cards: exception.cards,
        num: exception.num,
        optional: !!exception.optional
      });
      this.answers.push(selectedIndices);
      this.answerCursor = 0;
      rewindRand();
      const nextState = this.engine.executeDecision(state, decision);
      stopRecordingRand();
      this.answers = [];
      this.answerCursor = 0;
      return nextState;
    }
  };

  // vendor/gakumas-engine/strategies/index.js
  var STRATEGIES = {
    HeuristicStrategy,
    ManualStrategy
  };
  var strategies_default = STRATEGIES;

  // src/worker.js
  self.addEventListener("message", async ({ data }) => {
    if (data.type !== "run") return;
    const { jobId, loadout, count, strategyName } = data;
    try {
      const stage = stages_default2.getById(loadout.stageId);
      if (!stage) {
        throw new Error(`\u30B9\u30C6\u30FC\u30B8ID ${loadout.stageId} \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002URL\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`);
      }
      if (stage.type === "linkContest") {
        throw new Error("\u30EA\u30F3\u30AF\u30B3\u30F3\u30C6\u30B9\u30C8\u306E\u30B9\u30C6\u30FC\u30B8\u306B\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002");
      }
      const config = new IdolStageConfig(
        new IdolConfig(loadout),
        new StageConfig(stage),
        loadout.enterPercents
      );
      resetRand(crypto.getRandomValues(new Uint32Array(1))[0]);
      const engine = new StageEngine(config, null);
      const strategy = new strategies_default[strategyName](engine);
      engine.strategy = strategy;
      const scores = new Float64Array(count);
      const step = Math.max(1, Math.floor(count / 20));
      let reported = 0;
      for (let i = 0; i < count; i++) {
        const result = await new StagePlayer(engine, strategy).play();
        scores[i] = result.score;
        if ((i + 1) % step === 0 || i === count - 1) {
          self.postMessage({ type: "progress", jobId, delta: i + 1 - reported });
          reported = i + 1;
        }
      }
      self.postMessage({ type: "done", jobId, scores }, [scores.buffer]);
    } catch (err) {
      self.postMessage({ type: "error", jobId, message: err?.message || String(err) });
    }
  });
})();
//# sourceMappingURL=worker.js.map
