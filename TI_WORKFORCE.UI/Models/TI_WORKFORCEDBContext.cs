using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace TI_WORKFORCE.UI.Models
{
    public partial class TI_WORKFORCEDBContext : DbContext
    {
        public TI_WORKFORCEDBContext()
        {
        }

        public TI_WORKFORCEDBContext(DbContextOptions<TI_WORKFORCEDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Resource> Resource { get; set; }
        public virtual DbSet<Timesheet> Timesheet { get; set; }

      
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Resource>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(80);

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Timesheet>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.DateReported).HasColumnType("datetime");

                entity.Property(e => e.HoursWorked).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.Timesheet)
                    .HasForeignKey(d => d.ResourceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Timesheet_Resource");
            });
        }
    }
}
