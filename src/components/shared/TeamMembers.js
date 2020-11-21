import React from 'react'
import teamMembers from '../../data/team-members'
import styles from './TeamMemberStyles.css'

const teamMembersJsx = teamMembers.map(teamMember => {
  const teamMemberImageStyles = {
    backgroundImage: `url(${teamMember.backgroundUrl})`
  }
  return (
    <div className={styles['team-member']} key={teamMember.id}>
      {/* Note how we can use different types of styling together.
          We use CSS modules for the majority of styling, but can still
          incorporate inline styles so each teamMember can have a separate image. */}
      <div className={styles['team-member-image']} style={teamMemberImageStyles}>
        <h3 className={styles['team-member-name']}>{teamMember.name}</h3>
      </div>

      <p className={styles.description}>
        {teamMember.description}
      </p>
    </div>
  )
})

const TeamMembers = () => (
  <div className={styles['team-members-container']}>
    {teamMembersJsx}
  </div>
)

export default TeamMembers
