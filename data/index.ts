import Realm from 'realm';

import Card from './Card';
import CardRequirement from './CardRequirement';
import CardRestrictions from './CardRestrictions';
import DeckRequirement from './DeckRequirement';
import RandomRequirement from './RandomRequirement';
import DeckAtLeastOption from './DeckAtLeastOption';
import DeckOption from './DeckOption';
import DeckOptionLevel from './DeckOptionLevel';
import FaqEntry from './FaqEntry';
import TabooCard from './TabooCard';
import TabooSet from './TabooSet';

const SCHEMA_VERSION = 40;
export default new Realm({
  schema: [
    Card,
    CardRequirement,
    CardRestrictions,
    DeckRequirement,
    RandomRequirement,
    DeckAtLeastOption,
    DeckOption,
    DeckOptionLevel,
    FaqEntry,
    TabooCard,
    TabooSet,
  ],
  schemaVersion: SCHEMA_VERSION,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < SCHEMA_VERSION) {
      newRealm.delete(newRealm.objects('Card'));
      newRealm.delete(newRealm.objects('FaqEntry'));
      newRealm.delete(newRealm.objects('TabooCard'));
      newRealm.delete(newRealm.objects('TabooSet'));
    }
  },
});