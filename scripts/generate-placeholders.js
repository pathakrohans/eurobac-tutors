#!/usr/bin/env node

/**
 * Simple script to generate placeholder images for tutors
 * Requires: Node.js and sharp (npm install sharp)
 * 
 * Usage: node scripts/generate-placeholders.js
 */

const fs = require('fs')
const path = require('path')

// Tutor IDs from the data file
const tutors = [
  'sarah-chen',
  'marco-rossi',
  'emma-larsen',
  'james-wilson',
  'sophie-martin',
]

const publicTeamDir = path.join(__dirname, '..', 'public', 'team')

// Ensure directory exists
if (!fs.existsSync(publicTeamDir)) {
  fs.mkdirSync(publicTeamDir, { recursive: true })
}

console.log('Generating placeholder images...')
console.log('Note: This script creates simple placeholder files.')
console.log('For production, replace these with actual tutor headshots.\n')

tutors.forEach((tutorId) => {
  const filePath = path.join(publicTeamDir, `${tutorId}.jpg`)
  
  // Create a simple text file as placeholder (actual images require image library)
  if (!fs.existsSync(filePath)) {
    const placeholderText = `Placeholder for ${tutorId}\nReplace with actual 400x400px headshot image.`
    fs.writeFileSync(filePath, placeholderText)
    console.log(`Created placeholder: ${tutorId}.jpg`)
  } else {
    console.log(`Skipped (exists): ${tutorId}.jpg`)
  }
})

console.log('\nDone!')
console.log('\nTo generate actual images, you can:')
console.log('1. Use an online service like https://ui-avatars.com/')
console.log('2. Use placeholder.com: https://via.placeholder.com/400')
console.log('3. Add real photos to /public/team/')
console.log('\nSee PLACEHOLDER_IMAGES.md for more details.')


