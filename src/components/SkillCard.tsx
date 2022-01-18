import React from 'react';

import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
