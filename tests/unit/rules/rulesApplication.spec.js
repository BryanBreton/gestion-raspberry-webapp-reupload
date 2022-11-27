import { callFunctionAndCheckResult } from '@u-iris/iris-common'
import applicationRules from '@/service/rules/ruleApplicationForm'

describe('rulesApplication', () => {
  describe('name', () => {
    it('should return true if name is ok', () => {
      const name = 'SuperApplication'
      callFunctionAndCheckResult(applicationRules.name[0], true, name)
    })
    it('should return libelle error joi if name exceed 250 characters', () => {
      const name = 's'.repeat(256)
      callFunctionAndCheckResult(applicationRules.name[0], 'Maximum 250 caractères autorisés.', name)
    })
    it('should return libelle error joi if name is empty', () => {
      const name = ''
      callFunctionAndCheckResult(applicationRules.name[0], 'La valeur est obligatoire.', name)
    })
  })
  describe('url', () => {
    it('should return true if url is ok', () => {
      const url = 'http://localhost:8080'
      callFunctionAndCheckResult(applicationRules.url[0], true, url)
    })
    it('should return libelle error joi if url is not a uri', () => {
      const url = 'http'
      callFunctionAndCheckResult(applicationRules.url[0], 'La valeur doit être une URL.', url)
    })
    it('should return libelle error joi if url exceed 1024 characers', () => {
      const url = 'http://localhost/' + 's'.repeat(1025)
      callFunctionAndCheckResult(applicationRules.url[0], 'Maximum 1024 caractères autorisés.', url)
    })
    it('should return libelle error joi if url is empty', () => {
      const url = ''
      callFunctionAndCheckResult(applicationRules.url[0], 'La valeur est obligatoire.', url)
    })
  })
  describe('version', () => {
    it('should return true if version is ok', () => {
      const version = '1.0.1-Snapshot'
      callFunctionAndCheckResult(applicationRules.version[0], true, version)
    })
    it('should return true if version is empty', () => {
      const version = ''
      callFunctionAndCheckResult(applicationRules.version[0], true, version)
    })
    it('should return true if version is null', () => {
      const version = null
      callFunctionAndCheckResult(applicationRules.version[0], true, version)
    })
    it('should return libelle error if string is not a version', () => {
      const version = 'version'
      callFunctionAndCheckResult(applicationRules.version[0], 'Pas le bon format (Exemple : 1.0.1-SNAPSHOT, 1.0.1, 15.0.2, 17.2.6)', version)
    })
    it('should return libelle error if version exceed 15 characteres', () => {
      const version = '1.0.0-SNAAAAAPSHOOOOT'
      callFunctionAndCheckResult(applicationRules.version[0], 'Maximum 15 caractères autorisés.', version)
    })
  })
})
