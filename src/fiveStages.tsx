import React from 'react';
import { View, Text, Image, StyleSheet, SectionList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Stages = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Five stages of grief',
            data: [
              'The five stages of grief, often referred to as the Kübler-Ross model, were introduced by psychiatrist Elisabeth Kübler-Ross in her book "On Death and Dying" in 1969. These stages are a framework that describes the emotional and psychological responses individuals go through when dealing with the process of grief and loss. The stages are not necessarily experienced in a linear or fixed order, and not everyone experiences all the stages.',
            ],
          },
          {
            title: 'Denial',
            data: [
              'In this stage, individuals may have difficulty accepting the reality of the loss or the impending loss.',
              'They might exhibit behaviors or thoughts that reflect a refusal to believe what has happened. Denial serves as a',
              'psychological defense mechanism that helps people cope with overwhelming emotions and the shock of the situation.',
              'Its a way of temporarily shielding oneself from the full weight of the loss.',
            ],
          },
          {
            title: 'Anger',
            data: [
              'During the anger stage, individuals might struggle with feelings of unfairness, helplessness, and the inability to control the situation. This anger can be a way for them to express their pain and make sense of the overwhelming emotions they are experiencing. Its important to understand that these feelings of anger are a normal and natural part of the grieving process.As with all the stages of grief, not everyone will experience the anger stage in the same way or to the same degree. Some individuals might not experience much anger at all, while others might exhibit intense and prolonged anger. The progression through these stages is not linear, and people can move back and forth between different stages as they navigate their way through the grieving process.',
            ],
          },
          {
            title: 'Bargaining',
            data: [
              'During the bargaining stage, individuals may make deals with a higher power, fate, or even with themselves. These bargains often take the form of "if-then" statements.Bargaining can provide a temporary sense of hope and control, allowing individuals to believe that theres a chance things could be different. However, as the reality of the loss sets in, individuals often come to realize that bargaining is not a practical or effective way to cope with grief.',
            ],
          },
          {
            title: 'Depression',
            data: [
              'During the depression stage, individuals may withdraw from others, lose interest in activities they once enjoyed, and struggle with feelings of hopelessness. This emotional pain can be profound and may manifest physically as well, with symptoms such as fatigue, changes in appetite, and difficulty sleeping.Its important to note that the depression stage of grief is different from clinical depression, although the two can share similarities in terms of feelings of sadness and despair. In the context of grief, this stage is a normal response to a significant loss, and these feelings are often part of the healing process. However, if someones grief-related depression becomes severe, persistent, or interferes with their ability to function, its important to seek professional help. As with the other stages of grief, not everyone will experience the depression stage in the same way or to the same degree. Some individuals might move through this stage relatively quickly, while others might spend more time in it. The duration and intensity of each stage can vary widely based on individual personality, coping strategies, and the nature of the loss.',
            ],
          },
          {
            title: 'Acceptance',
            data: ['During the acceptance stage, individuals often experience a decrease in intense emotions like anger, denial, and depression. They may start to find a sense of peace and a way to continue living without being consumed by the grief. This doesnt mean they forget their loved one or the loss, but they learn to carry the memories and emotions with them in a way that allows them to function and find joy again.Its important to note that the acceptance stage doesnt necessarily mean the person is "fully healed" or that grief is completely resolved. Grief can ebb and flow over time, and anniversaries, milestones, or triggers can bring back emotions. Acceptance is a gradual process, and the grief experience can be different for each individual.'],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default Stages;
