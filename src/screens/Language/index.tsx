import React, {useEffect} from 'react';
import {I18nManager, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton} from 'react-native-paper';
import {mainStyles, ratioStyles} from './styles';

export function LanguageScreen() {
  const [language, setLanguage] = React.useState<'pt-br' | 'us'>('us');

  async function saveLanguagePreference(lang: string) {
    try {
      await AsyncStorage.setItem('user_language', lang);
      setLanguage(lang as 'pt-br' | 'us');
    } catch (e) {
      console.error('Falha ao salvar o idioma.', e);
    }
  }

  async function handleSystemLanguage() {
    const locale = I18nManager.getConstants().localeIdentifier;
    if (!locale || locale.toLowerCase().includes('pt')) {
      saveLanguagePreference('pt-br');
      return;
    }

    if (locale.toLowerCase().includes('en')) {
      saveLanguagePreference('us');
    }
  }

  async function loadLanguagePreference() {
    try {
      const savedLang = await AsyncStorage.getItem('user_language');
      if (!savedLang) {
        handleSystemLanguage();
      } else {
        setLanguage(savedLang as 'pt-br' | 'us');
      }
    } catch {
      setLanguage('pt-br');
    }
  }

  useEffect(() => {
    loadLanguagePreference();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.body}>
        <RadioButton.Group
          onValueChange={saveLanguagePreference}
          value={language}>
          <RadioButton.Item
            label="English"
            value="us"
            color="#C4D9EB"
            style={ratioStyles.card}
            labelStyle={ratioStyles.name}
          />
          <RadioButton.Item
            label="Português do Brasil"
            value="pt-br"
            color="#C4D9EB"
            style={[ratioStyles.card, ratioStyles.separator]}
            labelStyle={ratioStyles.name}
          />
        </RadioButton.Group>
      </View>
    </View>
  );
}
